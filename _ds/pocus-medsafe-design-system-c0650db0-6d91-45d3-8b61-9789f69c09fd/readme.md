# POCUS Medsafe — Design System

> **Ver. Interpretar. Agir.**
> Conhecimento à beira-leito para decisões mais seguras.

POCUS is a professional medical-education brand within the **Medsafe** ecosystem,
focused on **point-of-care ultrasound (POCUS)**. Its purpose is to shorten the
distance between *seeing* an ultrasound image and *making* a safe clinical
decision at the bedside. Every brand experience should move the professional
from exam → reasoning → safe conduct, along a consistent journey:

1. **VER** — find the window, recognize structures, spot the relevant finding.
2. **INTERPRETAR** — relate the image to the patient's context and the exam's limits.
3. **AGIR** — define next steps, priorities and escalation.

The identity fuses Medsafe's institutional credibility with codes drawn from
ultrasonography: the **"O" in POCUS becomes the transducer**, and segmented
arcs evoke the ultrasound beam.

---

## Sources (provided materials)

These shaped the system. Stored under `uploads/` (and parsed into `assets/`):

| File | What it gave us |
|---|---|
| `uploads/Brandbook_POCUS.pdf` (9 pp) | Positioning, voice & tone, **color palette (hex)**, typography rules, art direction, do/don't, signature & clear-space. |
| `uploads/V1_Guia de estilo_Curso POCUS_Medsafe.pdf` (10 pp) | Logo rationale, primary/neutral colors, grafismo, brand architecture (Medsafe → POCUS submark). |
| `uploads/Logos.png` | Primary wordmark + descriptor lockup → cropped into `assets/logo-*`. |
| `uploads/Grafismo.png` | Ultrasound ring / beam graphism → `assets/grafismo-rings.png`, `assets/grafismo-beam.png`. |
| `uploads/Montserrat.zip` | **Not present in the project filesystem** — Montserrat is loaded from Google Fonts instead (see Fonts caveat). |

There is **no product codebase or Figma** — this is a brand-driven system. The
UI kit applies the documented identity to plausible product surfaces.

---

## CONTENT FUNDAMENTALS

**Language:** Brazilian Portuguese (pt-BR). **Personality:** *Precisa, Direta,
Didática, Atual, Segura, Responsável.*

The voice is that of an **experienced preceptor** — technical, close, objective.
It favors **questions, short sentences, and prompts** that drive image-reading and
clinical reasoning.

- **Address:** speaks *to* the professional ("você"), as a mentor would. Confident, never arrogant or overly professorial.
- **Casing:** Sentence case for body and most UI. Section/eyebrow labels use UPPERCASE with wide tracking (e.g. `VISÃO GERAL`). Avoid long passages set entirely in caps.
- **Signature triad:** "Ver. Interpretar. Agir." — short, period-separated, imperative.
- **Calls (real examples):**
  - "Qual janela você escolheria?"
  - "O que este achado muda na conduta?"
  - "Reconheça antes de decidir."
  - "Quando a imagem encontra a clínica."
  - "Qual é o próximo passo seguro?"
- **Golden rule:** provoke reasoning and convey agility **without** fear, sensationalism, or simplifications that compromise safety.
- **Avoid:** arrogant/over-professorial tone, absolute promises of mastery, jargon without didactic purpose, childish tone, encouraging use outside scope or without supervision.
- **Emoji:** none. Not part of the brand.
- **Per-piece hierarchy:** A) one main message (short title) · B) context · C) action (a question or safe next step).

---

## VISUAL FOUNDATIONS

**Color.** A disciplined, near-monochromatic **blue** system. Six named brand colors:
Azul POCUS `#0A1835` (principal), Azul profundo `#13234A`, Azul tecnológico `#3F57A4`
(icons/graphism/nav), Azul clínico `#6F86CF` (data/diagrams/lines), Azul névoa
`#AAB8DE` (light backgrounds/respiro), Branco técnico `#F7F9FC`. **Recommended
proportion: 55% branco técnico · 30% azul POCUS · 10% azuis de apoio · 5% neutros.**
Status colors (success/warning/danger) are intentionally muted and clinical, used
sparingly. *Many colors in one piece is explicitly discouraged.*

**Typography.** **Montserrat** is the single brand family (max two families overall).
Titles are short, Semibold/Bold; body is Regular/Medium, **left-aligned**, with
comfortable leading (1.65). A monospace stack is reserved for clinical
data/timestamps/measurements. Display sizes carry tight tracking (`-0.02em`).

**Spacing & layout.** 4px base scale with **generous breathing room** ("grandes
áreas de respiro"). Compositions are **asymmetric, clean, organized**. High
contrast and strong legibility are mandatory; light backgrounds for didactic
content, dark navy for institutional pieces.

**Backgrounds.** No gratuitous gradients ("gradientes sem função" is a don't).
The signature texture is the **grafismo**: concentric arcs and **segmented lines
inspired by the ultrasound beam**, used to *orient reading and create movement* —
**never as mere decoration**. On navy panels the grafismo appears as a low-opacity,
brightened beam; on light cards as a subtle ring at the edge.

**Cards.** White surface, **hairline border** (`--border-subtle`) + soft, cool,
navy-tinted shadow (`--shadow-xs/sm`); radius `--radius-lg` (12px). Interactive
cards lift 2px with a larger shadow on hover. `tint` (azul névoa wash) for respiro,
`inverse` (navy) for institutional/feature blocks.

**Corner radii.** Restrained and technical — 4–12px for controls/cards, pills only
for badges, switches and progress tracks. Nothing playful or bubbly.

**Borders.** 1px hairlines for separation; 1.5px on inputs/buttons; focus is a
clinical-blue ring (`--shadow-focus`).

**Shadows.** Cool and low-spread, tinted with brand navy `rgba(10,24,53,…)` — never
warm or heavy.

**Motion.** "Agilidade controlada." Standard easing `cubic-bezier(0.2,0,0.1,1)`,
200ms base. Calm fades and short transl(≤2px) lifts; **no bounces**, no infinite
decorative loops. Respects `prefers-reduced-motion`.

**Hover / press.** Hover darkens fills one step (e.g. primary → `--blue-800`) or
washes tints; ghost/secondary gain a tint background. Press nudges `translateY(1px)`.
Links underline on hover (no underline at rest).

**Transparency & blur.** Used sparingly — translucent white chips on navy bars
(`rgba(255,255,255,0.08–0.16)`), and a soft glass play button over the player.

**Imagery vibe.** Clinical images must be high-resolution, **anonymized**, and used
with purpose (never decorative). Marca must keep contrast over any image. Where real
exam stills are unavailable, use branded navy + grafismo placeholders (as the UI kit does).

---

## ICONOGRAPHY

The brandbook calls for **"ícones simples e técnicos"** — simple, technical line
icons. The provided materials contain **no icon font or SVG icon set**, so the
system standardizes on **[Lucide](https://lucide.dev)** (loaded from CDN): an
open-source line-icon set with a consistent **2px stroke** and clean geometry that
matches the brand's technical character. *Substitution flagged — see Caveats.*

- **Format:** inline SVG via the Lucide UMD build; helper in `ui_kits/plataforma/Icon.jsx` (`<Icon name="Play" />`).
- **Color:** icons take `currentColor`; default to Azul tecnológico `#3F57A4` on light, white on navy.
- **Emoji / unicode as icons:** never.
- **Brand marks (real assets, in `assets/`):**
  - `logo-pocus-primary.png` — navy wordmark on white.
  - `logo-pocus-primary-transparent.png` — same, transparent background.
  - `logo-pocus-white.png` — white knockout for navy backgrounds.
  - `logo-pocus-descriptor.png` / `-white.png` — lockup with "Point-of-Care Ultrasound".
  - `grafismo-rings.png` — concentric ultrasound rings.
  - `grafismo-beam.png` — segmented elliptical beam.
- **Clear space:** ≥ the height of the Medsafe symbol. **Min size:** 28 mm print / 140 px screen.
- **Don'ts:** never recolor/distort the mark, redraw the symbol or the "O", or place the mark on low-contrast imagery.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper for Claude Code.

**`tokens/`** (each `@import`ed by `styles.css`)
- `fonts.css` — Montserrat via Google Fonts.
- `colors.css` — brand palette, blue & neutral scales, status, semantic aliases.
- `typography.css` — families, scale, weights, leading, tracking.
- `spacing.css` — spacing, radii, borders, shadows, layout, motion.
- `base.css` — light element defaults & helpers (`.pocus`, `.pocus-eyebrow`, `.pocus-link`, `.pocus-prose`).

**`components/`** (React primitives — `window.POCUSMedsafeDesignSystem_c0650d`)
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Input**, **Select**, **Checkbox**, **Radio**, **Switch**, **Field**
- `feedback/` — **Badge**, **Tag**, **Alert**
- `display/` — **Card**, **Avatar**, **Stat**
- `navigation/` — **Tabs**, **Progress**

**`ui_kits/`**
- `plataforma/` — course-platform recreation (Login · Dashboard · Lesson). See its `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.

**`assets/`** — logos & grafismo (listed above).

---

## CAVEATS

- **Fonts:** `Montserrat.zip` was not present in the project filesystem, so Montserrat
  is loaded from **Google Fonts** (it *is* the brand font — no design substitution,
  just a delivery method). For self-hosting, drop the `.ttf`s into `tokens/` and swap
  the `@import` in `tokens/fonts.css` for local `@font-face` rules.
- **Icons:** Lucide is a **substitution** for an unspecified icon set — chosen to match
  the "simple, technical" brief. Swap if the brand later standardizes on a specific set.
- **Clinical imagery:** placeholders only (branded blocks). Replace with real,
  anonymized, high-res exam images.
