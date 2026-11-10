# Software Stack & macOS Setup

## Software Stack for MacBook Air M2 (macOS 14.4 Sonoma)

- **Hardware Capability:** The M2 Apple Silicon processor natively executes browser JavaScript and HTML5 Canvas rendering at 60 FPS with near-zero CPU load and minimal battery usage.
- **Primary Code Editor:** Visual Studio Code—serves as your central development workspace for managing multi-file project directories, editing HTML/CSS/JS, running terminal commands, and using code-completion tools.
- **Game Engine:** HTML5 Canvas 2D API (`CanvasRenderingContext2D`)—built directly into all web browsers; handles multi-layer rendering, coordinate click-detection, and local image exports without downloading third-party game engines (like Unity, Unreal, or Godot).
- **Programming Languages:** Vanilla HTML5, CSS3, and ES6 JavaScript.
- **Data Storage:** Native browser `localStorage` or embedded single-file SQLite databases (`better-sqlite3`) managed via Node.js to save local user progress, game stats, and high scores.

---

## Development Setup (VS Code & Native macOS Tools)

- **Primary Development Workspace (VS Code):** Manage project directories, organize `index.html`, `style.css`, and `game.js`, and write game logic with built-in syntax highlighting using your existing Visual Studio Code installation.
- **Built-in Local Web Server (macOS Python + VS Code Terminal):** Run macOS's pre-installed Python server without extra software downloads by opening VS Code's integrated terminal `(Ctrl + ~)`, navigating to your project folder (`cd path/to/project`), and executing `python3 -m http.server 8000`. Preview your game live at `http://localhost:8000` in Safari or Chrome.
- **Instant Hot-Reloading (Optional Extension):** Install the free Live Server extension directly from VS Code's internal Marketplace `(Cmd + Shift + X)` to automatically launch a local browser preview that reloads instantly upon saving files.
- **Integrated Visual & Browser Debugging:** Track 2D canvas state matrices, inspect DOM elements, and debug JavaScript functions using browser Developer Tools (`Option + Command + I` in Chrome or Web Inspector in Safari) paired with VS Code's inline error highlighting.
- **Native macOS Fallback Editors:** Edit code without VS Code or external downloads using built-in macOS utilities like TextEdit (configured via *Format > Make Plain Text*) or command-line editors (`nano` or `vim`) inside Terminal.
- **Browser-Based Cloud IDEs:** Access full-featured VS Code development environments remotely in any web browser without local setup using GitHub Codespaces, Replit, JSFiddle, or CodePen.
