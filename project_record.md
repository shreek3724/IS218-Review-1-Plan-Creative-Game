# Creative Game: Research, Planning & Documentation — Project Record

## Game Creative Slice Development - Quick Links & Repository Trackers

- [Game development repository](https://github.com/shreek3724/IS218CreativeGameSlice2)
- [Play Art Conservator](https://shreek3724.github.io/IS218CreativeGameSlice2/)

### Game development issues

- [Step 1 - Issue #1](https://github.com/shreek3724/IS218CreativeGameSlice2/issues/1)
- [Step 2 / Phase 2 - Issue #2](https://github.com/shreek3724/IS218CreativeGameSlice2/issues/2)
- [Phase 3 - Issue #3](https://github.com/shreek3724/IS218CreativeGameSlice2/issues/3)
- [Step 4 / Phase 4 - Issue #4](https://github.com/shreek3724/IS218CreativeGameSlice2/issues/4)
- [Step 5 / Phase 5 - Issue #5](https://github.com/shreek3724/IS218CreativeGameSlice2/issues/5)
- [PEER FEEDBACK - Game tutorial / mixture application feedback - Issue #6](https://github.com/shreek3724/IS218CreativeGameSlice2/issues/6)

### Personal Game Decisions

- Add a five-step **How to Play!** pop-up that players dismiss with **X** before playing.
- Move painting integrity above the canvas. Place the **Current note** and always-visible cell-and-tool reminder above the tools.
- Give each solvent an independent **0–100%** slider. Cap the combined mixture at **100%** and show the amount remaining or a maximum-total message.
- Run the full test suite before pushing gameplay changes. Track peer feedback in **issue #6** and link the live game, repositories, and project record.

### Decisions Made with AI Help & Consulting

- Build **Golden Valley** as a single-player, untimed restoration puzzle with a **4×4 grid** and three layers cleared in order. Give players clues for the solvent mix, tool, and treatment area.
- Reduce integrity for wrong moves without changing the artwork. Weight the final score **60% integrity** and **40% clue deduction**.
- Use **Home, Game, and Results** screens, support keyboard play, and let players download the restored painting as a PNG.
- Deploy the static **SvelteKit** game on **GitHub Pages** with simulated sign-in and session-only results.
- Use a native modal for the tutorial and a shared handler to keep sliders and numeric fields synchronized. Test the full restoration flow and verify the deployed changes at mobile width.

## Quick Links & Repository Trackers
- **GitHub Repository:** https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game
- **Live Documentation Website (VitePress):** https://shreek3724.github.io/IS218-Review-1-Plan-Creative-Game/

- **Issues:**

Issue 1: Initialize VitePress Site: https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game/issues/1


Issue 2: Add Add “Research” pages/tabs: https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game/issues/2


Issue 3: Step 3: Add “Expanding ideas” pages/tabs: https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game/issues/3


Issue 4: Step 4: Add “Documentation & Record” pages/tabs: https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game/issues/4

- **Classmate Review Task:**


Issue #5: Peer Feedback Issue Update: Add Website Link to README
https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game/issues/5


Issue #6: Peer Feedback Issue Update: Concept B Feedback
https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game/issues/6



- **Project Record MD File Link:** https://github.com/shreek3724/IS218-Review-1-Plan-Creative-Game/blob/main/project_record.md


### Canvas Submission Log (Changed / Checked / Next)
- **Changed:** Completed and deployed the VitePress documentation, planning, and research website with Home, Research, Expanding Ideas, and Documentation & Record sections, updated to fix feedback changes on issues 5 and 6.
- **Checked:** Updated the project Node.js/npm runtime, ran local VitePress production builds, verified generated routes, confirmed GitHub Actions deployments, and route-checked all live pages for HTTP 200 responses.
- **Next:** Build the first slice.

---

## Page Organization Main Ideas
Specify how exactly you want the website to be designed and what information per tab/location/etc.

### Home Page
- **Title:** "Creative Game: Research, Planning & Documentation"
- **Sub-buttons:** Links to "Research", "Expanding Ideas", and "Documentation & Record"
- **Sub-text:** "A centralized location to track research, ideas, planning and progress."

---

## Style and Things to Include
- **Color Palette:** Clean, minimalist, Warm white background, Black and Dark-Green text.
- **Typography:** Calibri, or any another simple, and easy to read font.
- **Navigation Layout:**
  - A Navigation bar of main items on Left side, with major tabs of "Home," "Research," "Expanding Ideas" and "Documentation & Record", with sub categories matching up to information in them.
  - Once on a page from the left nav bar, sub tabs of page the user is currently on, on the right side.
- **Header Layout:** Horizontal header at top of page has a homepage button on the right end, and a title on the left end, saying "Creative Game: Research, Planning & Documentation".

---

## Page Organization & Structure: What Should Be On Each Page, Sub-Page, etc.

### 1. Research
- **The REA Repo**
  - Overview & Core Purpose
  - How REA Works
  - Key Capabilities & Supported Technologies
  - Limitations & System Requirements
- **Comparing Two Overarching Game Concepts**
  - Concept A: Logic Based Games (Game Mechanics: Logic & Problem-Solving Games - Deductive Format)
  - Concept B: Pattern Matching Games (Game Mechanics: Pattern Matching Games - Visual/Spatial Format)
  - How to Structure & Format These Games
  - Software Stack for MacBook Air M2 (macOS 14.4 Sonoma)
  - Development Setup (VS Code & Native macOS Tools)

### 2. Expanding Ideas
- **Comparing Two Rough Game Concepts for Implementation**
  - Concept A - Pattern Matching Games - Painting Recreation (Core Concept, Feasibility, Engagement)
  - Concept B - Logic Game - Art Conservation (Core Concept, Mechanics, Feasibility, Engagement)
  - Winning Concept Rationale
- **Target Audience for Winning Concept (Concept B)**
- **Map the 5-Stage Data Pipeline** (Account $\rightarrow$ Game Session $\rightarrow$ Saved Result $\rightarrow$ Dashboard $\rightarrow$ Account Update)
- **Name Your Stack**
- **Draft Architecture Sketch & Sequence Flow**
  - Architecture Diagram
  - Component Data Flow Breakdown
  - Sequence Flow (5 Stage Data Lifecycle)
- **5 Short User Stories**
- **Define 1 Uncertain Creative Experiment**

### 3. Documentation & Record
- Contains the contents of the record keeping MD file & a link to that MD file on the github repo.

---

## Project Change & Verification Log

| Date | Category | Summary of Changes Made | Checks & Verification Performed | Status / Next Immediate Action |
| :--- | :--- | :--- | :--- | :--- |
| 2026-11-09 | Initial Plan | Created `spec.md`, `project-record.md`, and `codex-instructions.md` | Verified local markdown formatting | Proceed with Step 1 VitePress site scaffolding |
| 2026-11-09 | Set up documentation, planning, and research website | Created and deployed the VitePress home page, navigation, dark-green minimalist theme, Research pages, Expanding Ideas pages, Documentation & Record page, and GitHub Pages workflow. | Updated the Node.js/npm runtime; ran local VitePress production builds; verified generated routes; confirmed GitHub Actions deployments; and route-checked all live pages for HTTP 200 responses. | Implement feedback changes and then build the first slice. |
| 2026-11-18 | Game development documentation | Added personal and AI-assisted decisions for the playable slice and feedback updates. | Verified section placement, Markdown formatting, and the match to the agreed decision lists. | Plan and Build integrated build |
| 2026-11-23 | Submission spec & Personal Reference Submission spec | Documented gameplay updates, four user stories with checks, technology choices, privacy, and proposed analytics. All former spec items still apply. This was mostly documentation changes. | Verified the story checks against existing tests. Formatting and diff checks passed. | Pushed both specs and closed issue #7. Next, publish the submission spec on the documentation site and request partner review. |
