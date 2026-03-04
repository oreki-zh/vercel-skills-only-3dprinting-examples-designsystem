# PrintMind Design System

A comprehensive design system for **PrintMind** — an AI-powered 3D printing management SaaS platform.

![Dark Mode First](https://img.shields.io/badge/Theme-Dark_Mode_First-0B0F19?style=flat-square&labelColor=111827)
![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG_AAA-22C55E?style=flat-square&labelColor=111827)
![4pt Grid](https://img.shields.io/badge/Grid-4pt_System-06B6D4?style=flat-square&labelColor=111827)

## Overview

Built for **data-heavy dashboards**, **real-time telemetry**, and **precision-critical manufacturing workflows**.

### What's Included

- **Global Tokens** — Color palette, typography (Space Grotesk + DM Sans + JetBrains Mono), 4pt spacing grid, elevation & z-index scales
- **Core Components** — Action Buttons (Primary/Secondary/Danger), Status Badges (7 variants with animations), Data Input Fields (with AI suggestion indicators), Telemetry Cards
- **Interactive Preview** — Live HTML/CSS/JS website showcasing all tokens and components

## Quick Start

```bash
# Clone the repo
git clone https://github.com/<your-username>/vercel-skills-only-3dprinting-examples-designsystem.git

# Open the preview
open index.html
# or serve locally
python3 -m http.server 8080
```

Then visit `http://localhost:8080` to explore the design system.

## Design Principles

| Principle | Implementation |
|---|---|
| **Dark Mode First** | Deep blue-black (`#0B0F19`) base, OLED-efficient, reduced eye strain |
| **Industrial Semantics** | 7 status colors mapping to 3D printer states (Heating, Printing, Error…) |
| **Data Density** | 4pt grid, JetBrains Mono for telemetry, tabular-nums for live readouts |
| **AI Clarity** | Dashed cyan borders + sparkle icons distinguish AI suggestions from user input |
| **Safety First** | Emergency Stop fires immediately; other destructive actions require confirmation |

## Tech Stack

- Pure **HTML / CSS / JavaScript** — no framework dependencies
- **CSS Custom Properties** — all tokens as `--variables`, ready for React/Tailwind adoption
- **Google Fonts** — Space Grotesk, DM Sans, JetBrains Mono

## Skills Used

This design system was generated using:
- [`ui-ux-pro-max`](https://github.com/anthropics/courses) — Design intelligence with 50+ styles, 97 color palettes, 57 font pairings
- [`web-design-guidelines`](https://github.com/vercel-labs/web-interface-guidelines) — Vercel's Web Interface Guidelines for accessibility and interaction patterns

## License

MIT
