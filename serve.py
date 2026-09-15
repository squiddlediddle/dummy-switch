#!/usr/bin/env python3
"""
The Dummy Switch — local phone-test server.

Usage:
    python serve.py            # serve the prototype on port 8000 (all interfaces)
    python serve.py --port 9000
    python serve.py --qr       # also open a QR-code helper page for the phone
    python serve.py --selftest # start, request all routes, report, exit

PWA note: service workers (and full "Add to Home Screen" offline installs)
require HTTPS. HTTP on your LAN works fine for testing the reader and the
toggle; for the installable/offline experience, use the hosted share link
(HTTPS) built by build_share.py.
"""

import argparse
import functools
import http.server
import socket
import sys
import threading
import urllib.request
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent

QR_PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Scan to open — Dummy Switch</title>
<style>
  body { font-family: system-ui, sans-serif; background: #faf8f4; color: #1e1c18;
         display: flex; flex-direction: column; align-items: center; justify-content: center;
         min-height: 100vh; margin: 0; padding: 24px; text-align: center; }
  h1 { font-size: 20px; margin: 0 0 4px; }
  p  { color: #6b675e; font-size: 14px; margin: 0 0 20px; word-break: break-all; }
  #q { background: #fff; padding: 16px; border-radius: 16px; }
  code { font-family: Consolas, monospace; font-size: 12px; color: #2e6e4e; }
</style>
</head>
<body>
  <h1>Scan with your phone camera</h1>
  <p>Opens the Dummy Switch reader on your local network.<br>Both devices must be on the same Wi‑Fi.</p>
  <div id="q"></div>
  <p style="margin-top:20px">Or type: <br><code>URL</code></p>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <script>
    var url = "URL";
    new QRCode(document.getElementById("q"), { text: url, width: 260, height: 260 });
    document.querySelector("code").textContent = url;
  </script>
</body>
</html>
"""


def lan_ip() -> str:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, qr_url=None, **kwargs):
        self.qr_url = qr_url
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        if self.path.split("?", 1)[0] == "/__qr":
            body = QR_PAGE.replace("URL", self.qr_url or "http://localhost/")
            data = body.encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)
            return
        return super().do_GET()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


def make_server(port: int, qr_url: str):
    handler = functools.partial(Handler, qr_url=qr_url)
    return http.server.ThreadingHTTPServer(("0.0.0.0", port), handler)


def selftest(port: int):
    server = make_server(port, "http://localhost:1234/")
    t = threading.Thread(target=server.serve_forever, daemon=True)
    t.start()
    results = []
    for path in ("/", "/index.html", "/bundle-light-reality-cycle.js", "/manifest.webmanifest", "/sw.js", "/icons/icon-192.png", "/__qr"):
        try:
            with urllib.request.urlopen(f"http://127.0.0.1:{port}{path}", timeout=10) as r:
                results.append(f"200  {path:28s} {r.headers.get('Content-Type')}")
        except Exception as e:
            results.append(f"ERR  {path:28s} {e}")
    server.shutdown()
    print("\n".join(results))
    n_err = sum(1 for r in results if r.startswith("ERR"))
    print(f"selftest: {'PASS' if n_err == 0 else str(n_err) + ' FAILURES'}")
    return 0 if n_err == 0 else 1


def main():
    ap = argparse.ArgumentParser(description="Serve the Dummy Switch prototype on your LAN.")
    ap.add_argument("--port", type=int, default=8000)
    ap.add_argument("--qr", action="store_true", help="open a QR-code helper page for the phone")
    ap.add_argument("--selftest", action="store_true", help="request every route and exit")
    args = ap.parse_args()

    if args.selftest:
        return selftest(args.port)

    ip = lan_ip()
    local_url = f"http://127.0.0.1:{args.port}/"
    lan_url = f"http://{ip}:{args.port}/"

    print("─" * 60)
    print("The Dummy Switch — phone test server")
    print("─" * 60)
    print(f"  on this computer : {local_url}")
    print(f"  on your phone    : {lan_url}   (same Wi-Fi required)")
    print()
    print("  Note: HTTP on LAN is for quick testing. Full installable/offline")
    print("  PWA (service worker) requires HTTPS — use the hosted share build.")
    print("─" * 60)

    server = make_server(args.port, lan_url)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    if args.qr:
        qr_page = f"http://127.0.0.1:{args.port}/__qr"
        print(f"QR helper page open: {qr_page}")
        webbrowser.open(qr_page)
    try:
        webbrowser.open(local_url)
        print("Serving. Ctrl+C to stop.")
        while True:
            import time
            time.sleep(3600)
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())