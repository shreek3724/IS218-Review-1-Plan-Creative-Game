# Comparing Two Rough Game Concepts

## Concept A - Pattern Matching Games - Painting Recreation

### i. Core Concept

1. Painting recreation game. The game will provide the user with famous paintings for the user to recreate in a timed (competitive), or untimed round (non-competitive) on a digital canvas.
2. The user will have a paint palette on their screen, which they can use to mix colors like a real artist would, and use different brushes to get different effects.
3. Once completed, the game will score how accurate the user's painting recreation was, scoring on color accuracy, and composition.
4. Users can then save their paintings on their dashboard and account, download them, and see their scores.

### ii. Feasibility

1. **Engine & Rendering:** Uses native HTML5 Canvas 2D API (`CanvasRenderingContext2D`), keeping browser client execution lightweight without third-party game engine overhead.
2. **Algorithmic Efficiency:** Downsamples player and target reference canvases to a normalized $100 \times 100$ pixel grid. Pixel color distance ($\Delta E$) and grid composition checks compute in under 50ms ($O(N)$ array operations), preventing UI freeze during scoring.
3. **Asset Availability:** Utilizes public-domain classic artworks (Starry Night, Mona Lisa, The Great Wave) to avoid copyright/licensing constraints.
4. **Data Storage & Export:** Native `HTMLCanvasElement.toDataURL()` handles client-side PNG downloads directly in browser memory and formats compressed payload strings for API transmission.
5. **Risk Mitigation:** Initial build limits palette options to standard color pickers and fixed brush opacity before layering advanced HSV color-blending routines.

### iii. Engagement

1. Engages both casual and competitive users due to timed and untimed game modes with allow for both low-pressure play, and those driven by intrinsic motivation.
2. It engages users by giving them a goal to their creativity, and motivation to pick up the arts in an easy-to-access format. Having a timed vs untimed visual gallery shows users how they've improved, and can event translate skills back into real-world arts.

---

## Concept B - Logic Game - Art Conservation

### i. Core Concept

Players act as an art conservator solving a deductive matrix puzzle to determine the correct chemical solvent sequence needed to remove dirt layers without destroying the underlying historical painting.

### ii. Mechanics Overview

Players do the swabbing, and mixing of components themselves as they work through the painting restoration process. Each painting has multiple layers, and each layer has its own mechanic, and the restoration strategy only applies to specific areas of that layer- going out of that area damages the painting, however they also have to figure that out based on clues. At the end, players can see their past restorations on their dashboard, and see their progress.

### v. Detailed Mechanics

1. **Clue Matrix Per Level:** Read chemical/historical clue notes (e.g., "Layer 2 reacts to acidic solvents," "Oil pigment cannot touch alcohol base") per layer, and see which steps you've completed to restoring the painting.
2. **Grid Application:** Select tools (swabs, solvents, heat lamps), or even repainting sections, and apply them to grid sectors of a darkened canvas to safely strip damaged layers.
3. **Damage vs. Reveal:** Incorrect solvent picks damage the painting and lower final restoration quality scores.
4. **Timed Challenge vs Casual Untimed Modes:** Players can play an untimed round, or a timed round to make player more casual. Timed rounds grant score multipliers for speed and low solvent error rates. Players can choose an untimed, low-stress restoration session or a timed mode for personal focus, with scoring based purely on individual canvas health and clue accuracy.
5. **Algorithmic Rating:** Score is calculated based on Canvas Integrity ($60\%$) + Clue Deduction Accuracy ($40\%$) yielding an overall accuracy score ($0-100\%$).
6. **Visual Export:** One-click action allowing players to download their restored artwork as a PNG/JPEG directly from the browser canvas.
7. **Result Persistence:** Transmits score metrics and restored painting state data to backend storage attached to the player's account.

### vi. Feasibility

1. **Engine & Rendering:** Built using DOM matrix grids or HTML5 Canvas 2D API (`CanvasRenderingContext2D`), toggling layer opacity and rendering revealed artwork slices.
2. **Algorithmic Efficiency:** Driven by a lightweight state array matrix (`grid[x][y] = {layer, health, pigment}`). Clue verification runs in $O(1)$ constant time per click, ensuring smooth performance with zero UI lag.
3. **Asset Availability:** Leverages public-domain historical artworks layered with digital aging and grime filters.
4. **Data Storage & Export:** Native `HTMLCanvasElement.toDataURL()` handles client-side PNG downloads directly and formats compressed payload strings for API transmission.

### vii. Engagement

This game with engage both casual and competitive players by involving logic, and introducing them to a new field of work they may never have heard of, or may never get the chance to do, engaging them in a new world. The game combines arts, precision, and critical thinking skills, while teaching a new field.

---

## Winning Concept

**Paint Restoration Game**

This game was the winning concept because it engages users in a completely new field of arts, and engages logical thinking skills with precision skills, while allowing for more and less challenging play. It allows for learning of new skills, while posing a unique situation, through logical clue deduction and precision swabbing in a relaxing, self-paced environment.

---

## Target Audience for Winning Concept (Concept B)

The target audience for this game are cozy and casual logic game players, who want to play low-stress, and intrinsically motivated games that are methodical and engage logic, while doing calming tasks, and tracking progress over time. The audience is in their teen to young adulthood years, and are looking for low-commitment games that are easy to get involved in deeply.
