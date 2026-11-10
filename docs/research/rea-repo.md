# The REA Repo

## Overview & Core Purpose

- **Agent-Oriented Reverse Engineering:** REA (Reverse Engineer Anything) is an open-source framework (`morluto/rea`) that enables AI coding agents to analyze compiled executables, mobile packages, and web/Electron apps without requiring source code.
  - **BASICALLY: AI Tool Inspector:** REA is a tool that lets AI coding assistants peek inside finished apps, mobile packages, and games to figure out how they were made without needing the original source code.
- **Dual Interface (MCP & CLI):** Exposes its capabilities to AI agents via a Model Context Protocol (MCP) server (`npx rea-agents setup`) and provides a standalone command-line tool (`rea` / `npx rea-agents@latest`) for human developers.
  - **BASICALLY: Works for Both AI and Humans:** You can use it yourself from a standard command terminal, or connect it directly to AI tools (like Claude, Cursor, or Codex) so the AI can run inspections automatically.

---

## How REA Works

- **Target Inspection:** The user asks an AI agent (e.g., Claude Code, Cursor, Codex, Gemini CLI) to investigate a specific app, binary, or directory.
  - a. **BASICALLY:** You ask your AI assistant to check out a specific game, app, or folder on your computer.
- **MCP Tool Execution:** The agent calls REA's MCP tools to static-analyze the target—unpacking files, reading metadata, or disassembling code.
  - a. **BASICALLY: REA Unpacks the App:** The AI uses REA to automatically open up the application's files, read hidden settings, and scan the underlying code structure.
- **Evidence Extraction:** REA returns raw, verifiable findings accompanied by concrete evidence (module imports, decompiled functions, assembly instructions, or file offsets).
  - a. **BASICALLY: REA Collects Proof:** It gathers raw facts—such as file lists, internal functions, and computer instructions—and hands that evidence back to the AI.
- **Behavior Analysis & Code Generation:** The AI agent reads the evidence payload to explain how the software works, trace specific logic (e.g., audio panning algorithms or state changes), or write new code implementing similar features.
  - a. **BASICALLY: AI Explains or Re-creates It:** The AI reads that evidence to explain how a specific feature works (like a game's audio or physics logic) or to help you code a similar feature yourself.

---

## Key Capabilities & Supported Technologies

- **JavaScript & Electron Applications:** Extracts `.asar` archives, maps JavaScript modules, isolates Electron IPC boundaries, and inspects front-end bundle dependencies.
  - a. **BASICALLY: Web & Desktop Apps:** Easily unzips and inspects web-based apps, Electron software (like Discord or VS Code), and JavaScript code packages.
- **Native Binaries:** Built-in static parsing for ELF (Linux), PE (Windows), thin Mach-O (macOS), and GPU code objects.
  - a. **BASICALLY: Standard Computer Programs:** Reads regular executable files across Windows, Mac, and Linux systems.
- **Managed Assemblies & Android:** Analyzes .NET assembly metadata/CIL instructions and Android APK structures.
  - a. **BASICALLY: Mobile & Managed Apps:** Scans Android app files (`.apk`) and Windows .NET software structures.
- **Decompiler Toolchain Integration:** Bridges directly with external reverse-engineering suites—including Ghidra, JADX, Rizin, IDA, Hopper, and GNU objdump—for deep analysis.
  - a. **BASICALLY: Connects with Pro Analysis Tools:** Bridges directly with heavy-duty reverse-engineering software (like Ghidra or JADX) to translate raw computer code into human-readable instructions.

---

## Limitations & System Requirements

- **Manual External Dependencies:** REA does not auto-install third-party decompilers (e.g., Ghidra, JADX, Rizin); users must install and configure those providers locally for full native analysis.
  - **BASICALLY: Doesn't Install Extra Tools Automatically:** REA can't read every type of app by itself. For complex desktop or mobile apps, you have to download and set up free external helper software (like Ghidra or JADX) on your computer first.
- **OS Prerequisites:** Linux environments require a `procps`-compatible `ps` command on the system PATH to perform process ownership and security verification during dynamic checks.
  - **BASICALLY: Can Overload the AI's Memory:** Big programs create mountains of data. Trying to analyze a large app all at once can easily overwhelm the AI's memory limits, causing it to stop processing or cut off mid-task.
- **Context Window Boundaries:** Large binary disassemblies or raw memory dumps can quickly exhaust an AI agent's context window size or trigger API token limits.
  - **BASICALLY: Can't Pass Heavy Security or Encryption:** If an app is locked down with strict copy protection, anti-cheat, or hidden code, REA can't unlock it on its own. You have to manually un-encrypt or unpack the file first.
- **Obfuscation & DRM Controls:** Heavily packed executables, anti-debugging mechanisms, or encrypted binaries still require manual decryption or specialized unpacking scripts before REA can effectively analyze them.
  - **BASICALLY: Needs Certain Computer Setup Rules:** It relies on standard background system utilities (especially on Linux) to safely double-check running programs, so it won't work properly on bare-bones environments missing standard tools.
