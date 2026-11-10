# 5-Stage Data Pipeline

> **ROUGH DRAFT STATE, MAY CHANGE UPON BUILD**

## 1. Account (User & Session State)

- **Purpose:** Stores player identity, authentication session, personal collection progress, and unlocked tools/artworks.
- **Data Model (`UserAccount`):**
  - a. `user_id`: UUID (Primary Key)
  - b. `username`: String
  - c. `total_paintings_restored`: Integer (Cumulative count of completed restorations)
  - d. `unlocked_artwork_ids`: Array of Strings (e.g., `['mona_lisa_01', 'starry_night_02']`)
  - e. `unlocked_tools`: Array of Strings (e.g., `['acid_swab', 'organic_solvent', 'heat_lamp', 'ultraviolet_light']`)

## 2. Game Session (Interactive Gameplay State)

- **Purpose:** Manages active multi-layer canvas rendering, real-time solvent mixing ratios, clue-boundary hit-testing, and surface integrity tracking.
- **Data Model (`GameSessionState`):**
  - a. `session_id`: UUID
  - b. `artwork_id`: String
  - c. `active_layer_index`: Integer (e.g., Layer 0: Varnish, Layer 1: Overpaint, Layer 2: Surface Dirt)
  - d. `layer_grid_matrix`: 2D Array of Objects `[{ x, y, dirt_level, pigment_health, is_safe_zone }]`
  - e. `active_solvent_mixture`: Object `{ acid_ratio: Float, organic_ratio: Float, water_ratio: Float }`
  - f. `painting_integrity_meter`: Float ($0.01\%$ to $100.0\%$)
  - g. `timer_seconds_elapsed`: Integer

## 3. Saved Result (Match Completion Payload)

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

## 4. Dashboard (Player Progress & Gallery View)

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

## 5. Account Update (Server-Side Progression Sync)

- **Purpose:** Triggered automatically on the backend after validating a saved result payload to record the completion, update personal collection counts, and unlock new artwork/tools.
- **Data Model (`AccountUpdateDelta`):**
  - a. `user_id`: UUID
  - b. `paintings_restored_increment`: Integer (+1 upon completion)
  - c. `new_total_paintings_restored`: Integer (previous_total + 1)
  - d. `newly_unlocked_artworks`: Array of Strings (unlocked when completion milestones are met)
  - e. `newly_unlocked_tools`: Array of Strings (e.g., unlocking UV lamps or specialized organic solvents)
