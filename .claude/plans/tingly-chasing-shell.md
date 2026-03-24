# Plan: Clone /spa page from apsara-resort.com

## Page Structure (top to bottom)

1. **Hero Banner** — Centered image (~980px), spa massage photo with dark overlay, serif italic title "Apsara Stone Spa", subtitle "A Sanctuary of Relaxation and Rejuvenation". Two decorative white lotus SVGs flanking the image.

2. **Treatments Section** (sand bg `#EEEBE6`) — Left-aligned content (~55% width), right side has large decorative lotus SVGs as subtle background. Contains:
   - "Our Signature Treatments" heading (serif, ~28px)
   - Three category tabs (dark green `#233117` bg, white text):
     - **Holistic Body Massages** — intro text + 3 treatments with prices
     - **Specialized Therapies** — 2 treatments with prices
     - **Foot Therapy & Reflexology** — description + prices
   - Each treatment: bold name, description text, clock icon + pricing

3. **"Your Escape Awaits"** dark section (`#1a1917` bg) — 2-col: text left (white), spa image right (with Apsara Resort logo watermark overlay)

4. **Reservations** — sand bg, email link + Instagram/Facebook icons

## Images
- Hero: `11062b_15aafa54cb5e4400a03853da092014fa~mv2.jpg` (Spa Massage Therapy)
- Escape section: `26781c_c65cc98fe6b347038e4af19e38ed2d19~mv2.jpg` (Mud Spa)

## Implementation
- Single file: `src/app/spa/page.tsx`
- Use ScrollReveal for animations
- Use existing design tokens (font-heading, font-body, font-serif, brand colors)
- Lotus SVG as inline React component
