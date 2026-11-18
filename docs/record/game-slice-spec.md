# Art Conservator Static Game Build Specification

## Handoff instructions

This document is the implementation contract for the first public release. A new
chat should follow it in order and preserve its scope boundaries. The project
owner provides the visual references listed in **Section 4.1** for the agent to
use while building. Ask the project owner only for genuinely required missing
information. Do not invent unresolved visual references.

## 1. Goal

Build a polished, public, single-player Art Conservator game that runs entirely from a GitHub Pages URL.

```text
Simulated sign up / sign in
→ play a restoration puzzle
→ clear layers in order
→ see a saved-result experience
→ download PNG or play again
→ sign out
```

There is no backend, real account, database, API, multiplayer, server-side
saving, or local browser persistence in version one.

## 2. Technology

- SvelteKit + TypeScript
- Static build with `@sveltejs/adapter-static`
- GitHub Pages + GitHub Actions deployment
- HTML5 Canvas for original painting artwork and restoration effects
- Svelte components for screens and controls
- Pure TypeScript game engine for rules and scoring
- Playwright for browser tests
- Vitest for unit tests
- ESLint, Prettier, TypeScript strict mode, and `svelte-check`

The existing Flask project from a different repo remains untouched as reference/coursework. The Pages game does not depend on it or use it. Do not concern yourself with flask or the past project as you build.

### Static-hosting constraints

- Use SvelteKit as a static browser application only; use `@sveltejs/adapter-static`.
- In GitHub Actions, pass the correct GitHub Pages base path into the production
  build: default to `/<repository-name>` for a project Pages site, and use `/`
  for a user/organization Pages site or custom domain. Document the override.
- Prerender the required public views as static files, so their direct URLs and
  browser refresh work on GitHub Pages without a server fallback.
- Do not create SvelteKit server routes, API endpoints, form actions, server-side rendering requirements, databases, secrets, or environment-dependent gameplay.
- The published site must consist only of static files that run in the visitor's browser.
- The final game must work on a direct visit to the GitHub Pages URL and after browser refresh.

## 3. Simple architecture

```text
Svelte screens
  ├─ Simulated sign-in
  ├─ Game screen
  ├─ Results / saved record
  └─ Sign-out

Game engine
  └─ checks every move, controls layer progression, calculates score

Painting definitions
  └─ describe each painting, clues, solutions, layers, and visual effects

Canvas renderer
  └─ draws original artwork and removes restored layers
```

Only the game engine changes game state. The Svelte UI displays it. Canvas only draws it.

### Required source structure

```text
src/lib/domain/       GameSession, validation, scoring, types
src/lib/content/      Painting definitions and content validation
src/lib/rendering/    Canvas artwork and layer overlays
src/lib/components/   Reusable Svelte UI components
src/lib/stores/       In-memory simulated session and game view state
src/routes/           Sign-in, game, and results pages/views
tests/unit/           Engine, score, and content-definition tests
tests/e2e/            Playwright player-journey and accessibility tests
```

Keep the game engine free of Svelte, DOM, Canvas, and browser-storage code.

## 4. Game rules and future growth

Each painting is defined through data:

- Painting title and original Canvas artwork
- Any number of ordered layers
- Layer type: surface dirt, overpaint, aged varnish, or future types
- Cells or masks covered by each layer
- Required tool and solvent mix
- Player-facing clues
- Visual overlay effect
- Integrity penalty rules

```text
Player chooses cell + tool + mixture
→ engine checks active-layer rules
→ correct move clears that cell
→ incorrect move reduces integrity
→ clearing all cells unlocks the next layer
→ clearing all layers completes the painting
```

Golden Valley starts with three layers. A test painting will use four layers to prove the game is not limited to three.

### Golden Valley official configuration

Use a 4 × 4 grid. Coordinates are zero-indexed `x,y`, where `0,0` is the
top-left cell. Every configured mixture totals 100%. Integrity starts at 100;
an invalid move costs 10 integrity points.

| Order | Layer | Target cells | Tool | Mixture water/oil/acid | Visual treatment |
|---|---|---|---|---|---|
| 1 | Surface Dirt | Every cell: `0-3,0-3` | `swab` | `70/30/0` | Dark dusty film fades from each cleared cell. |
| 2 | Overpaint | Centre cells: `1,1`, `2,1`, `1,2`, `2,2` | `brush` | `20/70/10` | Muddy corrective paint fades to reveal the landscape. |
| 3 | Aged Varnish | Every cell: `0-3,0-3` | `heat_lamp` | `10/20/70` | Amber/yellow veil fades from each cleared cell. |

Golden Valley has 36 required valid treatments: 16 Surface Dirt, 4 Overpaint,
and 16 Aged Varnish. On the final correct cell of each layer, automatically
activate the next layer and update its title, clues, and objectives. On the
final correct cell of Aged Varnish, show the results screen immediately.

The solvent controls must provide both a slider and a typed percentage field
for water, oil, and acid. Changing either control immediately updates its
matching slider or field. Each value is a whole number from 0 to 100. The
player may type values while adjusting the mix, but **Apply Solvent** remains
unavailable until all three values total exactly 100%, with clear guidance on
what must be adjusted.

**Surface Dirt clues**

- The outer film is loose and dry. Begin with the gentlest treatment.
- Keep acid out of this first mixture.
- Use seven parts water to three parts oil.
- Treat the whole canvas with a soft swab.

**Overpaint clues**

- A later repair hides the heart of the landscape.
- The solution is oil-led, but a small acidic note is needed.
- Use two parts water, seven parts oil, and one part acid.
- Use the brush on the four centre cells.

**Aged Varnish clues**

- The final amber veil covers the entire landscape.
- This treatment is acid-led, warmed carefully with a heat lamp.
- Use one part water, two parts oil, and seven parts acid.
- Treat every canvas cell.

### Required engine behavior

- `GameSession` is the sole owner of live game state: active layer, selected cell, selected tool, solvent mixture, cleared cells, integrity, attempts, correct moves, and completion.
- Painting and layer definitions are immutable data; the UI must not contain painting-specific validation rules.
- A move is valid only when the active layer includes the selected cell, the three mixture values total exactly 100%, and its configured tool and mixture match exactly.
- A valid move clears only that active-layer cell. A repeated, wrong-cell, wrong-tool, or wrong-mixture move is invalid and applies the configured integrity penalty.
- A layer completes only when all of its target cells are cleared. The next layer then becomes active automatically, and the UI immediately updates its name, clues, and objectives.
- Integrity never drops below zero. At zero integrity, the player may continue and finish the painting; the integrity portion of the final score is zero. Keep **Restart Painting** available as an optional choice that resets the active painting.
- Final score is `round((integrity × 0.60) + (clueAccuracy × 0.40))`, where clue accuracy is `correct moves ÷ attempts × 100`.

### 4.1 Owner visual references

The game mechanics and Golden Valley puzzle configuration above are approved.
The project owner supplies the screen references below for use throughout the
interface build. The agent should preserve their overall aesthetic and style,
including palette, typography, mood, spacing, and responsive intent; it does
not need to reproduce them pixel-for-pixel. A new chat must not invent missing
references.

| Item | Required decision |
|---|---|
| Visual references | Sign-in, game, and results screen references; desktop/mobile expectations; palette, typography, and desired art mood. |

If these are not supplied, ask for them before building the interface styling.

## 5. Simulated account and saved-record experience

- Sign-up/sign-in accepts a display name only.
- The name exists only in in-memory session state for the open page.
- Completing a painting creates one visible saved-restoration record for that session.
- Sign-out clears the in-memory player and saved-record state, then returns to sign-in.
- Refreshing the browser intentionally starts a new simulation.

Do not use `localStorage`, cookies, passwords, real identity, or shared user data in version one.

### 5.1 Future session-only growth

Version one contains one public, replayable Golden Valley painting and one
visible completed-restoration record. A future version may add multiple
hand-defined paintings in the same browser session and a session-only dashboard
listing every painting completed during that open session. Refreshing or signing
out must clear that dashboard and all session records. Do not add a backend,
database, cookies, or browser storage. Keep painting definitions and
completed-restoration records as separate typed data so this future work does
not require rewriting the game engine.

## 6. Development phases

### Phase 1 — Foundation

- Create the static SvelteKit project.
- Configure static GitHub Pages output, the production base path, prerendered
  public views, and the GitHub Actions deployment workflow.
- Add formatting, linting, type checking, unit testing, and browser testing.

### Phase 2 — Game data and engine

- Define the painting and layer data structure.
- Write the matching unit tests before or alongside each game-engine rule.
- Build the pure game engine.
- Implement valid/invalid moves, integrity, score, layer order, completion, and sign-out state.
- Design a clearly labeled internal four-layer test painting with its own configuration; it proves extensibility and is not a second public game unless the owner later approves it.
- Implement the approved Golden Valley configuration above.

### Phase 3 — Playable interface

- Write the matching browser/E2E test before or alongside each player-facing flow.
- Build the functional interface first using reusable Svelte components.
- Build simulated sign-in, game, results, saved record, replay, and sign-out.
- Build clearly named buttons and sliders, typed percentage fields for solvent
  values, visible keyboard focus, keyboard canvas-cell selection, and clear
  status messages for correct moves, incorrect moves, and unlocked layers.

### Phase 4 — Original artwork and Canvas effects

- Create original Canvas-rendered painting artwork.
- Render grime, overpaint, and varnish overlays from layer data.
- Reveal the painting cell by cell after successful moves.
- Support mouse and keyboard canvas interaction.
- Add PNG export.
- Keep Canvas as a visual layer only: all important state, clues, progress, and feedback must also be available as semantic HTML text.

### Phase 5 — Quality and release

- Run all automated checks.
- Verify the full player journey manually.
- Deploy successful `main` builds to GitHub Pages.

### 6.1 Phase gates and owner review

Complete one phase at a time. After each phase, stop and wait for the project
owner to approve the next phase. Do not begin later-phase work without explicit
approval, even if it appears straightforward.

| Completed phase | Required review point | What the owner can test |
|---|---|---|
| Phase 1 | Static deployment and tooling work. | Open a minimal SvelteKit app at the GitHub Pages URL; confirm direct loading, refresh, base path, and CI checks. This is not gameplay yet. |
| Phase 2 | Engine rules and content fixture work. | Review unit-test results for valid/invalid moves, score, ordered layers, failure, and four-layer support. This is not the finished player UI. |
| Phase 3 | Complete playable flow works. | Simulated sign-in, solvent/tool selection, layer progression, results/saved record, replay, and sign-out. This is the first complete gameplay-loop demo. |
| Phase 4 | Full visual game experience works. | Original Canvas artwork, visual layer removal, keyboard interaction, and PNG export. |
| Phase 5 | Release candidate is verified. | Run the full public game journey and confirm every required CI check passes. |

At each gate, report: changes made; tests run and their result; unrun checks;
the URL or local steps to try the phase; what the owner should verify; and any
owner decision required before the next phase.

When the owner says, for example, “Implement Phase 1 only,” complete that phase,
report the Phase 1 gate, and stop. Do not start Phase 2 until the owner explicitly
approves it.

## 7. Minimum automated test plan

### Unit tests

- Painting definitions are valid.
- Golden Valley matches its approved cells, tools, mixtures, clue text, integrity penalty, and 36-treatment total.
- Valid moves clear the correct active-layer cell.
- Invalid or repeated moves reduce integrity correctly.
- Integrity reaching zero does not prevent completion; restart remains optional and the final score reflects zero integrity.
- Layers unlock only in order.
- A four-layer painting completes correctly.
- Final score uses 60% integrity and 40% clue accuracy.
- Sign-out clears simulated session and saved-record state.
- Typed and slider solvent inputs stay synchronized; **Apply Solvent** is unavailable unless their total is exactly 100%.

### Browser/E2E tests

- **Golden Valley full restoration gameplay loop:** simulated sign-in → select `swab` and make `70/30/0` → clear all 16 Surface Dirt cells → automatically see Overpaint clues → select `brush` and make `20/70/10` → clear its 4 centre cells → automatically see Aged Varnish clues → select `heat_lamp` and make `10/20/70` → clear all 16 cells → immediately see the results and simulated saved record with a perfect score.
- Direct static site load and refresh of each required public view work from the deployed GitHub Pages URL without a server.
- Simulated sign-in → complete Golden Valley → results/saved record → sign-out.
- Invalid move → feedback and integrity loss → recovery → lower final score.
- Keyboard canvas play and PNG download.
- Accessibility scan for sign-in, game, and results views.
- Production build works under the GitHub Pages URL path and makes no backend/API requests.
- Refreshing starts a new simulation; no player name or saved result is read from browser storage.

## 8. Required CI checks

Every pull request and `main` build runs:

```text
Prettier format check
→ ESLint
→ TypeScript strict check + svelte-check
→ Vitest unit tests
→ production static build
→ Playwright E2E tests
→ Axe accessibility tests
→ GitHub Pages deploy only when everything passes
```

The deployment workflow must run the checks before deployment. Pull requests
must run checks but must not publish to GitHub Pages.

After every local verification run and CI run, append the date, time, command or
workflow, pass/fail result, and any unrun checks to `TEST-RESULTS.md`. Keep this
file in the repository as the project’s test record.

## 9. Definition of done

The first release is complete when:

- Anyone can play it from the public GitHub Pages URL.
- The game has no backend dependency.
- The game uses no server route, API call, database, secret, cookie, or `localStorage`.
- Simulated sign-in, play, saved result, and sign-out all work.
- A player can complete the full restoration loop: create the correct solvent, choose the correct tool, apply it to clear every required cell in the active layer, automatically receive the next layer’s clues and objectives, and repeat until all layers are complete.
- Golden Valley has a correct multi-layer restoration puzzle.
- Incorrect moves have meaningful consequences.
- The Canvas visibly reveals the restored artwork.
- Results, replay, and PNG download work.
- The engine supports a painting with more than three layers.
- Keyboard and screen-reader support work.
- All required tests pass before deployment.

## 10. Implementation standards

- **Design and efficiency:** Use SOLID, object-oriented, and design-pattern principles selectively when they make the code clearer, safer, easier to test, or easier to extend. Preserve useful existing patterns when extending code. Prefer the simplest readable solution that meets the requirement; do not add classes, abstractions, dependencies, or patterns only for their own sake. Reuse existing components, utilities, tests, and assets where appropriate. Work efficiently, but never reduce required testing, verification, accessibility, or code quality merely to save time, tokens, credits, or compute.
- Use TypeScript strict mode; do not use `any` for game-domain state.
- Use immutable painting definitions and typed IDs for tools, layer types, cells, and paintings.
- Prefer pure functions for validation and scoring. Keep Canvas, downloads, routing, and UI events at the application boundary.
- Use `const` by default, clear names, named exports for domain modules, and small focused files.
- Treat lint, formatting, type, unit, E2E, and accessibility failures as release blockers.
- Keep dependencies minimal. Add a dependency only when it directly supports SvelteKit, testing, accessibility, formatting, linting, or static deployment.

## 11. Fresh-chat start checklist

1. Read this specification fully.
2. Confirm the owner inputs in Section 4.1 are available; ask for only the missing items.
3. Scaffold the static SvelteKit application and verify a GitHub Pages-compatible production build before building gameplay.
4. Add tooling and make all required CI checks pass on a minimal static page.
5. Write each acceptance test before or alongside the feature it verifies; do not postpone the Section 7 tests until the end.
6. Implement the engine and test fixture, then the player interface, Canvas renderer, and Golden Valley content.
7. Add E2E and accessibility tests for the complete simulated player journey.
8. Record every verification run in `TEST-RESULTS.md`, including date, time, checks run, result, and unrun checks.
9. Deploy only after every required check passes.
