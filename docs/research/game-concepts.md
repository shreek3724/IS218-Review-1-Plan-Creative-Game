# Comparing Two Overarching Game Concepts

## Concept A: Logic Based Games

### Game Mechanics

**Logic & Problem-Solving Games (Deductive Format):**
- **Core Mechanism:** Built on strict conditional rules ("if premise X is true, option Y is invalid"), constraint satisfaction, and process of elimination.
- **Cognitive Focus:** Methodical deduction where players analyze given rules and grid constraints to calculate guaranteed, non-ambiguous moves.
- **Data & Logic Structure:** Driven by discrete 2D matrix state arrays (`grid[row][col] = { state, rules }`) or boolean validation functions running in $O(1)$ constant or $O(N)$ linear time per click.
- **Example Formats:** Sudoku, clue grid matrices (such as historical solvent restoration puzzles), logic grid puzzles, and graph node traversal games.

---

## Concept B: Pattern Matching Games

### Game Mechanics

**Pattern Matching Games (Visual/Spatial Format):**
- **Core Mechanism:** Built on identifying visual or spatial similarities—such as matching colors, shapes, symmetry, or sequence alignments.
- **Cognitive Focus:** Rapid visual recognition, spatial rotation, and sequence tracking rather than step-by-step deduction.
- **Data & Logic Structure:** Driven by array comparison loops, downsampled canvas image pixel matrices, or Euclidean distance calculations between color vectors or adjacent grid items.
- **Example Formats:** Match-3 games (tile-swapping), spatial shape fitting, and canvas pixel-matching accuracy challenges.

---

## How to Structure & Format These Games

- **Standard Game Loop Architecture:** Implement a lightweight 4-phase loop: Input (click/keypress events) $\rightarrow$ State Update (modify grid/array values) $\rightarrow$ Rule Validation (evaluate logic constraints or matching rules) $\rightarrow$ Render (redraw updated state on the Canvas/DOM).
- **Formatting a Logic Game:** Display a clear constraint layout (a grid matrix or clue list panel). Store logic rules inside standard JavaScript objects and run conditional checks on every player action to validate whether a move satisfies all puzzle constraints.
- **Formatting a Pattern Matching Game:** Store board layouts in multi-dimensional arrays, run nested loops to scan neighboring indices (checking for matching values horizontally, vertically, or diagonally), and trigger score updates or cleared states upon matching.
