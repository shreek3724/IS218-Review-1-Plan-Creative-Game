# User Stories & Creative Experiment

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
