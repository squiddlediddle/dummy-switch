window.PAPER_BUNDLES = window.PAPER_BUNDLES || {};
window.PAPER_BUNDLES["rubiks-hypercube"] = {
 "id": "rubiks-hypercube",
 "title": {
  "original": "RUBIK'S CUBE AS A 4-DIMENSIONAL MODEL",
  "everyone": "RUBIK'S CUBE AS A 4-DIMENSIONAL MODEL"
 },
 "subtitle": {
  "original": "The Puzzle as a Projective Model of Hyperspace",
  "everyone": "The Puzzle as a Projective Model of Hyperspace"
 },
 "tagline": {
  "original": "The Cube as a Working Model of Hyperspace",
  "everyone": "The Same Paper — Every Paragraph Explained"
 },
 "epigraph": {
  "original": "\"Every face-turn of the cube is a rotation in the fourth dimension, projected back into three.\"",
  "everyone": "\"Every face-turn of the cube is a rotation in the fourth dimension, projected back into three.\""
 },
 "author": "Squid",
 "sections": [
  {
   "number": null,
   "heading": {
    "original": {
     "kind": "heading",
     "text": "Abstract",
     "level": 2,
     "number": null,
     "name": "Abstract"
    },
    "everyone": {
     "kind": "heading",
     "text": "Abstract",
     "level": 2,
     "number": null,
     "name": "Abstract"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "This thesis develops the claim that a standard 3×3×3 Rubik's Cube is a working, manipulable model of the fourth spatial dimension. The central result is algebraic and exact: a quarter-turn of a single face is the visible projection of a 90° rotation in the $x$–$w$ plane of four-dimensional space, where $w$ is a bookkeeping coordinate assigned to every cubie. Coordinates for the 4D hypercube are developed as the set $\\{0,1\\}^4$, and the tesseract's projection into three dimensions is shown to behave exactly as the cube's plan-view projection behaves when the middle slice is rotated 45°: new faces appear that were previously hidden, and the silhouette exceeds the bounding square. Time is examined as a fourth-*timelike* dimension and the model's limits are stated honestly: the cube instantiates the *representation* of hyperspatial rotation, not hyperspatial occupancy. Closed by a demonstration protocol and a serious conclusion.",
      "level": null,
      "number": null,
      "name": "This thesis develops the claim that a standard 3×3×3 Rubik's Cube is a working, manipulable model of the fourth spatial dimension. The central result is algebraic and exact: a quarter-turn of a single face is the visible projection of a 90° rotation in the $x$–$w$ plane of four-dimensional space, where $w$ is a bookkeeping coordinate assigned to every cubie. Coordinates for the 4D hypercube are developed as the set $\\{0,1\\}^4$, and the tesseract's projection into three dimensions is shown to behave exactly as the cube's plan-view projection behaves when the middle slice is rotated 45°: new faces appear that were previously hidden, and the silhouette exceeds the bounding square. Time is examined as a fourth-*timelike* dimension and the model's limits are stated honestly: the cube instantiates the *representation* of hyperspatial rotation, not hyperspatial occupancy. Closed by a demonstration protocol and a serious conclusion."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "Here's the whole paper in a paragraph. A **Rubik's Cube** looks like an ordinary 3D puzzle, but its turns secretly do four-dimensional mathematics: each quarter-turn of a face is exactly a 90° rotation in a *hidden* direction of space, which the paper calls $w$. The same coordinate trick that builds a hypercube (the 4D version of a cube) makes the cube's own turns legible. Look at the cube from above and turn its middle slice 45°: the silhouette grows four triangles that stick out sideways — that's what projection of a higher-dimensional object looks like. The paper is careful about one thing: the cube doesn't *live* in 4D; it *performs* 4D math you can hold. Time gets a mention too (it's the physicist's fourth dimension, of a different kind). It ends with three things you can do with a real cube to see it all yourself.",
      "level": null,
      "number": null,
      "name": "Here's the whole paper in a paragraph. A **Rubik's Cube** looks like an ordinary 3D puzzle, but its turns secretly do four-dimensional mathematics: each quarter-turn of a face is exactly a 90° rotation in a *hidden* direction of space, which the paper calls $w$. The same coordinate trick that builds a hypercube (the 4D version of a cube) makes the cube's own turns legible. Look at the cube from above and turn its middle slice 45°: the silhouette grows four triangles that stick out sideways — that's what projection of a higher-dimensional object looks like. The paper is careful about one thing: the cube doesn't *live* in 4D; it *performs* 4D math you can hold. Time gets a mention too (it's the physicist's fourth dimension, of a different kind). It ends with three things you can do with a real cube to see it all yourself."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": null,
   "heading": {
    "original": {
     "kind": "heading",
     "text": "How to Read This Document",
     "level": 2,
     "number": null,
     "name": "How to Read This Document"
    },
    "everyone": {
     "kind": "heading",
     "text": "How to Read This Document",
     "level": 2,
     "number": null,
     "name": "How to Read This Document"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "callout",
      "text": "[!info] Genre declaration and dual-voice contract\nThis edition is the technical, continuous paper: read it start to finish. The companion edition (the one you reach with the switch) is not a retelling of this paper — it is a *direct explanation*: section by section, paragraph by paragraph, each explanation sits directly beneath the text it translates. When a passage is hard, switch voices, read the explanation, switch back, and continue at exactly the same point. The mathematics here is real: rotations in four dimensions are ordinary linear algebra, and the claims are held to it. Where the prose becomes projective or poetic (\"the fourth dimension is where the turn happens\"), it is flagged as interpretation, not physics.",
      "level": null,
      "number": null,
      "name": "[!info] Genre declaration and dual-voice contract\nThis edition is the technical, continuous paper: read it start to finish. The companion edition (the one you reach with the switch) is not a retelling of this paper — it is a *direct explanation*: section by section, paragraph by paragraph, each explanation sits directly beneath the text it translates. When a passage is hard, switch voices, read the explanation, switch back, and continue at exactly the same point. The mathematics here is real: rotations in four dimensions are ordinary linear algebra, and the claims are held to it. Where the prose becomes projective or poetic (\"the fourth dimension is where the turn happens\"), it is flagged as interpretation, not physics."
     },
     "everyone": {
      "kind": "callout",
      "text": "[!info] Switching rules\nThe switch between voices is a *per-paragraph* explain button, not a second book. The technical paper is one continuous read; this edition explains it piece by piece, in the same order, and each explanation here corresponds to the paragraph directly under it in the technical version. Stuck on a paragraph? Switch, read that paragraph's translation, switch back — you'll be at the exact same spot. You don't have to read this edition in order, and you don't have to read all of it. The math is real, but translated: every formula here gets a sentence that says what it means.",
      "level": null,
      "number": null,
      "name": "[!info] Switching rules\nThe switch between voices is a *per-paragraph* explain button, not a second book. The technical paper is one continuous read; this edition explains it piece by piece, in the same order, and each explanation here corresponds to the paragraph directly under it in the technical version. Stuck on a paragraph? Switch, read that paragraph's translation, switch back — you'll be at the exact same spot. You don't have to read this edition in order, and you don't have to read all of it. The math is real, but translated: every formula here gets a sentence that says what it means."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "1",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "1. An Introduction to Dimensions",
     "level": 2,
     "number": "1",
     "name": "An Introduction to Dimensions"
    },
    "everyone": {
     "kind": "heading",
     "text": "1. An Introduction to Dimensions",
     "level": 2,
     "number": "1",
     "name": "An Introduction to Dimensions"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "The exploration of dimensions extends beyond our familiar three-dimensional reality, challenging intuition with the concept of a fourth spatial dimension, or hyperspace. A dimension is a direction of measurement — a degree of freedom along which a coordinate can change. Length, width, and height exhaust three: nothing in our daily perception suggests a fourth direction perpendicular to all three, because no such direction is available to a body that lives inside the three. Yet the mathematics of dimension does not stop at three, and it costs nothing to add a fourth coordinate; the difficulty is not the arithmetic but the perception.",
      "level": null,
      "number": null,
      "name": "The exploration of dimensions extends beyond our familiar three-dimensional reality, challenging intuition with the concept of a fourth spatial dimension, or hyperspace. A dimension is a direction of measurement — a degree of freedom along which a coordinate can change. Length, width, and height exhaust three: nothing in our daily perception suggests a fourth direction perpendicular to all three, because no such direction is available to a body that lives inside the three. Yet the mathematics of dimension does not stop at three, and it costs nothing to add a fourth coordinate; the difficulty is not the arithmetic but the perception."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** most of us live our whole lives believing there are three dimensions — length, width, height — and the idea of a fourth is where common sense gives up. It also said a dimension is just a *direction of measurement*: a way a coordinate can change. Three directions are the ones we can physically point at. A fourth direction, perpendicular to all three at once, is something no body inside three dimensions can point at — but nothing stops the *mathematics* from adding it. Math doesn't need you to point; it can write a fourth coordinate on paper even if you can't see it.",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** most of us live our whole lives believing there are three dimensions — length, width, height — and the idea of a fourth is where common sense gives up. It also said a dimension is just a *direction of measurement*: a way a coordinate can change. Three directions are the ones we can physically point at. A fourth direction, perpendicular to all three at once, is something no body inside three dimensions can point at — but nothing stops the *mathematics* from adding it. Math doesn't need you to point; it can write a fourth coordinate on paper even if you can't see it."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "This dimension has significant implications across scientific fields. Physics treats time as a fourth coordinate in spacetime. Theories that unify the fundamental forces gain elegance in spaces of more than three dimensions, where the extra directions can be geometrically \"rolled up.\" Higher-dimensional geometry is not a curiosity: it is the working language of parts of modern physics. What is missing is an intuition — an object a person can hold whose behaviour is visibly four-dimensional.",
      "level": null,
      "number": null,
      "name": "This dimension has significant implications across scientific fields. Physics treats time as a fourth coordinate in spacetime. Theories that unify the fundamental forces gain elegance in spaces of more than three dimensions, where the extra directions can be geometrically \"rolled up.\" Higher-dimensional geometry is not a curiosity: it is the working language of parts of modern physics. What is missing is an intuition — an object a person can hold whose behaviour is visibly four-dimensional."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**Why that matters:** the only real obstacle to \"getting\" the fourth dimension is not arithmetic — it's perception. This paper's whole job is to fix the perception part.",
      "level": null,
      "number": null,
      "name": "**Why that matters:** the only real obstacle to \"getting\" the fourth dimension is not arithmetic — it's perception. This paper's whole job is to fix the perception part."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The Rubik's Cube, despite its simplicity, is such an object. A puzzle of 26 small cubes arranged as a 3×3×3 block admits a million-fold geometry that lives, in a precise algebraic sense, partly outside its own three dimensions. This document aims to show how the cube models the fourth dimension through its geometric transformations, bridging the gap between theory and experience: the cube is the fourth dimension, projected back into your hands.",
      "level": null,
      "number": null,
      "name": "The Rubik's Cube, despite its simplicity, is such an object. A puzzle of 26 small cubes arranged as a 3×3×3 block admits a million-fold geometry that lives, in a precise algebraic sense, partly outside its own three dimensions. This document aims to show how the cube models the fourth dimension through its geometric transformations, bridging the gap between theory and experience: the cube is the fourth dimension, projected back into your hands."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And then:** the text claims higher-dimensional thinking isn't a niche hobby: physics uses a fourth coordinate all the time (time, in spacetime), and some modern theories treat extra dimensions as real but \"rolled up\" tiny. So the missing piece isn't theory — it's *intuition*: an object you can hold in your hand that visibly behaves four-dimensionally. The cube, the text says, is that object. That's the promise the rest of the paper has to keep.",
      "level": null,
      "number": null,
      "name": "**And then:** the text claims higher-dimensional thinking isn't a niche hobby: physics uses a fourth coordinate all the time (time, in spacetime), and some modern theories treat extra dimensions as real but \"rolled up\" tiny. So the missing piece isn't theory — it's *intuition*: an object you can hold in your hand that visibly behaves four-dimensionally. The cube, the text says, is that object. That's the promise the rest of the paper has to keep."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "2",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "2. Understanding the Rubik's Cube",
     "level": 2,
     "number": "2",
     "name": "Understanding the Rubik's Cube"
    },
    "everyone": {
     "kind": "heading",
     "text": "2. Understanding the Rubik's Cube",
     "level": 2,
     "number": "2",
     "name": "Understanding the Rubik's Cube"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "The Rubik's Cube is a three-dimensional puzzle: six faces, a 3×3 grid of stickers per face, 26 visible cubies arranged around one hidden core. Each face can be rotated 90° about the axis through its center, and any sequence of face-turns produces a scrambled state. The space of reachable states is enormous — exactly $43\\,252\\,003\\,274\\,489\\,856\\,000$ configurations (about $4.3 \\times 10^{19}$, or 43 quintillion) — and yet every state is reachable from every other state by a short sequence of turns: the puzzle's \"God's number\" is 20 moves. Two facts matter for the dimensional reading. First, the cube never stops being a cube: no turn breaks the outer casing or bends a face, yet the identity of almost every cubie's location changes with every turn. Second, a face-turn is rigid: all nine cubies of a face move together, and the face's plane does not intersect any other face during the turn.",
      "level": null,
      "number": null,
      "name": "The Rubik's Cube is a three-dimensional puzzle: six faces, a 3×3 grid of stickers per face, 26 visible cubies arranged around one hidden core. Each face can be rotated 90° about the axis through its center, and any sequence of face-turns produces a scrambled state. The space of reachable states is enormous — exactly $43\\,252\\,003\\,274\\,489\\,856\\,000$ configurations (about $4.3 \\times 10^{19}$, or 43 quintillion) — and yet every state is reachable from every other state by a short sequence of turns: the puzzle's \"God's number\" is 20 moves. Two facts matter for the dimensional reading. First, the cube never stops being a cube: no turn breaks the outer casing or bends a face, yet the identity of almost every cubie's location changes with every turn. Second, a face-turn is rigid: all nine cubies of a face move together, and the face's plane does not intersect any other face during the turn."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** the cube is a 3×3×3 block of 26 small cubes around one hidden core, each face turns 90°, and the puzzle has about 43 quintillion possible states — yet any state can be solved in 20 moves at most. Two things matter from all of that. First: no matter how much you scramble it, it stays a cube — the outside never breaks — while every piece's location changes. Second: each turn is *rigid* — all nine pieces of a face move together in one flat plane, and that plane never collides with any other face while turning.",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** the cube is a 3×3×3 block of 26 small cubes around one hidden core, each face turns 90°, and the puzzle has about 43 quintillion possible states — yet any state can be solved in 20 moves at most. Two things matter from all of that. First: no matter how much you scramble it, it stays a cube — the outside never breaks — while every piece's location changes. Second: each turn is *rigid* — all nine pieces of a face move together in one flat plane, and that plane never collides with any other face while turning."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The first fact — identity preserved through maximal rearrangement — is the same structure at work when a higher-dimensional object rotates: the object remains itself while its parts re-enter the lower-dimensional view in new arrangements. The second fact — a rigid plane rotating without collision — is the geometric seed of the whole model. When a plane rotates rigidly inside a three-dimensional space, the physics of the rotation is not exhausted by the three coordinates we can see; one more direction is required to write the rotation cleanly. That direction, for the cube, is the fourth coordinate $w$ developed in §6.",
      "level": null,
      "number": null,
      "name": "The first fact — identity preserved through maximal rearrangement — is the same structure at work when a higher-dimensional object rotates: the object remains itself while its parts re-enter the lower-dimensional view in new arrangements. The second fact — a rigid plane rotating without collision — is the geometric seed of the whole model. When a plane rotates rigidly inside a three-dimensional space, the physics of the rotation is not exhausted by the three coordinates we can see; one more direction is required to write the rotation cleanly. That direction, for the cube, is the fourth coordinate $w$ developed in §6."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**Why that matters:** \"stays itself while completely rearranging\" is exactly what a higher-dimensional object does when it rotates, seen from our dimension: same object, brand-new view. And \"a flat plane spins rigidly without touching anything\" is the physical clue the whole model runs on — as if that plane is rotating *around something we can't see*.",
      "level": null,
      "number": null,
      "name": "**Why that matters:** \"stays itself while completely rearranging\" is exactly what a higher-dimensional object does when it rotates, seen from our dimension: same object, brand-new view. And \"a flat plane spins rigidly without touching anything\" is the physical clue the whole model runs on — as if that plane is rotating *around something we can't see*."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "In the cube's standard orientation, call the axes $x$ (right), $y$ (up), and $z$ (toward the viewer), and assign to every cubie a fourth coordinate $w$, initially zero for all cubies. The puzzle is then a stack of cubies in four-coordinate space of which three coordinates are visible; the fourth is a hidden degree of freedom. Section 4 develops the four-dimensional object this coordinate bookkeeping describes, and §5 and §6 show the bookkeeping's geometric reality in the cube's own behaviour.",
      "level": null,
      "number": null,
      "name": "In the cube's standard orientation, call the axes $x$ (right), $y$ (up), and $z$ (toward the viewer), and assign to every cubie a fourth coordinate $w$, initially zero for all cubies. The puzzle is then a stack of cubies in four-coordinate space of which three coordinates are visible; the fourth is a hidden degree of freedom. Section 4 develops the four-dimensional object this coordinate bookkeeping describes, and §5 and §6 show the bookkeeping's geometric reality in the cube's own behaviour."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And then:** the text gives names to the directions: $x$ is right, $y$ is up, $z$ is toward you — and every piece also gets a hidden fourth coordinate called $w$, starting at zero. So the cube is now really a stack of four-coordinate objects, of which you can *see* three coordinates. The hidden one, $w$, is the dimension the turns will turn out to use. Keep that idea — it's the entire trick of the paper.",
      "level": null,
      "number": null,
      "name": "**And then:** the text gives names to the directions: $x$ is right, $y$ is up, $z$ is toward you — and every piece also gets a hidden fourth coordinate called $w$, starting at zero. So the cube is now really a stack of four-coordinate objects, of which you can *see* three coordinates. The hidden one, $w$, is the dimension the turns will turn out to use. Keep that idea — it's the entire trick of the paper."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "4",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "4. The Hypercube and the Fourth Dimension",
     "level": 2,
     "number": "4",
     "name": "The Hypercube and the Fourth Dimension"
    },
    "everyone": {
     "kind": "heading",
     "text": "4. The Hypercube and the Fourth Dimension",
     "level": 2,
     "number": "4",
     "name": "The Hypercube and the Fourth Dimension"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "In mathematics, the four-dimensional analog of a cube is the hypercube, or tesseract. Where a square is $\\{0,1\\}^2$ (four vertices), and a cube is $\\{0,1\\}^3$ (eight vertices), a hypercube is $\\{0,1\\}^4$: every point is a quadruple $(x_1, x_2, x_3, x_4)$ with each coordinate 0 or 1, for sixteen vertices. Its structure is completely regular: 16 vertices, 32 edges, 24 square faces, and 8 cubic cells — four cubes' worth of boundary, glued pairwise into a single closed 4D surface. The tesseract is not a metaphor or a drawing trick; it is an object of four-dimensional geometry with well-defined volume, surface, and rotation, exactly as a cube is an object of three-dimensional geometry.",
      "level": null,
      "number": null,
      "name": "In mathematics, the four-dimensional analog of a cube is the hypercube, or tesseract. Where a square is $\\{0,1\\}^2$ (four vertices), and a cube is $\\{0,1\\}^3$ (eight vertices), a hypercube is $\\{0,1\\}^4$: every point is a quadruple $(x_1, x_2, x_3, x_4)$ with each coordinate 0 or 1, for sixteen vertices. Its structure is completely regular: 16 vertices, 32 edges, 24 square faces, and 8 cubic cells — four cubes' worth of boundary, glued pairwise into a single closed 4D surface. The tesseract is not a metaphor or a drawing trick; it is an object of four-dimensional geometry with well-defined volume, surface, and rotation, exactly as a cube is an object of three-dimensional geometry."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** the 4D version of a cube is called a hypercube, or tesseract, and it's a completely ordinary math object: points are strings of four 0/1 coordinates, and it has 16 corners, 32 edges, 24 square faces, and 8 cube-shaped \"walls.\" It isn't a metaphor or a drawing trick — it's as real in four dimensions as a cube is in three.",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** the 4D version of a cube is called a hypercube, or tesseract, and it's a completely ordinary math object: points are strings of four 0/1 coordinates, and it has 16 corners, 32 edges, 24 square faces, and 8 cube-shaped \"walls.\" It isn't a metaphor or a drawing trick — it's as real in four dimensions as a cube is in three."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "Every picture of a tesseract is a projection, and this is the first lesson of the whole model. A 3D cube drawn on paper is a 2D projection — a square with diagonals, or a wireframe — and different 2D drawings reveal different features of the same 3D object. By the same token, a tesseract drawn on a screen is a 3D projection of a 4D object, and the familiar \"two cubes connected by lines at their corners\" is only one view of many: the outer cube is the near part of the hypercube, the inner cube is the far part, and the connecting lines are edges that pass \"through\" the third dimension from the viewer's perspective. The projection does not lose information arbitrarily — it loses it exactly one dimension at a time, which is what makes projection the right tool for dimensional education.",
      "level": null,
      "number": null,
      "name": "Every picture of a tesseract is a projection, and this is the first lesson of the whole model. A 3D cube drawn on paper is a 2D projection — a square with diagonals, or a wireframe — and different 2D drawings reveal different features of the same 3D object. By the same token, a tesseract drawn on a screen is a 3D projection of a 4D object, and the familiar \"two cubes connected by lines at their corners\" is only one view of many: the outer cube is the near part of the hypercube, the inner cube is the far part, and the connecting lines are edges that pass \"through\" the third dimension from the viewer's perspective. The projection does not lose information arbitrarily — it loses it exactly one dimension at a time, which is what makes projection the right tool for dimensional education."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**Why that matters:** every picture of a tesseract is a *projection* — a 4D object squashed down to 3D, the same way a 3D cube drawn on paper is squashed to 2D. The famous \"two nested cubes connected by lines\" picture is only one viewing angle of the hypercube: the outer cube is the near half, the inner cube is the far half, and the connecting lines are edges that pass *through* space between them. Different angles show different features — and crucially, a projection can only ever lose information in a tidy, one-dimension-at-a-time way. That tidiness is what makes projection useful for teaching.",
      "level": null,
      "number": null,
      "name": "**Why that matters:** every picture of a tesseract is a *projection* — a 4D object squashed down to 3D, the same way a 3D cube drawn on paper is squashed to 2D. The famous \"two nested cubes connected by lines\" picture is only one viewing angle of the hypercube: the outer cube is the near half, the inner cube is the far half, and the connecting lines are edges that pass *through* space between them. Different angles show different features — and crucially, a projection can only ever lose information in a tidy, one-dimension-at-a-time way. That tidiness is what makes projection useful for teaching."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The critical observation is that a projection can make visible things that the object's own dimensional reality keeps hidden; rotation, specifically, changes what a projection shows without changing the object. A cube rotated at a corner appears in 2D as a hexagon with new faces visible; a hypercube rotated in the $x$–$w$ plane appears in 3D with new cells visible. Section 5 shows that a Rubik's Cube, held and turned, performs exactly this act of projection with its own rotating slice — and does it with hardware the reader already owns.",
      "level": null,
      "number": null,
      "name": "The critical observation is that a projection can make visible things that the object's own dimensional reality keeps hidden; rotation, specifically, changes what a projection shows without changing the object. A cube rotated at a corner appears in 2D as a hexagon with new faces visible; a hypercube rotated in the $x$–$w$ plane appears in 3D with new cells visible. Section 5 shows that a Rubik's Cube, held and turned, performs exactly this act of projection with its own rotating slice — and does it with hardware the reader already owns."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And then:** the key line to remember: *rotating the object changes its projection without changing the object.* Turn a 3D cube on a corner and its 2D outline becomes a hexagon with faces you couldn't see before. Rotate a hypercube in 4D and its 3D projection shows new cells. Same object, new appearance — just by turning. The next section shows the Rubik's Cube doing exactly this with its middle slice, using hardware you already own.",
      "level": null,
      "number": null,
      "name": "**And then:** the key line to remember: *rotating the object changes its projection without changing the object.* Turn a 3D cube on a corner and its 2D outline becomes a hexagon with faces you couldn't see before. Rotate a hypercube in 4D and its 3D projection shows new cells. Same object, new appearance — just by turning. The next section shows the Rubik's Cube doing exactly this with its middle slice, using hardware you already own."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "5",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "5. Modelling the Fourth Dimension with a Rubik's Cube",
     "level": 2,
     "number": "5",
     "name": "Modelling the Fourth Dimension with a Rubik's Cube"
    },
    "everyone": {
     "kind": "heading",
     "text": "5. Modelling the Fourth Dimension with a Rubik's Cube",
     "level": 2,
     "number": "5",
     "name": "Modelling the Fourth Dimension with a Rubik's Cube"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "Consider the cube from directly above: the plan view. In its default orientation, the cube presents a single flat square — the top face, edge-on to nothing, an honest 2D picture of a 3D object. Now rotate the middle horizontal slice 45° while holding the top and bottom faces fixed. The plan view changes shape: the rotated slice's corners now project beyond the outline of the top and bottom faces, and four triangles appear outside the original square's edges:",
      "level": null,
      "number": null,
      "name": "Consider the cube from directly above: the plan view. In its default orientation, the cube presents a single flat square — the top face, edge-on to nothing, an honest 2D picture of a 3D object. Now rotate the middle horizontal slice 45° while holding the top and bottom faces fixed. The plan view changes shape: the rotated slice's corners now project beyond the outline of the top and bottom faces, and four triangles appear outside the original square's edges:"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** look at the cube from directly above. Normally all you see is one flat square — a 2D picture of a 3D object. Now turn the *middle* horizontal slice 45° while holding the top and bottom faces still. The picture changes: the middle slice's corners poke out past the outline, and the silhouette grows four little triangles on the outside of the original square. Here's the diagram it drew:",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** look at the cube from directly above. Normally all you see is one flat square — a 2D picture of a 3D object. Now turn the *middle* horizontal slice 45° while holding the top and bottom faces still. The picture changes: the middle slice's corners poke out past the outline, and the silhouette grows four little triangles on the outside of the original square. Here's the diagram it drew:"
     }
    },
    {
     "original": {
      "kind": "code",
      "text": "           ▲\n          / \\\n     ┌───/───\\───┐\n     │  /     \\  │\n     │ /   □   \\ │\n     │/         \\│\n     └───────────┘",
      "level": null,
      "number": null,
      "name": "           ▲\n          / \\\n     ┌───/───\\───┐\n     │  /     \\  │\n     │ /   □   \\ │\n     │/         \\│\n     └───────────┘"
     },
     "everyone": {
      "kind": "code",
      "text": "           ▲\n          / \\\n     ┌───/───\\───┐\n     │  /     \\  │\n     │ /   □   \\ │\n     │/         \\│\n     └───────────┘",
      "level": null,
      "number": null,
      "name": "           ▲\n          / \\\n     ┌───/───\\───┐\n     │  /     \\  │\n     │ /   □   \\ │\n     │/         \\│\n     └───────────┘"
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The square silhouette persists, but it has grown four triangular wings, one per protruding corner of the rotated slice. No surface area was added — the cube is the same 3D object — yet its projection onto the viewing plane is genuinely larger and qualitatively new. This is exactly what happens to a hypercube under 4D rotation: the object does not change, but its projection into three dimensions does, exposing structure that was previously hidden inside the silhouette.",
      "level": null,
      "number": null,
      "name": "The square silhouette persists, but it has grown four triangular wings, one per protruding corner of the rotated slice. No surface area was added — the cube is the same 3D object — yet its projection onto the viewing plane is genuinely larger and qualitatively new. This is exactly what happens to a hypercube under 4D rotation: the object does not change, but its projection into three dimensions does, exposing structure that was previously hidden inside the silhouette."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**What that meant:** nothing new was added to the cube — same piece of plastic, same three dimensions — but what it *looks like* from above genuinely changed: the outline grew, and triangles appeared that weren't there before. That's projection in action. A hypercube rotating in four dimensions does the same thing one level up: the object doesn't change, but its shadow in 3D does, revealing structure that was hidden inside the silhouette.",
      "level": null,
      "number": null,
      "name": "**What that meant:** nothing new was added to the cube — same piece of plastic, same three dimensions — but what it *looks like* from above genuinely changed: the outline grew, and triangles appeared that weren't there before. That's projection in action. A hypercube rotating in four dimensions does the same thing one level up: the object doesn't change, but its shadow in 3D does, revealing structure that was hidden inside the silhouette."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The algebraic version of the same event is the face-turn itself. When a face of the cube is rotated 90° — one turn in standard notation — the nine cubies of that face move rigidly in a plane, and every other cubie stays fixed. A rigid rotation of a 2D plane inside ordinary 3D space is representable with the three visible coordinates; but the cube's own turn, read as a transformation of the whole four-coordinate assembly of cubies, is literally a rotation in the $x$–$w$ plane of four-dimensional space (Section 6 gives the exact mapping). The turn *appears* to be ordinary 3D motion; algebraically, it is a hyperspatial rotation of a subset of the cubies, projected back into the three coordinates a human can see. The claim is representational, not physical: the cube does not occupy four dimensions; it *instantiates the mathematics* of one, with machinery that fits in the hand.",
      "level": null,
      "number": null,
      "name": "The algebraic version of the same event is the face-turn itself. When a face of the cube is rotated 90° — one turn in standard notation — the nine cubies of that face move rigidly in a plane, and every other cubie stays fixed. A rigid rotation of a 2D plane inside ordinary 3D space is representable with the three visible coordinates; but the cube's own turn, read as a transformation of the whole four-coordinate assembly of cubies, is literally a rotation in the $x$–$w$ plane of four-dimensional space (Section 6 gives the exact mapping). The turn *appears* to be ordinary 3D motion; algebraically, it is a hyperspatial rotation of a subset of the cubies, projected back into the three coordinates a human can see. The claim is representational, not physical: the cube does not occupy four dimensions; it *instantiates the mathematics* of one, with machinery that fits in the hand."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And then the text got algebraic:** a quarter-turn of a whole face is the same story in coordinates. Nine pieces move together in a flat plane; everything else stays. Written as a transformation of the cube's four-coordinate model, that turn is exactly a rotation in the hidden $x$–$w$ plane — a 4D rotation seen through 3D glasses. (The precise formula is coming in the next section.) And a promise about honesty before we go on: the paper is careful to say the cube does not physically leave three dimensions. The $w$ coordinate is a working notation; the cube *performs* 4D mathematics, it doesn't *travel* to 4D. Think of it as a flight simulator: the math being flown is real, even though the chair never leaves the room.",
      "level": null,
      "number": null,
      "name": "**And then the text got algebraic:** a quarter-turn of a whole face is the same story in coordinates. Nine pieces move together in a flat plane; everything else stays. Written as a transformation of the cube's four-coordinate model, that turn is exactly a rotation in the hidden $x$–$w$ plane — a 4D rotation seen through 3D glasses. (The precise formula is coming in the next section.) And a promise about honesty before we go on: the paper is careful to say the cube does not physically leave three dimensions. The $w$ coordinate is a working notation; the cube *performs* 4D mathematics, it doesn't *travel* to 4D. Think of it as a flight simulator: the math being flown is real, even though the chair never leaves the room."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "6",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "6. The Mathematics of a 4D Turn",
     "level": 2,
     "number": "6",
     "name": "The Mathematics of a 4D Turn"
    },
    "everyone": {
     "kind": "heading",
     "text": "6. The Mathematics of a 4D Turn",
     "level": 2,
     "number": "6",
     "name": "The Mathematics of a 4D Turn"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "Assign every cubie a fourth coordinate $w$ (initially 0 everywhere). A quarter-turn of the right face ($x = 1$) is then the exact coordinate map:",
      "level": null,
      "number": null,
      "name": "Assign every cubie a fourth coordinate $w$ (initially 0 everywhere). A quarter-turn of the right face ($x = 1$) is then the exact coordinate map:"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** give every little cube a fourth coordinate, $w$, starting at 0 everywhere. Then a quarter-turn of the right face is a specific rule: if a piece is on the right face, swap its $x$ and $w$ coordinates and flip the sign of the new $x$; otherwise, change nothing. Here is the rule in symbols:",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** give every little cube a fourth coordinate, $w$, starting at 0 everywhere. Then a quarter-turn of the right face is a specific rule: if a piece is on the right face, swap its $x$ and $w$ coordinates and flip the sign of the new $x$; otherwise, change nothing. Here is the rule in symbols:"
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "$T_R(x,y,z,w) = (-w,\\,y,\\,z,\\,x) \\quad \\text{for } x = 1; \\quad T_R(x,y,z,w) = (x,y,z,w) \\quad \\text{otherwise}$",
      "level": null,
      "number": null,
      "name": "$T_R(x,y,z,w) = (-w,\\,y,\\,z,\\,x) \\quad \\text{for } x = 1; \\quad T_R(x,y,z,w) = (x,y,z,w) \\quad \\text{otherwise}$"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "$T_R(x,y,z,w) = (-w,\\,y,\\,z,\\,x) \\quad \\text{for } x = 1; \\quad T_R(x,y,z,w) = (x,y,z,w) \\quad \\text{otherwise}$",
      "level": null,
      "number": null,
      "name": "$T_R(x,y,z,w) = (-w,\\,y,\\,z,\\,x) \\quad \\text{for } x = 1; \\quad T_R(x,y,z,w) = (x,y,z,w) \\quad \\text{otherwise}$"
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "Only the nine cubies on the right face participate; everything else is the identity. The map swaps the visible coordinate $x$ with the hidden coordinate $w$ and flips the sign of the new $x$. A cubie that was \"in\" the 4th dimension by one unit is now the outward-most in $x$; the rotation has exchanged a hidden direction with a visible one.",
      "level": null,
      "number": null,
      "name": "Only the nine cubies on the right face participate; everything else is the identity. The map swaps the visible coordinate $x$ with the hidden coordinate $w$ and flips the sign of the new $x$. A cubie that was \"in\" the 4th dimension by one unit is now the outward-most in $x$; the rotation has exchanged a hidden direction with a visible one."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**Which said:** \"right face\" means pieces whose $x$ equals 1. Those nine pieces get their $x$ and $w$ swapped (with a minus sign on the new $x$); every other piece keeps its coordinates untouched. That's all a face-turn is, in this model: a tiny, precise swap between a direction you can see and a direction you can't. The technical text paused to stress that only those nine pieces take part — everything else is literally the identity, the \"do nothing\" operation. Turning one face moves exactly one slice of the puzzle, so only one slice of the coordinates changes. If all nine slices turned at once the whole cube would be rotating — but then you'd just see the cube spinning, which is less interesting.",
      "level": null,
      "number": null,
      "name": "**Which said:** \"right face\" means pieces whose $x$ equals 1. Those nine pieces get their $x$ and $w$ swapped (with a minus sign on the new $x$); every other piece keeps its coordinates untouched. That's all a face-turn is, in this model: a tiny, precise swap between a direction you can see and a direction you can't. The technical text paused to stress that only those nine pieces take part — everything else is literally the identity, the \"do nothing\" operation. Turning one face moves exactly one slice of the puzzle, so only one slice of the coordinates changes. If all nine slices turned at once the whole cube would be rotating — but then you'd just see the cube spinning, which is less interesting."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "This is not an arbitrary rewriting rule. The general rotation of four-dimensional space in the $x$–$w$ plane, through an arbitrary angle $\\theta$, is:",
      "level": null,
      "number": null,
      "name": "This is not an arbitrary rewriting rule. The general rotation of four-dimensional space in the $x$–$w$ plane, through an arbitrary angle $\\theta$, is:"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And then:** it made sure you didn't think the swap rule was invented to fit the puzzle. It isn't: it's the *generic* 4D rotation formula. In four dimensions, any rotation spins a plane while holding the perpendicular plane still — and the general version, for any angle $\\theta$ (a dial, not just a click), is this:",
      "level": null,
      "number": null,
      "name": "**And then:** it made sure you didn't think the swap rule was invented to fit the puzzle. It isn't: it's the *generic* 4D rotation formula. In four dimensions, any rotation spins a plane while holding the perpendicular plane still — and the general version, for any angle $\\theta$ (a dial, not just a click), is this:"
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "$(x', y', z', w') = (x\\cos\\theta - w\\sin\\theta,\\ y,\\ z,\\ x\\sin\\theta + w\\cos\\theta)$",
      "level": null,
      "number": null,
      "name": "$(x', y', z', w') = (x\\cos\\theta - w\\sin\\theta,\\ y,\\ z,\\ x\\sin\\theta + w\\cos\\theta)$"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "$(x', y', z', w') = (x\\cos\\theta - w\\sin\\theta,\\ y,\\ z,\\ x\\sin\\theta + w\\cos\\theta)$",
      "level": null,
      "number": null,
      "name": "$(x', y', z', w') = (x\\cos\\theta - w\\sin\\theta,\\ y,\\ z,\\ x\\sin\\theta + w\\cos\\theta)$"
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "In matrix form, with $\\mathbf{v} = (x,y,z,w)^\\top$:",
      "level": null,
      "number": null,
      "name": "In matrix form, with $\\mathbf{v} = (x,y,z,w)^\\top$:"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**Which meant:** the new $x$ and the new $w$ are blends of the old $x$ and old $w$, mixed with sines and cosines — exactly like how 2D rotation mixes $x$ and $y$. The $y$ and $z$ rows say \"untouched.\" If you set the dial to 90°, the mixing simplifies to the swap rule: cos 90° = 0, sin 90° = 1, and the formula collapses to the quarter-turn from the start of this section. Then the technical text wrote the same thing in tidy machine form — lists of numbers, called matrices: a 4×4 matrix you multiply against a piece's four coordinates:",
      "level": null,
      "number": null,
      "name": "**Which meant:** the new $x$ and the new $w$ are blends of the old $x$ and old $w$, mixed with sines and cosines — exactly like how 2D rotation mixes $x$ and $y$. The $y$ and $z$ rows say \"untouched.\" If you set the dial to 90°, the mixing simplifies to the swap rule: cos 90° = 0, sin 90° = 1, and the formula collapses to the quarter-turn from the start of this section. Then the technical text wrote the same thing in tidy machine form — lists of numbers, called matrices: a 4×4 matrix you multiply against a piece's four coordinates:"
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "$R_{xw}(\\theta) =\n\\begin{pmatrix}\n\\cos\\theta & 0 & 0 & -\\sin\\theta \\\\\n0 & 1 & 0 & 0 \\\\\n0 & 0 & 1 & 0 \\\\\n\\sin\\theta & 0 & 0 & \\cos\\theta\n\\end{pmatrix}, \\qquad \\mathbf{v}' = R_{xw}(\\theta)\\,\\mathbf{v}$",
      "level": null,
      "number": null,
      "name": "$R_{xw}(\\theta) =\n\\begin{pmatrix}\n\\cos\\theta & 0 & 0 & -\\sin\\theta \\\\\n0 & 1 & 0 & 0 \\\\\n0 & 0 & 1 & 0 \\\\\n\\sin\\theta & 0 & 0 & \\cos\\theta\n\\end{pmatrix}, \\qquad \\mathbf{v}' = R_{xw}(\\theta)\\,\\mathbf{v}$"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "$R_{xw}(\\theta) =\n\\begin{pmatrix}\n\\cos\\theta & 0 & 0 & -\\sin\\theta \\\\\n0 & 1 & 0 & 0 \\\\\n0 & 0 & 1 & 0 \\\\\n\\sin\\theta & 0 & 0 & \\cos\\theta\n\\end{pmatrix}, \\qquad \\mathbf{v}' = R_{xw}(\\theta)\\,\\mathbf{v}$",
      "level": null,
      "number": null,
      "name": "$R_{xw}(\\theta) =\n\\begin{pmatrix}\n\\cos\\theta & 0 & 0 & -\\sin\\theta \\\\\n0 & 1 & 0 & 0 \\\\\n0 & 0 & 1 & 0 \\\\\n\\sin\\theta & 0 & 0 & \\cos\\theta\n\\end{pmatrix}, \\qquad \\mathbf{v}' = R_{xw}(\\theta)\\,\\mathbf{v}$"
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "A rotation in four dimensions fixes a plane (here the whole $y$–$z$ plane) and rotates the perpendicular plane (here $x$–$w$) — the direct analog of a 3D rotation, which fixes a line and rotates the plane perpendicular to it. Setting $\\theta = \\pi/2$: $\\cos\\theta = 0$, $\\sin\\theta = 1$, and the general map reduces exactly to $(-w, y, z, x)$: the quarter-turn of §5's model. The cube's face-turn is thus precisely a 90° rotation in the $x$–$w$ plane, restricted to the cubies where $x = 1$.",
      "level": null,
      "number": null,
      "name": "A rotation in four dimensions fixes a plane (here the whole $y$–$z$ plane) and rotates the perpendicular plane (here $x$–$w$) — the direct analog of a 3D rotation, which fixes a line and rotates the plane perpendicular to it. Setting $\\theta = \\pi/2$: $\\cos\\theta = 0$, $\\sin\\theta = 1$, and the general map reduces exactly to $(-w, y, z, x)$: the quarter-turn of §5's model. The cube's face-turn is thus precisely a 90° rotation in the $x$–$w$ plane, restricted to the cubies where $x = 1$."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**Which meant:** a matrix is just a compact recipe; the cookbook version of the same sentence. The diagonal 1s are the $y$ and $z$ directions holding still; the corner entries are the mixing of $x$ and $w$. Multiplying this matrix by a piece's coordinates performs the turn in one step — you never need to do this by hand, you need to know it exists and what it does. And the mental picture the technical text gave: a 3D rotation holds a line still and spins the plane at right angles to it (think of a door hinge — the hinge is the fixed line). A 4D rotation holds an entire *plane* still and spins the plane at right angles to it. Here, the whole $y$–$z$ plane stays put and the $x$–$w$ plane rotates. Setting $\\theta = \\pi/2$ turns the general machine into the exact quarter-turn rule — the proof that the cube's click is the 4D rotation's click, in notation.",
      "level": null,
      "number": null,
      "name": "**Which meant:** a matrix is just a compact recipe; the cookbook version of the same sentence. The diagonal 1s are the $y$ and $z$ directions holding still; the corner entries are the mixing of $x$ and $w$. Multiplying this matrix by a piece's coordinates performs the turn in one step — you never need to do this by hand, you need to know it exists and what it does. And the mental picture the technical text gave: a 3D rotation holds a line still and spins the plane at right angles to it (think of a door hinge — the hinge is the fixed line). A 4D rotation holds an entire *plane* still and spins the plane at right angles to it. Here, the whole $y$–$z$ plane stays put and the $x$–$w$ plane rotates. Setting $\\theta = \\pi/2$ turns the general machine into the exact quarter-turn rule — the proof that the cube's click is the 4D rotation's click, in notation."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "Two consequences follow. First, the cube group becomes a visible algebra: sequences of face-turns compose as rotations in the coordinate planes of a 4D space, and the 43 quintillion states of §2 are exactly the reachable products of these four-coordinate rotations — an embedding of the cube group into the geometry of $\\mathbb{R}^4$. Second, the honest limit of the model: the $w$-coordinate is bookkeeping. No cubie is ever observed at $w \\neq 0$; the 4th coordinate is the *mathematical space in which the turn is written*, not a place the puzzle physically visits. That the same writing works for rotations of actual hypercubes — with the same matrices — is the exact sense in which the cube is a model of the fourth dimension rather than a fourth-dimensional object.",
      "level": null,
      "number": null,
      "name": "Two consequences follow. First, the cube group becomes a visible algebra: sequences of face-turns compose as rotations in the coordinate planes of a 4D space, and the 43 quintillion states of §2 are exactly the reachable products of these four-coordinate rotations — an embedding of the cube group into the geometry of $\\mathbb{R}^4$. Second, the honest limit of the model: the $w$-coordinate is bookkeeping. No cubie is ever observed at $w \\neq 0$; the 4th coordinate is the *mathematical space in which the turn is written*, not a place the puzzle physically visits. That the same writing works for rotations of actual hypercubes — with the same matrices — is the exact sense in which the cube is a model of the fourth dimension rather than a fourth-dimensional object."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And finally, the two takeaways, in plain words:** First, the cube's 43 quintillion states are all products of these four-coordinate rotations — the puzzle's maths fits inside 4D geometry. Second, the honest limit: $w$ is a bookkeeping coordinate; no piece of plastic is ever observed at $w \\neq 0$. The fourth dimension here is the *room in which the turn is written down*, not a place the cube visits. Because the exact same matrices rotate real hypercubes, the cube is a model of the fourth dimension — not a fourth-dimensional object. A flight simulator, again, not a spaceship.",
      "level": null,
      "number": null,
      "name": "**And finally, the two takeaways, in plain words:** First, the cube's 43 quintillion states are all products of these four-coordinate rotations — the puzzle's maths fits inside 4D geometry. Second, the honest limit: $w$ is a bookkeeping coordinate; no piece of plastic is ever observed at $w \\neq 0$. The fourth dimension here is the *room in which the turn is written down*, not a place the cube visits. Because the exact same matrices rotate real hypercubes, the cube is a model of the fourth dimension — not a fourth-dimensional object. A flight simulator, again, not a spaceship."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "7",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "7. Time as a Dimensional Analog",
     "level": 2,
     "number": "7",
     "name": "Time as a Dimensional Analog"
    },
    "everyone": {
     "kind": "heading",
     "text": "7. Time as a Dimensional Analog",
     "level": 2,
     "number": "7",
     "name": "Time as a Dimensional Analog"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "Physics has long used a fourth dimension of a different kind: time. In relativity, events are points of a four-dimensional manifold, and a moving object is a curve (its worldline) through it, with the cube of spacetime $(x, y, z, t)$ replacing the spatial triple. The cube engages the same structure: a sequence of face-turns is a trajectory of the puzzle through configuration space *in time*; the position of every cubie changes while the puzzle remains itself — evolving identity, exactly the structure of a worldline of an object that persists through change.",
      "level": null,
      "number": null,
      "name": "Physics has long used a fourth dimension of a different kind: time. In relativity, events are points of a four-dimensional manifold, and a moving object is a curve (its worldline) through it, with the cube of spacetime $(x, y, z, t)$ replacing the spatial triple. The cube engages the same structure: a sequence of face-turns is a trajectory of the puzzle through configuration space *in time*; the position of every cubie changes while the puzzle remains itself — evolving identity, exactly the structure of a worldline of an object that persists through change."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** physics also uses a fourth dimension — time. In relativity, reality is a four-dimensional stage and a moving object is a *curve* through it (its worldline); positions become four-coordinate events $(x, y, z, t)$. The cube plays the same tune: a scramble is a *trajectory* of the puzzle through all its possible states, over time — pieces keep changing, the puzzle stays itself.",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** physics also uses a fourth dimension — time. In relativity, reality is a four-dimensional stage and a moving object is a *curve* through it (its worldline); positions become four-coordinate events $(x, y, z, t)$. The cube plays the same tune: a scramble is a *trajectory* of the puzzle through all its possible states, over time — pieces keep changing, the puzzle stays itself."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The analogy supports three readings. First, a rotation over time: watching a single face turn from start to finish exhibits an object changing configuration monotonically while remaining the same object — the temporal image of the spatial rotation of §6, executed one frame at a time. Second, the trajectory is reversible: any sequence of turns can be undone by a sequence of turns, just as physical laws of mechanics are time-reversible at the microscopic level. Third, the cube makes the distinction between the two fourth dimensions concrete: the spatial fourth coordinate $w$ is *spacelike* (its rotations are the algebra of §6), while the temporal coordinate $t$ is *timelike* (it orders events on a worldline). The model can put either meaning on its fourth axis, but it cannot put both at once — a useful discipline for any reader who meets \"the fourth dimension\" in the wild.",
      "level": null,
      "number": null,
      "name": "The analogy supports three readings. First, a rotation over time: watching a single face turn from start to finish exhibits an object changing configuration monotonically while remaining the same object — the temporal image of the spatial rotation of §6, executed one frame at a time. Second, the trajectory is reversible: any sequence of turns can be undone by a sequence of turns, just as physical laws of mechanics are time-reversible at the microscopic level. Third, the cube makes the distinction between the two fourth dimensions concrete: the spatial fourth coordinate $w$ is *spacelike* (its rotations are the algebra of §6), while the temporal coordinate $t$ is *timelike* (it orders events on a worldline). The model can put either meaning on its fourth axis, but it cannot put both at once — a useful discipline for any reader who meets \"the fourth dimension\" in the wild."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**Why that matters:** watch any single face turn and you're seeing one object change configuration smoothly while remaining the same object — the temporal image of the 4D rotation from the last section, shown frame by frame. And turn sequences are reversible: whatever you scrambled can be unscrambled, which mirrors how the fundamental laws of mechanics run the same forward and backward in time. The cube is time-symmetric, in miniature.",
      "level": null,
      "number": null,
      "name": "**Why that matters:** watch any single face turn and you're seeing one object change configuration smoothly while remaining the same object — the temporal image of the 4D rotation from the last section, shown frame by frame. And turn sequences are reversible: whatever you scrambled can be unscrambled, which mirrors how the fundamental laws of mechanics run the same forward and backward in time. The cube is time-symmetric, in miniature."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The disciplined reading is this: the cube grants intuition for a *coordinate* dimension — a direction in which motion is algebraically legible but perceptually hidden. Whether that coordinate is timelike (physics of spacetime) or spacelike (geometry of hyperspace) is a choice made by the modeler, and the cube refuses to blur the distinction. That refusal is part of the model's honesty, and it is the strongest single reason to trust the cube as an educational instrument rather than a gimmick.",
      "level": null,
      "number": null,
      "name": "The disciplined reading is this: the cube grants intuition for a *coordinate* dimension — a direction in which motion is algebraically legible but perceptually hidden. Whether that coordinate is timelike (physics of spacetime) or spacelike (geometry of hyperspace) is a choice made by the modeler, and the cube refuses to blur the distinction. That refusal is part of the model's honesty, and it is the strongest single reason to trust the cube as an educational instrument rather than a gimmick."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And then came the distinction that keeps the paper honest:** \"the fourth dimension\" means two different things, and the cube refuses to blur them. The hidden $w$ of the math section is *spacelike* — a direction you could rotate through, like the extra dimension of hyperspace. Time is *timelike* — it orders events into before and after, and you can't turn through it like a plane. The cube can put either meaning on its fourth axis, but not both at once. That refusal to blur is the strongest reason to trust it as a teaching tool rather than a parlour trick.",
      "level": null,
      "number": null,
      "name": "**And then came the distinction that keeps the paper honest:** \"the fourth dimension\" means two different things, and the cube refuses to blur them. The hidden $w$ of the math section is *spacelike* — a direction you could rotate through, like the extra dimension of hyperspace. Time is *timelike* — it orders events into before and after, and you can't turn through it like a plane. The cube can put either meaning on its fourth axis, but not both at once. That refusal to blur is the strongest reason to trust it as a teaching tool rather than a parlour trick."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "8",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "8. The Model in Action",
     "level": 2,
     "number": "8",
     "name": "The Model in Action"
    },
    "everyone": {
     "kind": "heading",
     "text": "8. The Model in Action",
     "level": 2,
     "number": "8",
     "name": "The Model in Action"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "The model is complete when it is performed. Three demonstrations, escalating in cost:",
      "level": null,
      "number": null,
      "name": "The model is complete when it is performed. Three demonstrations, escalating in cost:"
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** a model is complete when someone performs it, and proposed three demonstrations you can do with a real cube. Here's what each one is, and why it works:",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** a model is complete when someone performs it, and proposed three demonstrations you can do with a real cube. Here's what each one is, and why it works:"
     }
    },
    {
     "original": {
      "kind": "list",
      "text": "- **Plan-view projection (5 minutes, one cube).** Hold the cube directly above, top face facing you; note the single square. Rotate the middle horizontal slice 45°; note the four triangle wings appearing beyond the square. Rotate back. Repeat slowly, watching the silhouette breathe. This is the tesseract's projection behavior, in your hands.\n- **The hidden-coordinate turn (10 minutes, one cube).** Before scrambling, mark one corner cubie with a pencil dot on its hidden face (the face touching a neighbor) or use a sticker. Perform ten arbitrary turns; the dot will appear on visible faces, having \"come through\" the turn — the $w$-coordinate surfacing into $x$, exactly as $T_R$ prescribes.\n- **God's-number sprint (if you can).** Any scramble solved in ≤ 20 turns exhibits the diameter of the cube group; the bound itself is a theorem of the same group whose geometry §6 embeds in $\\mathbb{R}^4$.",
      "level": null,
      "number": null,
      "name": "- **Plan-view projection (5 minutes, one cube).** Hold the cube directly above, top face facing you; note the single square. Rotate the middle horizontal slice 45°; note the four triangle wings appearing beyond the square. Rotate back. Repeat slowly, watching the silhouette breathe. This is the tesseract's projection behavior, in your hands.\n- **The hidden-coordinate turn (10 minutes, one cube).** Before scrambling, mark one corner cubie with a pencil dot on its hidden face (the face touching a neighbor) or use a sticker. Perform ten arbitrary turns; the dot will appear on visible faces, having \"come through\" the turn — the $w$-coordinate surfacing into $x$, exactly as $T_R$ prescribes.\n- **God's-number sprint (if you can).** Any scramble solved in ≤ 20 turns exhibits the diameter of the cube group; the bound itself is a theorem of the same group whose geometry §6 embeds in $\\mathbb{R}^4$."
     },
     "everyone": {
      "kind": "list",
      "text": "- **The plan-view projection:** look straight down at the cube — one square. Turn the middle slice 45° — four triangles appear outside the square. Turn it back. Do it slowly and watch the silhouette breathe. What you're watching is the projection of 4D rotation on a flat camera: the object doesn't change, its outline does. That's the whole thesis in ten seconds.\n- **The hidden-coordinate turn:** before scrambling, mark one corner piece on the *inside* — a face you can't currently see. Do ten turns. The mark will eventually show on a visible face. That's the $w$-coordinate surfacing into $x$: the swap rule from §6, performed by your thumb. Pieces move \"through\" the hidden direction all the time; you just can't see them doing it.\n- **The God's-number sprint:** the claim that any cube can be solved in 20 moves is a proven theorem about the cube group — the same group whose 4D geometry §6 described. If you can solve a scramble in 20 turns, you're executing the diameter of a known mathematical object; if not, it's a fine party trick anyway.",
      "level": null,
      "number": null,
      "name": "- **The plan-view projection:** look straight down at the cube — one square. Turn the middle slice 45° — four triangles appear outside the square. Turn it back. Do it slowly and watch the silhouette breathe. What you're watching is the projection of 4D rotation on a flat camera: the object doesn't change, its outline does. That's the whole thesis in ten seconds.\n- **The hidden-coordinate turn:** before scrambling, mark one corner piece on the *inside* — a face you can't currently see. Do ten turns. The mark will eventually show on a visible face. That's the $w$-coordinate surfacing into $x$: the swap rule from §6, performed by your thumb. Pieces move \"through\" the hidden direction all the time; you just can't see them doing it.\n- **The God's-number sprint:** the claim that any cube can be solved in 20 moves is a proven theorem about the cube group — the same group whose 4D geometry §6 described. If you can solve a scramble in 20 turns, you're executing the diameter of a known mathematical object; if not, it's a fine party trick anyway."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "An interactive simulation is the planned fourth demonstration: a rendered 3D cube whose turns are animated in the $x$–$w$ plane before snapping back to $w = 0$ — the exact behavior a hypercube would show if it could rotate a slice \"through\" the fourth dimension and return. The simulation is specified but not yet built; §6's matrices are its complete specification.",
      "level": null,
      "number": null,
      "name": "An interactive simulation is the planned fourth demonstration: a rendered 3D cube whose turns are animated in the $x$–$w$ plane before snapping back to $w = 0$ — the exact behavior a hypercube would show if it could rotate a slice \"through\" the fourth dimension and return. The simulation is specified but not yet built; §6's matrices are its complete specification."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And the planned finale:** the paper specifies (but doesn't yet build) an interactive simulation: a rendered cube whose turns animate in the $x$–$w$ plane, visibly sliding \"through\" the fourth dimension, then snapping back to $w = 0$. The §6 matrices are the complete specification — anyone with a weekend and a 3D engine can build it. If you've been wondering what the fourth dimension would *look* like, that animation is the answer, computed honestly.",
      "level": null,
      "number": null,
      "name": "**And the planned finale:** the paper specifies (but doesn't yet build) an interactive simulation: a rendered cube whose turns animate in the $x$–$w$ plane, visibly sliding \"through\" the fourth dimension, then snapping back to $w = 0$. The §6 matrices are the complete specification — anyone with a weekend and a 3D engine can build it. If you've been wondering what the fourth dimension would *look* like, that animation is the answer, computed honestly."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": "9",
   "heading": {
    "original": {
     "kind": "heading",
     "text": "9. A Serious Conclusion",
     "level": 2,
     "number": "9",
     "name": "A Serious Conclusion"
    },
    "everyone": {
     "kind": "heading",
     "text": "9. A Serious Conclusion",
     "level": 2,
     "number": "9",
     "name": "A Serious Conclusion"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "paragraph",
      "text": "In this exploration of the Rubik's Cube as a model for the fourth dimension we have traversed a compact intersection of geometry, algebra, and perception. The cube, often perceived as a mere puzzle, offers direct insight into higher-dimensional space: its face-turns are exactly 90° rotations in the $x$–$w$ plane of a four-coordinate model, its plan view performs the projection behavior of a rotating tesseract, and its states form the reachable product of four-dimensional rotations. The mathematics of §6 makes each of these claims exact rather than evocative.",
      "level": null,
      "number": null,
      "name": "In this exploration of the Rubik's Cube as a model for the fourth dimension we have traversed a compact intersection of geometry, algebra, and perception. The cube, often perceived as a mere puzzle, offers direct insight into higher-dimensional space: its face-turns are exactly 90° rotations in the $x$–$w$ plane of a four-coordinate model, its plan view performs the projection behavior of a rotating tesseract, and its states form the reachable product of four-dimensional rotations. The mathematics of §6 makes each of these claims exact rather than evocative."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**The technical text just said:** we walked through geometry, algebra, and perception as a threesome — and the cube held its own: quarter-turns are exactly 90° rotations in the hidden $x$–$w$ plane, the plan view reproduces tesseract projection, and the puzzle's states are products of 4D rotations. The math of §6 exists so that \"the cube models the fourth dimension\" is an exact claim, not a vibe.",
      "level": null,
      "number": null,
      "name": "**The technical text just said:** we walked through geometry, algebra, and perception as a threesome — and the cube held its own: quarter-turns are exactly 90° rotations in the hidden $x$–$w$ plane, the plan view reproduces tesseract projection, and the puzzle's states are products of 4D rotations. The math of §6 exists so that \"the cube models the fourth dimension\" is an exact claim, not a vibe."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The model has limits, and they are part of its value. The cube does not physically move in four dimensions; the $w$-coordinate is a representational device; and time, the physicist's fourth dimension, is timelike rather than spacelike — a distinction the model refuses to blur. What the model genuinely offers is a transferable intuition: projections change while objects do not; rotation in a higher space re-enters a lower space as new visible structure; and a coordinate direction can be algebraically real while perceptually hidden.",
      "level": null,
      "number": null,
      "name": "The model has limits, and they are part of its value. The cube does not physically move in four dimensions; the $w$-coordinate is a representational device; and time, the physicist's fourth dimension, is timelike rather than spacelike — a distinction the model refuses to blur. What the model genuinely offers is a transferable intuition: projections change while objects do not; rotation in a higher space re-enters a lower space as new visible structure; and a coordinate direction can be algebraically real while perceptually hidden."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And then it did the honest bit:** the limits are part of the value. The cube never physically goes anywhere four-dimensional; $w$ is a representational device; and the physicist's fourth dimension — time — is a different kind of coordinate, which the model deliberately refuses to blur. What you genuinely keep from the cube is a transferable intuition: projections change when objects don't; rotation in higher space arrives in lower space as *new visible structure*; a coordinate can be algebraically real and perceptually invisible at the same time.",
      "level": null,
      "number": null,
      "name": "**And then it did the honest bit:** the limits are part of the value. The cube never physically goes anywhere four-dimensional; $w$ is a representational device; and the physicist's fourth dimension — time — is a different kind of coordinate, which the model deliberately refuses to blur. What you genuinely keep from the cube is a transferable intuition: projections change when objects don't; rotation in higher space arrives in lower space as *new visible structure*; a coordinate can be algebraically real and perceptually invisible at the same time."
     }
    },
    {
     "original": {
      "kind": "paragraph",
      "text": "The plan-view triangle, the hidden coordinate surfacing after ten turns, and a 20-move solution performed from memory are each small acts of the fourth dimension. The cube is a conduit: it does not contain hyperspace, but it *performs* hyperspatial mathematics with hardware that fits in the hand — and in doing so it demonstrates, better than any diagram, that the fourth dimension is not a wall at the edge of three. It is a room the cube has been walking through all along.",
      "level": null,
      "number": null,
      "name": "The plan-view triangle, the hidden coordinate surfacing after ten turns, and a 20-move solution performed from memory are each small acts of the fourth dimension. The cube is a conduit: it does not contain hyperspace, but it *performs* hyperspatial mathematics with hardware that fits in the hand — and in doing so it demonstrates, better than any diagram, that the fourth dimension is not a wall at the edge of three. It is a room the cube has been walking through all along."
     },
     "everyone": {
      "kind": "paragraph",
      "text": "**And here's the closing image — the one to keep:** the triangle that appears beside the square, the hidden mark that surfaces after ten turns, the 20-move solve from memory: each is a small, physical act of the fourth dimension. The cube doesn't contain hyperspace. It performs hyperspatial mathematics with hardware that fits in your hand — which is a better demonstration than any diagram that the fourth dimension is not a wall at the edge of the third. It's a room the cube has been walking through all along. Next time you pick up a cube, you'll be in it too.",
      "level": null,
      "number": null,
      "name": "**And here's the closing image — the one to keep:** the triangle that appears beside the square, the hidden mark that surfaces after ten turns, the 20-move solve from memory: each is a small, physical act of the fourth dimension. The cube doesn't contain hyperspace. It performs hyperspatial mathematics with hardware that fits in your hand — which is a better demonstration than any diagram that the fourth dimension is not a wall at the edge of the third. It's a room the cube has been walking through all along. Next time you pick up a cube, you'll be in it too."
     }
    }
   ],
   "subsections": []
  },
  {
   "number": null,
   "heading": {
    "original": {
     "kind": "heading",
     "text": "References",
     "level": 2,
     "number": null,
     "name": "References"
    },
    "everyone": {
     "kind": "heading",
     "text": "References",
     "level": 2,
     "number": null,
     "name": "References"
    }
   },
   "blocks": [
    {
     "original": {
      "kind": "list",
      "text": "1. Coxeter, H. S. M. (1973). *Regular Polytopes* (3rd ed.). Dover. — canonical treatment of the hypercube and its symmetry.\n2. Rucker, R. (1984). *The Fourth Dimension: A Guided Tour of the Higher Universes*. Houghton Mifflin. — accessible geometry of higher dimensions.\n3. Singmaster, D. (1981). *Notes on Rubik's Magic Cube*. Enslow. — the cube group, notation, and early theory.\n4. Rokicki, T., Kociemba, H., Davidson, M., & Dethridge, J. (2014). The diameter of the Rubik's cube group is twenty. *SIAM Journal on Discrete Mathematics*, 28(2), 1082–1105.\n5. Einstein, A. (1923). On the electrodynamics of moving bodies. In *The Principle of Relativity*. Methuen. (Original work published 1905.) — time as the fourth, timelike dimension.",
      "level": null,
      "number": null,
      "name": "1. Coxeter, H. S. M. (1973). *Regular Polytopes* (3rd ed.). Dover. — canonical treatment of the hypercube and its symmetry.\n2. Rucker, R. (1984). *The Fourth Dimension: A Guided Tour of the Higher Universes*. Houghton Mifflin. — accessible geometry of higher dimensions.\n3. Singmaster, D. (1981). *Notes on Rubik's Magic Cube*. Enslow. — the cube group, notation, and early theory.\n4. Rokicki, T., Kociemba, H., Davidson, M., & Dethridge, J. (2014). The diameter of the Rubik's cube group is twenty. *SIAM Journal on Discrete Mathematics*, 28(2), 1082–1105.\n5. Einstein, A. (1923). On the electrodynamics of moving bodies. In *The Principle of Relativity*. Methuen. (Original work published 1905.) — time as the fourth, timelike dimension."
     },
     "everyone": {
      "kind": "quote",
      "text": "The same references as the full technical version.",
      "level": null,
      "number": null,
      "name": "The same references as the full technical version."
     }
    }
   ],
   "subsections": []
  }
 ],
 "meta": {
  "built": "2026-09-16",
  "sources": {
   "original": "Rubik's Cube as a 4-Dimensional Model - Draft v.1 (Technical).md",
   "everyone": "Rubik's Cube as a 4-Dimensional Model - Draft v.2 (For Everyone).md"
  },
  "aligner": "M0 build_bundle.py (Needleman-Wunsch, header-anchored)"
 }
};
