# Codex Step-by-Step Implementation Guide

## Overview & Execution Protocol
This document serves as the prompt execution guide for AI/Codex. 
When the user specifies **"Lets do step 1"**, **"Lets do step 2"**, etc., Codex must read the matching step defined below and perform the implementation accordingly.

### Core Architectural Mandate
Ensure the structure is easy to update consistently and using programming organization that is easy for humans to understand and keep track of, and for both AI and humans to update, and add to over time while saving as many AI credits as possible.

---

## Phase 1: Offline Planning & Core Decisions

### Codex Implementation Steps

```text
Step Command Reference:
- "Lets do step 1"  ==> Execute Step 1: Initialize VitePress Site & Navigation
- "Lets do step 2"  ==> Execute Step 2: Add "Research" Pages & Information
- "Lets do step 3"  ==> Execute Step 3: Add "Expanding Ideas" Pages & Information
- "Lets do step 4"  ==> Execute Step 4: Add "Documentation & Record" Pages & Links
```

---

### Step 1: Initialize VitePress Site (Command: "Lets do step 1")
**Goal:** Create an initial VitePress site on Github Pages through Actions, with a Homepage, navbar, and header/navbar.

#### Requirements & Constraints:
- Ensure the structure is easy to update consistently and using programming organization that is easy for humans to understand and keep track of, and for both AI and humans to update, and add to over time while saving as many AI credits as possible.
- **Style and Styling Rules:**
  - Clean, minimalist, Warm white background, Black and Dark-Green text.
  - Calibri, or any another simple, and easy to read font.
  - A Navigation bar of main items on Left side, with major tabs of "Home," "Research," "Expanding Ideas" and "Documentation & Record", with sub categories matching up to information in them.
  - Once on a page from the left nav bar, sub tabs of page the user is currently on, on the right side.
  - Horizontal header at top of page has a homepage button on the right end, and a title on the left end, saying **"Creative Game: Research, Planning & Documentation"**.
- **Home Page Layout (`index.md`):**
  - Has a title saying `"Creative Game: Research, Planning & Documentation"`
  - Sub-buttons under it linking to `"Research"`, `"Expanding Ideas"`, and `"Documentation & Record"`
  - Sub-text saying `"A centralized location to track research, ideas, planning and progress."`

---

### Step 2: Add "Research" Pages/Tabs (Command: "Lets do step 2")
**Goal:** Add "Research" pages/tabs and all the included information on it, its sub pages, etc., pulling verbatim content from `docs/spec.md`.

#### Page Structure to Generate under `/research/`:
1. **The REA Repo (`/research/rea-repo.md`)**
   - Overview & Core Purpose
   - How REA Works
   - Key Capabilities & Supported Technologies
   - Limitations & System Requirements
2. **Comparing Two Overarching Game Concepts (`/research/game-concepts.md`)**
   - Concept A: Logic Based Games (Game Mechanics: Logic & Problem-Solving Games - Deductive Format)
   - Concept B: Pattern Matching Games (Game Mechanics: Pattern Matching Games - Visual/Spatial Format)
   - How to Structure & Format These Games
3. **Software Stack & macOS Setup (`/research/stack-setup.md`)**
   - Software Stack for MacBook Air M2 (macOS 14.4 Sonoma)
   - Development Setup (VS Code & Native macOS Tools)

---

### Step 3: Add "Expanding Ideas" Pages/Tabs (Command: "Lets do step 3")
**Goal:** Add "Expanding ideas" pages/tabs and all the included information on it, its sub pages, etc.

#### Page Structure to Generate under `/expanding-ideas/`:
1. **Comparing Two Rough Game Concepts (`/expanding-ideas/concept-comparison.md`)**
   - Concept A - Pattern Matching Games - Painting Recreation (Core Concept, Feasibility, Engagement)
   - Concept B - Logic Game - Art Conservation (Core Concept, Mechanics, Feasibility, Engagement)
   - Winning Concept Rationale (Paint Restoration Game)
   - Target Audience for Winning Concept (Concept B)
2. **5-Stage Data Pipeline (`/expanding-ideas/data-pipeline.md`)**
   - Account → Game Session → Saved Result → Dashboard → Account Update schemas.
3. **Stack & Architecture Sketch (`/expanding-ideas/architecture.md`)**
   - Name Your Stack (Frontend UI, Game Engine, Backend API, Database, Hosting, CI)
   - Draft Architecture Sketch (Client, Controller, Database flow diagram)
   - Component Data Flow Breakdown & Sequence Flow (5 Stage Data Lifecycle)
4. **User Stories & Creative Experiment (`/expanding-ideas/user-stories-experiment.md`)**
   - 5 Short User Stories with acceptance criteria.
   - 1 Uncertain Creative Experiment (Novel Feature, Hypothesis, Gameplay Risk, Fallback Plan).

---

### Step 4: Add "Documentation & Record" Pages/Tabs (Command: "Lets do step 4")
**Goal:** Add "Documentation & Record" pages/tabs and all the included information on it, its sub pages, etc.

#### Page Structure to Generate under `/record/`:
1. **Documentation & Record (`/record/index.md`)**
   - Contains the contents of the record keeping MD file (`docs/project-record.md`).
   - Includes a direct link to that MD file on the GitHub repository.
   - Provides quick links tracker at top for repository, live site, issue links, PR links, and Changed / Checked / Next logs.
