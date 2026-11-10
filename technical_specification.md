# Creative Game Technical Specification: Pigment Cipher & Research Notebook

## 01. Compare Two Overall Game Concepts

### Concept A: Logic Based Games
#### Game Mechanics
**Logic & Problem-Solving Games (Deductive Format):**
- **Core Mechanism:** Built on strict conditional rules ("if premise X is true, option Y is invalid"), constraint satisfaction, and process of elimination.
- **Cognitive Focus:** Methodical deduction where players analyze given rules and grid constraints to calculate guaranteed, non-ambiguous moves.
- **Data & Logic Structure:** Driven by discrete 2D matrix state arrays (`grid[row][col] = { state, rules }`) or boolean validation functions running in $O(1)$ constant or $O(N)$ linear time per click.
- **Example Formats:** Sudoku, clue grid matrices (such as historical solvent restoration puzzles), logic grid puzzles, and graph node traversal games.

---

### Concept B: Pattern Matching Games
#### Game Mechanics
**Pattern Matching Games (Visual/Spatial Format):**
- **Core Mechanism:** Built on identifying visual or spatial similarities—such as matching colors, shapes, symmetry, or sequence alignments.
- **Cognitive Focus:** Rapid visual recognition, spatial rotation, and sequence tracking rather than step-by-step deduction.
- **Data & Logic Structure:** Driven by array comparison loops, downsampled canvas image pixel matrices, or Euclidean distance calculations between color vectors or adjacent grid items.
- **Example Formats:** Match-3 games (tile-swapping), spatial shape fitting, and canvas pixel-matching accuracy challenges.

---

### How to Structure & Format These Games
- **Standard Game Loop Architecture:** Implement a lightweight 4-phase loop: Input (click/keypress events) $\rightarrow$ State Update (modify grid/array values) $\rightarrow$ Rule Validation (evaluate logic constraints or matching rules) $\rightarrow$ Render (redraw updated state on the Canvas/DOM).
- **Formatting a Logic Game:** Display a clear constraint layout (a grid matrix or clue list panel). Store logic rules inside standard JavaScript objects and run conditional checks on every player action to validate whether a move satisfies all puzzle constraints.
- **Formatting a Pattern Matching Game:** Store board layouts in multi-dimensional arrays, run nested loops to scan neighboring indices (checking for matching values horizontally, vertically, or diagonally), and trigger score updates or cleared states upon matching.

---

### Software Stack for MacBook Air M2 (macOS 14.4 Sonoma)
- **Hardware Capability:** The M2 Apple Silicon processor natively executes browser JavaScript and HTML5 Canvas rendering at 60 FPS with near-zero CPU load and minimal battery usage.
- **Primary Code Editor:** Visual Studio Code—serves as your central development workspace for managing multi-file project directories, editing HTML/CSS/JS, running terminal commands, and using code-completion tools.
- **Game Engine:** HTML5 Canvas 2D API (`CanvasRenderingContext2D`)—built directly into all web browsers; handles multi-layer rendering, coordinate click-detection, and local image exports without downloading third-party game engines (like Unity, Unreal, or Godot).
- **Programming Languages:** Vanilla HTML5, CSS3, and ES6 JavaScript.
- **Data Storage:** Native browser `localStorage` or embedded single-file SQLite databases (`better-sqlite3`) managed via Node.js to save local user progress, game stats, and high scores.

---

### Development Setup (VS Code & Native macOS Tools)
- **Primary Development Workspace (VS Code):** Manage project directories, organize `index.html`, `style.css`, and `game.js`, and write game logic with built-in syntax highlighting using your existing Visual Studio Code installation.
- **Built-in Local Web Server (macOS Python + VS Code Terminal):** Run macOS's pre-installed Python server without extra software downloads by opening VS Code's integrated terminal `(Ctrl + ~)`, navigating to your project folder (`cd path/to/project`), and executing `python3 -m http.server 8000`. Preview your game live at `http://localhost:8000` in Safari or Chrome.
- **Instant Hot-Reloading (Optional Extension):** Install the free Live Server extension directly from VS Code's internal Marketplace `(Cmd + Shift + X)` to automatically launch a local browser preview that reloads instantly upon saving files.
- **Integrated Visual & Browser Debugging:** Track 2D canvas state matrices, inspect DOM elements, and debug JavaScript functions using browser Developer Tools (`Option + Command + I` in Chrome or Web Inspector in Safari) paired with VS Code's inline error highlighting.
- **Native macOS Fallback Editors:** Edit code without VS Code or external downloads using built-in macOS utilities like TextEdit (configured via *Format > Make Plain Text*) or command-line editors (`nano` or `vim`) inside Terminal.
- **Browser-Based Cloud IDEs:** Access full-featured VS Code development environments remotely in any web browser without local setup using GitHub Codespaces, Replit, JSFiddle, or CodePen.

---

## 02. How The REA Repo Works

### Overview & Core Purpose
- **Agent-Oriented Reverse Engineering:** REA (Reverse Engineer Anything) is an open-source framework (`morluto/rea`) that enables AI coding agents to analyze compiled executables, mobile packages, and web/Electron apps without requiring source code.
  - **BASICALLY: AI Tool Inspector:** REA is a tool that lets AI coding assistants peek inside finished apps, mobile packages, and games to figure out how they were made without needing the original source code.
- **Dual Interface (MCP & CLI):** Exposes its capabilities to AI agents via a Model Context Protocol (MCP) server (`npx rea-agents setup`) and provides a standalone command-line tool (`rea` / `npx rea-agents@latest`) for human developers.
  - **BASICALLY: Works for Both AI and Humans:** You can use it yourself from a standard command terminal, or connect it directly to AI tools (like Claude, Cursor, or Codex) so the AI can run inspections automatically.

---

### How REA Works
- **Target Inspection:** The user asks an AI agent (e.g., Claude Code, Cursor, Codex, Gemini CLI) to investigate a specific app, binary, or directory.
  - a. **BASICALLY:** You ask your AI assistant to check out a specific game, app, or folder on your computer.
- **MCP Tool Execution:** The agent calls REA's MCP tools to static-analyze the target—unpacking files, reading metadata, or disassembling code.
  - a. **BASICALLY: REA Unpacks the App:** The AI uses REA to automatically open up the application's files, read hidden settings, and scan the underlying code structure.
- **Evidence Extraction:** REA returns raw, verifiable findings accompanied by concrete evidence (module imports, decompiled functions, assembly instructions, or file offsets).
  - a. **BASICALLY: REA Collects Proof:** It gathers raw facts—such as file lists, internal functions, and computer instructions—and hands that evidence back to the AI.
- **Behavior Analysis & Code Generation:** The AI agent reads the evidence payload to explain how the software works, trace specific logic (e.g., audio panning algorithms or state changes), or write new code implementing similar features.
  - a. **BASICALLY: AI Explains or Re-creates It:** The AI reads that evidence to explain how a specific feature works (like a game's audio or physics logic) or to help you code a similar feature yourself.

---

### Key Capabilities & Supported Technologies
- **JavaScript & Electron Applications:** Extracts `.asar` archives, maps JavaScript modules, isolates Electron IPC boundaries, and inspects front-end bundle dependencies.
  - a. **BASICALLY: Web & Desktop Apps:** Easily unzips and inspects web-based apps, Electron software (like Discord or VS Code), and JavaScript code packages.
- **Native Binaries:** Built-in static parsing for ELF (Linux), PE (Windows), thin Mach-O (macOS), and GPU code objects.
  - a. **BASICALLY: Standard Computer Programs:** Reads regular executable files across Windows, Mac, and Linux systems.
- **Managed Assemblies & Android:** Analyzes .NET assembly metadata/CIL instructions and Android APK structures.
  - a. **BASICALLY: Mobile & Managed Apps:** Scans Android app files (`.apk`) and Windows .NET software structures.
- **Decompiler Toolchain Integration:** Bridges directly with external reverse-engineering suites—including Ghidra, JADX, Rizin, IDA, Hopper, and GNU objdump—for deep analysis.
  - a. **BASICALLY: Connects with Pro Analysis Tools:** Bridges directly with heavy-duty reverse-engineering software (like Ghidra or JADX) to translate raw computer code into human-readable instructions.

---

### Limitations & System Requirements
- **Manual External Dependencies:** REA does not auto-install third-party decompilers (e.g., Ghidra, JADX, Rizin); users must install and configure those providers locally for full native analysis.
  - **BASICALLY: Doesn't Install Extra Tools Automatically:** REA can't read every type of app by itself. For complex desktop or mobile apps, you have to download and set up free external helper software (like Ghidra or JADX) on your computer first.
- **OS Prerequisites:** Linux environments require a `procps`-compatible `ps` command on the system PATH to perform process ownership and security verification during dynamic checks.
  - **BASICALLY: Can Overload the AI's Memory:** Big programs create mountains of data. Trying to analyze a large app all at once can easily overwhelm the AI's memory limits, causing it to stop processing or cut off mid-task.
- **Context Window Boundaries:** Large binary disassemblies or raw memory dumps can quickly exhaust an AI agent's context window size or trigger API token limits.
  - **BASICALLY: Can't Pass Heavy Security or Encryption:** If an app is locked down with strict copy protection, anti-cheat, or hidden code, REA can't unlock it on its own. You have to manually un-encrypt or unpack the file first.
- **Obfuscation & DRM Controls:** Heavily packed executables, anti-debugging mechanisms, or encrypted binaries still require manual decryption or specialized unpacking scripts before REA can effectively analyze them.
  - **BASICALLY: Needs Certain Computer Setup Rules:** It relies on standard background system utilities (especially on Linux) to safely double-check running programs, so it won't work properly on bare-bones environments missing standard tools.

---

## Comparing Two Rough Game Concepts for Implementation

### Concept A - Pattern Matching Games - Painting Recreation
#### i. Core Concept
1. Painting recreation game. The game will provide the user with famous paintings for the user to recreate in a timed (competitive), or untimed round (non-competitive) on a digital canvas.
2. The user will have a paint palette on their screen, which they can use to mix colors like a real artist would, and use different brushes to get different effects.
3. Once completed, the game will score how accurate the user's painting recreation was, scoring on color accuracy, and composition.
4. Users can then save their paintings on their dashboard and account, download them, and see their scores.

#### ii. Feasibility
1. **Engine & Rendering:** Uses native HTML5 Canvas 2D API (`CanvasRenderingContext2D`), keeping browser client execution lightweight without third-party game engine overhead.
2. **Algorithmic Efficiency:** Downsamples player and target reference canvases to a normalized $100 \times 100$ pixel grid. Pixel color distance ($\Delta E$) and grid composition checks compute in under 50ms ($O(N)$ array operations), preventing UI freeze during scoring.
3. **Asset Availability:** Utilizes public-domain classic artworks (Starry Night, Mona Lisa, The Great Wave) to avoid copyright/licensing constraints.
4. **Data Storage & Export:** Native `HTMLCanvasElement.toDataURL()` handles client-side PNG downloads directly in browser memory and formats compressed payload strings for API transmission.
5. **Risk Mitigation:** Initial build limits palette options to standard color pickers and fixed brush opacity before layering advanced HSV color-blending routines.

#### iii. Engagement
1. Engages both casual and competitive users due to timed and untimed game modes with allow for both low-pressure play, and those driven by intrinsic motivation.
2. It engages users by giving them a goal to their creativity, and motivation to pick up the arts in an easy-to-access format. Having a timed vs untimed visual gallery shows users how they've improved, and can event translate skills back into real-world arts.

---

### Concept B - Logic Game - Art Conservation
#### i. Core Concept
Players act as an art conservator solving a deductive matrix puzzle to determine the correct chemical solvent sequence needed to remove dirt layers without destroying the underlying historical painting.

#### ii. Mechanics Overview
Players do the swabbing, and mixing of components themselves as they work through the painting restoration process. Each painting has multiple layers, and each layer has its own mechanic, and the restoration strategy only applies to specific areas of that layer- going out of that area damages the painting, however they also have to figure that out based on clues. At the end, players can see their past restorations on their dashboard, and see their progress.

#### v. Detailed Mechanics
1. **Clue Matrix Per Level:** Read chemical/historical clue notes (e.g., "Layer 2 reacts to acidic solvents," "Oil pigment cannot touch alcohol base") per layer, and see which steps you've completed to restoring the painting.
2. **Grid Application:** Select tools (swabs, solvents, heat lamps), or even repainting sections, and apply them to grid sectors of a darkened canvas to safely strip damaged layers.
3. **Damage vs. Reveal:** Incorrect solvent picks damage the painting and lower final restoration quality scores.
4. **Timed Challenge vs Casual Untimed Modes:** Players can play an untimed round, or a timed round to make player more casual. Timed rounds grant score multipliers for speed and low solvent error rates. Players can choose an untimed, low-stress restoration session or a timed mode for personal focus, with scoring based purely on individual canvas health and clue accuracy.
5. **Algorithmic Rating:** Score is calculated based on Canvas Integrity ($60\%$) + Clue Deduction Accuracy ($40\%$) yielding an overall accuracy score ($0-100\%$).
6. **Visual Export:** One-click action allowing players to download their restored artwork as a PNG/JPEG directly from the browser canvas.
7. **Result Persistence:** Transmits score metrics and restored painting state data to backend storage attached to the player's account.

#### vi. Feasibility
1. **Engine & Rendering:** Built using DOM matrix grids or HTML5 Canvas 2D API (`CanvasRenderingContext2D`), toggling layer opacity and rendering revealed artwork slices.
2. **Algorithmic Efficiency:** Driven by a lightweight state array matrix (`grid[x][y] = {layer, health, pigment}`). Clue verification runs in $O(1)$ constant time per click, ensuring smooth performance with zero UI lag.
3. **Asset Availability:** Leverages public-domain historical artworks layered with digital aging and grime filters.
4. **Data Storage & Export:** Native `HTMLCanvasElement.toDataURL()` handles client-side PNG downloads directly and formats compressed payload strings for API transmission.

#### vii. Engagement
This game with engage both casual and competitive players by involving logic, and introducing them to a new field of work they may never have heard of, or may never get the chance to do, engaging them in a new world. The game combines arts, precision, and critical thinking skills, while teaching a new field.

---

### Winning Concept
**Paint Restoration Game**
This game was the winning concept because it engages users in a completely new field of arts, and engages logical thinking skills with precision skills, while allowing for more and less challenging play. It allows for learning of new skills, while posing a unique situation, through logical clue deduction and precision swabbing in a relaxing, self-paced environment.

---

### Target Audience for Winning Concept (Concept B)
The target audience for this game are cozy and casual logic game players, who want to play low-stress, and intrinsically motivated games that are methodical and engage logic, while doing calming tasks, and tracking progress over time. The audience is in their teen to young adulthood years, and are looking for low-commitment games that are easy to get involved in deeply.

---

## Map the 5-Stage Data Pipeline

> **ROUGH DRAFT STATE, MAY CHANGE UPON BUILD**

### 1. Account (User & Session State)
- **Purpose:** Stores player identity, authentication session, personal collection progress, and unlocked tools/artworks.
- **Data Model (`UserAccount`):**
  - a. `user_id`: UUID (Primary Key)
  - b. `username`: String
  - c. `total_paintings_restored`: Integer (Cumulative count of completed restorations)
  - d. `unlocked_artwork_ids`: Array of Strings (e.g., `['mona_lisa_01', 'starry_night_02']`)
  - e. `unlocked_tools`: Array of Strings (e.g., `['acid_swab', 'organic_solvent', 'heat_lamp', 'ultraviolet_light']`)

### 2. Game Session (Interactive Gameplay State)
- **Purpose:** Manages active multi-layer canvas rendering, real-time solvent mixing ratios, clue-boundary hit-testing, and surface integrity tracking.
- **Data Model (`GameSessionState`):**
  - a. `session_id`: UUID
  - b. `artwork_id`: String
  - c. `active_layer_index`: Integer (e.g., Layer 0: Varnish, Layer 1: Overpaint, Layer 2: Surface Dirt)
  - d. `layer_grid_matrix`: 2D Array of Objects `[{ x, y, dirt_level, pigment_health, is_safe_zone }]`
  - e. `active_solvent_mixture`: Object `{ acid_ratio: Float, organic_ratio: Float, water_ratio: Float }`
  - f. `painting_integrity_meter`: Float ($0.01\%$ to $100.0\%$)
  - g. `timer_seconds_elapsed`: Integer

### 3. Saved Result (Match Completion Payload)
- **Purpose:** Sent to backend via `POST /api/restorations` upon match completion to transmit performance metrics and the exported image.
- **Data Model (`SavedRestorationPayload`):**
  - a. `match_id`: UUID
  - b. `user_id`: UUID (Foreign Key)
  - c. `artwork_id`: String
  - d. `completion_timestamp`: ISO 8601 Timestamp
  - e. `final_integrity_score`: Float (Percentage score reflecting canvas health preserved)
  - f. `clue_deduction_accuracy`: Float (Percentage score evaluating correct solvent choices)
  - g. `layers_restored_count`: Integer
  - h. `time_taken_seconds`: Integer
  - i. `restored_canvas_image_data`: Base64 PNG String (generated via `canvas.toDataURL()`)

### 4. Dashboard (Player Progress & Gallery View)
- **Purpose:** Renders the player's personal "Conservator Gallery" via `GET /api/dashboard`, showcasing historical performance, personal accuracy metrics, and past restored artworks.
- **Data Model (`DashboardViewModel`):**
  - a. `user_profile_summary`: Object `{ username, total_paintings_restored }`
  - b. `restoration_history`: Array of Objects:
    - i. `match_id`: UUID
    - ii. `artwork_title`: String
    - iii. `restored_image_url`: Base64 Image String / Asset Path
    - iv. `final_integrity_score`: Float
    - v. `restoration_date`: Date String
  - c. `aggregate_stats`: Object `{ total_restorations: Integer, average_integrity: Float, highest_integrity_score: Float }`

### 5. Account Update (Server-Side Progression Sync)
- **Purpose:** Triggered automatically on the backend after validating a saved result payload to record the completion, update personal collection counts, and unlock new artwork/tools.
- **Data Model (`AccountUpdateDelta`):**
  - a. `user_id`: UUID
  - b. `paintings_restored_increment`: Integer (+1 upon completion)
  - c. `new_total_paintings_restored`: Integer (previous_total + 1)
  - d. `newly_unlocked_artworks`: Array of Strings (unlocked when completion milestones are met)
  - e. `newly_unlocked_tools`: Array of Strings (e.g., unlocking UV lamps or specialized organic solvents)

---

## Name Your Stack
- **a. Frontend UI:** HTML5, CSS3 / Tailwind CSS, and vanilla ES6 JavaScript to render conservator control panels, chemical mixing interfaces, solvent selectors, and player dashboard views.
- **b. Game Canvas Engine:** Native HTML5 Canvas 2D API (`CanvasRenderingContext2D`) to manage multi-layer painting stack rendering (surface dirt, overpaint, aged varnish, original pigment), layer opacity masking, swabbing coordinate hit-testing, and client-side PNG downloads via `canvas.toDataURL()` with zero external game engine dependencies.
- **c. Backend API:** Node.js with Express.js providing REST API endpoints (`POST /api/auth`, `POST /api/restorations`, `GET /api/dashboard`) to receive saved match payloads and trigger server-side account progression updates.
- **d. Database:** SQLite (managed via Prisma ORM or `better-sqlite3`) to store user accounts, authentication sessions, historical restoration performance records, and conservator progression metrics.
- **e. Hosting:** GitHub Pages hosting the static client app and VitePress documentation site, paired with Render or Vercel for backend Node.js REST API execution.
- **f. CI Toolchain:** GitHub Actions workflow running automated linting, code checks, and VitePress site build verification (`npm run docs:build`) on every repository push.

---

## Draft Architecture Sketch & Sequence Flow

```text
[ Web Browser Client ]
 ├── Frontend UI (Chemical Controls, Clue Matrix, Personal Gallery View)
 └── Game Canvas Engine (Native 2D Canvas, Multi-Layer Opacity Masking)
       │
       │  1. POST /api/auth/login (Credentials)
       ├───────────────────────────────────────────────► [ Auth Controller ] ─────► [ SQLite DB: users ]
       │
       │  2. Interactive Gameplay Loop (Local Client)
       │     (Solvent Mixing, Swabbing, Safe-Zone Hit-Testing)
       │
       │  3. POST /api/restorations (JSON Payload + Base64 PNG)
       ├───────────────────────────────────────────────► [ Restoration Controller ]
       │                                                        │
       │                                                        ├──► Writes record ──────► [ SQLite DB: restoration_matches ]
       │                                                        │
       │                                                        └──► Trigger Auto-Sync ──► [ Account Sync Controller ]
       │                                                                                         │
       │                                                                                         └──► Updates Progress ──► [ SQLite DB: user_accounts ]
       │
       │  4. GET /api/dashboard (Request Gallery & Personal Stats)
       └◄────────────────────────────────────────────── [ Dashboard Controller ] ◄── Reads Records
```

### Component Data Flow Breakdown
1. **Client Layer (Browser Environment)**
   - **Canvas Engine:** Manages local rendering of stacked artwork layers (surface dirt, overpaint, aged varnish, original pigment) using native HTML5 Canvas 2D context masking.
   - **Control UI:** Handles chemical ratio sliders, tool selection, clue matrix modal views, and button click events.
   - **Image Exporter:** Converts the final restored canvas into a compressed Base64 PNG string (`canvas.toDataURL()`) upon puzzle completion.
2. **Backend API Controller Layer (Node.js / Express)**
   - **Auth Controller (`/api/auth`):** Validates player login, manages session tokens, and returns active user state data.
   - **Restoration Controller (`/api/restorations`):** Receives match payloads containing performance metrics, integrity percentages, and Base64 canvas images.
   - **Account Sync Controller (Internal Service):** Validates match completion, increments `total_paintings_restored` by +1, and unlocks higher-tier historical artworks or specialized chemical tools in the user's library.
   - **Dashboard Controller (`/api/dashboard`):** Queries historical match records, personal integrity stats, and saved artwork images to populate the client's personal conservator gallery.
3. **Database Layer (SQLite)**
   - **`user_accounts`:** Stores `user_id`, `username`, `password_hash`, `total_paintings_restored`, and JSON array strings for `unlocked_artworks` and `unlocked_tools`.
   - **`restoration_matches`:** Stores `match_id`, `user_id`, `artwork_id`, `final_integrity_score`, `clue_accuracy`, `time_seconds`, `restored_image_data` (Base64 string), and `created_at` timestamp.

---

### Sequence Flow (5 Stage Data Lifecycle)
- **Account Initialization:** Player logs in. The client receives the `user_account` profile object and populates available tools/artworks.
- **Game Session:** Gameplay runs locally inside the HTML5 Canvas loop. The client evaluates swabbing coordinates against safe-zone coordinates without requiring network roundtrips.
- **Saved Result Payload:** Upon puzzle completion, the client posts `{ userId, artworkId, score, integrityPercent, imageBase64 }` to `POST /api/restorations`.
- **Account Update Sync:** The backend writes the match record to `restoration_matches`, increments `total_paintings_restored`, unlocks eligible tools or paintings, and updates `user_accounts`.
- **Dashboard Render:** The player navigates to their profile page, triggering `GET /api/dashboard` to fetch updated gallery images, personal accuracy averages, and newly unlocked collection choices.

---

## 5 Short User Stories

### a. User Story 1: Quick Session Onboarding
- **User Story:** As a casual logic player, I want to start a restoration puzzle directly from the home screen so that I can play immediately during short breaks.
- **Acceptance Criteria:**
  1. Clicking "Start Restoration" on the menu opens the game canvas without mandatory tutorial popups.

### b. User Story 2: Chemical Solvent Selection
- **User Story:** As a methodical restorer, I want to mix solvent ratios based on clue notes so that I can deduce the correct cleaning recipe without timer pressure.
- **Acceptance Criteria:**
  1. Selecting chemical components dynamically updates the active solvent recipe indicator.
  2. Clue notes remain permanently viewable in a side panel throughout the level.

### c. User Story 3: Layer Swabbing & Grime Cleaning
- **User Story:** As a cozy gamer, I want visual feedback while swabbing the canvas so that I can safely clear surface dirt layers.
- **Acceptance Criteria:**
  1. Swabbing valid areas reduces dirt layer opacity to reveal underlying paint layers.
  2. Swabbing outside safe clue boundaries decreases the painting integrity meter.

### d. User Story 4: Finished Artwork Export
- **User Story:** As an art lover, I want to download my completed restored painting so that I can save my finished artwork locally.
- **Acceptance Criteria:**
  1. Completing a restoration activates a "Download PNG" button that triggers a direct browser image download via `canvas.toDataURL()`.

### e. User Story 5: Private Gallery Dashboard
- **User Story:** As a completionist tracking personal progress, I want to view my past restorations in a personal dashboard so that I can review my collection over time.
- **Acceptance Criteria:**
  1. Navigating to `/dashboard` renders a visual grid of saved restored artwork thumbnails and completion dates.
  2. The gallery interface displays personal accuracy stats.

---

## Define 1 Uncertain Creative Experiment

- **a. Novel Feature (Multi-Layer Chemical & Spatial Clue Deduction):** Requiring players to read historical conservation notes to decipher precise chemical solvent mixing ratios and map out spatial safe-zone boundaries purely through textual/grid clues without explicit on-screen visual markers. This is more novel and new, than just giving them the instructions, as most "cozy" games do.
- **b. Hypothesis (Satisfying Cozy Deduction):** We believe analyzing historical clues to unlock the exact safe solvent recipe and swabbing boundaries will create a deeply satisfying, methodical "eureka" moment that fits a relaxing puzzle experience.
- **c. Gameplay & Creative Risk (Player Confusion & Trial-and-Error Frustration):** If clue matrices are too abstract or unforgiving, players may get stuck, feel frustrated by accidental canvas damage, or resort to random trial-and-error guessing, breaking the low-stress, cozy flow.
- **d. Fallback Plan (Collapsible Side Panel with Tool Hints):** Utilize our planned collapsible side panel to provide guided chemical recipe suggestions and subtle boundary highlight cues when integrity drops, ensuring the puzzle remains accessible and low-pressure without introducing new features, and include a feature to get the answer, and also a feature to skip that layer/stage of restoration.
