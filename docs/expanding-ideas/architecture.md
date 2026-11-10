# Stack & Architecture Sketch

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

## Component Data Flow Breakdown

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

## Sequence Flow (5 Stage Data Lifecycle)

- **Account Initialization:** Player logs in. The client receives the `user_account` profile object and populates available tools/artworks.
- **Game Session:** Gameplay runs locally inside the HTML5 Canvas loop. The client evaluates swabbing coordinates against safe-zone coordinates without requiring network roundtrips.
- **Saved Result Payload:** Upon puzzle completion, the client posts `{ userId, artworkId, score, integrityPercent, imageBase64 }` to `POST /api/restorations`.
- **Account Update Sync:** The backend writes the match record to `restoration_matches`, increments `total_paintings_restored`, unlocks eligible tools or paintings, and updates `user_accounts`.
- **Dashboard Render:** The player navigates to their profile page, triggering `GET /api/dashboard` to fetch updated gallery images, personal accuracy averages, and newly unlocked collection choices.
