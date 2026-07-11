# AXION WEBSITE BUILD — CLAUDE CODE LOOP PROMPT

Paste this whole file into Claude Code as your instruction (or save it as `CLAUDE.md` /
`PROMPT.md` in the project root and reference it at the start of each session). It is
written to be run **repeatedly** — each run picks up the next unfinished page from
`PROGRESS.md` and completes it, so you can just keep saying "continue" until the site
is done.

---

## 0. Source material (read these first, every time)

Before writing anything, read:

- `Axion_Gulf_Full_Website_Brief_1.docx` — the sitemap, URL slugs, SEO titles/meta
  descriptions, and page-by-page content brief. This is the primary source of truth
  for structure and copy.
- `Company_profile.pdf` — company positioning, vision/mission, core strengths, "360°
  Solution Model," customer-centric pillars.
- `20260501_Web_content.docx` — an alternate content pass with different framing
  (industry-vertical pages: Education / Manufacturing / Innovation-Startups /
  Enterprise, plus the "Operational Readiness" trust narrative and the Le Parfait
  Australia sister-company detail).

**These two content docs are not fully consistent with each other or with the live
site's actual scope.** Do not silently merge them. When they conflict (e.g. product
category naming, how "Australian-led" is described, whether industry-vertical pages
exist), note the conflict in `PROGRESS.md` under "Open questions for client" and pick
the version that matches the brief doc's sitemap (that one has the finished URL
structure and SEO metadata), unless a section only exists in the other doc — in that
case use it as supplementary content, not a replacement.

## 1. Business reality — read this before writing any solutions copy

There is no in-house-vs-outsourced distinction to draw — Axion sources hardware
externally for 3D printing too (Bambu Lab, Creality, ELEGOO, CreatBot, Markforged),
so "in-house" vs. "partner-delivered" is not a real line. **The real distinction is
timeline: what's live today vs. what's rolling out.**

**Live now — the flagship.** 3D printing (FDM/resin/industrial), metal and polymer
printing, printer maintenance, and the axion3d.shop storefront are fully
operational today. This is the flagship and should read as the most detailed, most
confident, most specific content on the whole site — real brands, real turnaround
times, real support process. Give it top billing: first mention in the hero, the
most prominent CTA on every page it's relevant to, and the most built-out solution
sub-page.

**CNC routing and laser cutting/engraving are part of the same Advanced
Manufacturing capability as 3D printing.** Present all three together as one
confident, active manufacturing offering — do not separate CNC/laser out as a
lesser or "future" tier. They belong in the same paragraph/section as 3D printing,
not grouped with the "rolling out" categories below.

**Rolling out — write with full confidence, just don't fabricate specifics.**
Robotics & Automation, Drone Solutions, IoT Solutions, AI-Based Technologies, and
Display Solutions are being brought to the UAE market through Axion's work with
global technology leaders. Write these pages with the same polish and confidence
as everything else — from the reader's point of view, the distinction should be
invisible. The only real constraint:

- Never invent specific product SKUs, brand names, case studies, client names, or
  performance numbers for these categories that aren't in the source docs.
- If asked to write a testimonial, case study, or statistic for a category with no
  real source data, stop and flag it in `PROGRESS.md` instead of fabricating one.

This site is a **supporting / authority site for axion3d.shop**, not a standalone
e-commerce store. Its job is to make Axion look like a credible, established
industrial technology company that axion3d.shop's actual product/checkout flow can
sit underneath — CTAs into axion3d.shop are appropriate throughout, and should be
the single most prominent conversion path wherever 3D printing comes up, since
it's the live transactional path for the flagship service.

## 2. Design direction

**Brand assets — use these, they're authoritative.** `Logo.png` (full color, for
light backgrounds) and `Logo_White.png` (for dark backgrounds/sections) are
included alongside this prompt — copy both into the project (e.g.
`public/brand/`) before building anything else. Colors, type, and usage rules
below are from the official `Brand Identity Standard` doc and take precedence
over anything sampled from the logo files or guessed from theme references.

**Official color specification:**

| Color | Hex | Usage |
|---|---|---|
| Tech Blue (Deep) | `#005BC5` | primary brand color |
| Innovation Teal | `#00D2E0` | secondary/gradient accent |
| Slate Charcoal | `#333333` | wordmark, body text on light backgrounds |

The red/maroon logo rendering that appears on the company profile PDF's cover and
"Who We Are" pages is outdated — the Brand Identity Standard and the actual logo
files agree on Tech Blue/Innovation Teal/Slate Charcoal, so treat that as settled,
not an open question.

**Typography:**
- Company name "AXION": Montserrat Bold or Inter ExtraBold — this typeface
  pairing should extend to the site's heading/display type, not just the logo
  lockup, to keep brand and site consistent.
- Tagline "Innovation · Technology · Solutions": Montserrat Medium, all caps,
  +200 tracking.
- Body copy: a clean, legible sans that pairs well with Montserrat/Inter (e.g.
  Inter or the same family at a lighter weight) — do not introduce an unrelated
  third typeface.

**Logo usage rules — follow exactly:**
- Full logo (icon + text) is the preferred version, used on white/light-grey
  backgrounds; use `Logo_White.png` (reversed) on Tech Blue or dark backgrounds.
- Maintain clear space around the logo equal to the width of the letter "N" —
  no text or graphics inside that margin.
- Minimum size: 180px wide for the full logo on web; 32×32px if using the icon
  alone (e.g. favicon).
- Do not rotate the icon/arrow, recolor the arrow independently of the icon, or
  stretch/distort the logo's proportions at any point on the site.

Build the site's palette around Tech Blue and Innovation Teal — use the gradient
sparingly (logo, key accents, maybe one hero treatment) rather than washing whole
sections in it, and pair it with plenty of neutral white/near-white and Slate
Charcoal for contrast sections and body text.

Goal: read as a serious, established industrial technology company — closer to
Formlabs / Ouster / Boston Dynamics than to a generic SaaS landing page or a stock
WordPress theme. **Primary structural/mood reference: Ninetheme's "Quadron"
drone/UAV theme.** It's a paid commercial theme (ThemeForest) — do not fetch,
scrape, or clone its actual code/assets. Instead, rebuild these observed patterns
from scratch with Axion's own content, photography, and the official brand colors
above (not Quadron's own indigo-navy, which was only a stand-in before the brand
standard was available):
- **Wordmark-as-graphic-device:** on the homepage hero, treat "AXION" (or a key
  phrase) at oversized scale as a background/behind-the-product graphic element,
  not just a headline — product photography overlaps or sits in front of it.
- **Icon-and-label service grid:** a clean 2×3 (or 3×2) grid of line icons + short
  labels for the six services from the brief's "Services in Detail" section
  (Consultation, Sourcing, Support, Project Management, Training, Ongoing
  Partnership), numbered, generous whitespace between cells, minimal body copy.
- **Numbered alternating feature blocks:** solid panel in Tech Blue or Innovation
  Teal containing a large number + heading + body text on one side, full-bleed
  product photography on the other, alternating sides down the page. Use this
  exact pattern for the "Our Services" page's 6-item timeline and for the
  Solutions category breakdown.
- **Product photography, not lifestyle photography:** knocked-out product shots
  (3D printers, prints in progress, CNC output) on plain white or dark
  backgrounds — no stock "person using laptop in office" imagery. Where real
  product photography isn't available yet: generate ultra-realistic,
  photographic-style images relevant to Axion's actual business — 3D printers in
  operation, prints in progress, finished metal/polymer printed parts, CNC
  machining, laser engraving/cutting, a plausible UAE-relevant workshop or
  industrial setting — using whatever image-generation tool is available in this
  environment. Style them in the same register as the Quadron reference:
  clean/knocked-out or softly-lit single-subject product photography, not
  lifestyle stock, not illustration or cartoon style, not generic "person using
  laptop in office" imagery. These are placeholders standing in until the client
  supplies real photography, so save them under a clearly named path (e.g.
  `public/images/placeholder-*.jpg`) so they're easy to find and swap out later —
  note this in `PROGRESS.md` per page. If no image-generation tool is available in
  this environment, say so explicitly rather than silently falling back to
  generic stock photography.
- **Small UI details worth reusing:** a circular "Discover →" arrow link style for
  secondary CTAs, a thin horizontal rule beside eyebrow/label text, a compact
  spec/stat strip (small icon + number pairs) under a hero.

Nicepage's "Mobile application development" template remains a secondary,
lighter-weight reference — only for the general idea of an oversized hero +
device-mockup pairing and a dark full-bleed section break — but do not carry over
its purple palette or consumer-app copy tone. Quadron is the dominant reference.

Before writing any code, produce a short design plan and self-critique it:
- **Color:** use the official spec values (Tech Blue `#005BC5`, Innovation Teal
  `#00D2E0`, Slate Charcoal `#333333`) plus 2–3 supporting neutrals (white/
  near-white, a light grey for section separation). Don't substitute a generic
  SaaS blue/purple gradient or invent an unrelated accent.
- **Type:** a display face with some engineering/technical character used with
  restraint, a clean body face, a utility/mono face for stats, specs, and labels.
- **Layout:** describe the hero concept and section rhythm in one or two sentences
  before building it. The hero should open with the most characteristic real thing
  about Axion — not a generic "big number + gradient" template unless you can
  justify it's the best option here.
- **Signature element:** pick one memorable device (e.g. how the "360° Solution
  Model" or the four solution categories are visualized) and spend your design
  boldness there; keep the rest disciplined.

Build to a quality floor without being asked: responsive down to mobile, visible
keyboard focus states, reduced-motion respected, real alt text, semantic HTML.
Motion should be deliberate (a page-load sequence or scroll reveal), not scattered
hover effects everywhere.

## 3. Tech stack

Unless the client has already specified otherwise, build with **Next.js (App
Router) + TypeScript + Tailwind CSS**, statically exportable, so it can be handed
to a developer for WordPress/Bridge integration or deployed standalone. Keep
components modular per section (Hero, SolutionCard, CounterStrip, FAQAccordion,
ContactForm, etc.) so later edits are cheap. Use real `next/image` optimization
for any imagery.

Do not use WordPress/PHP — the brief's WordPress instructions (Fixes 1–9, menu
structure, etc.) describe what the *current* live site needs, and are content/
structure requirements to satisfy, not a mandate to build in WordPress.

## 4. The loop

1. Read `PROGRESS.md` (create it if it doesn't exist, seeded with the 12-row
   sitemap table from the brief doc: Home, About Us, Our Services, Solutions
   Overview, the 4 solution sub-pages, FAQ, Contact, Blog Archive, Privacy Policy).
2. Pick the first page marked `[ ]` not done.
3. Re-read the relevant section of the source docs for that page only.
4. Build the page: layout, real copy (adapted/tightened from the brief, not
   copy-pasted verbatim where the brief itself says "summary for developer
   reference"), metadata (`<title>`, meta description from the brief's SEO table),
   and any needed shared components.
5. Self-critique against Section 1 (business-reality honesty) and Section 2
   (design distinctiveness) before marking it done. If you notice the page you
   just built could describe any AI-generated template, revise it.
6. Mark the page `[x]` in `PROGRESS.md` with a one-line note of what was built and
   any open questions for the client.
7. Stop and summarize what you just built. Do **not** silently continue to the
   next page in the same turn — let the user review, then start the loop again
   on the next message.

Global elements (nav with the Solutions dropdown, footer with quick links/social/
privacy-policy link, contact details, copyright line) should be built once as
shared components during the Home page pass and reused everywhere, matching Fixes
1–9 in the brief exactly (site title/tagline, footer copyright text, real social
URLs or none at all, no dead newsletter form unless email backend is connected).

## 5. Guardrails

- Never invent phone numbers, emails, or addresses — use only what's in the source
  docs (Sharjah HQ address, +971 52 582 8490 / +971 50 108 3257, sales1@axiongulf.com).
- Never fabricate client names, testimonials, or statistics not present in the
  source docs.
- Flag, don't silently resolve, any factual conflict between the two content docs.
- Keep 3D printing/axion3d.shop as the most detailed, most confident content on
  the site; keep other solution categories honest per Section 1.
- **Client decision (2026-07-03): do not name specific 3D printer brands (Bambu
  Lab, Creality, ELEGOO, CreatBot, Markforged) or state specific delivery-time
  figures (e.g. "3–5 business days," "2–4 weeks") anywhere on the site**, even
  though both appear in the source FAQ content. When adapting FAQ content that
  references either, rewrite around them (e.g. "a curated range of trusted 3D
  printing brands covering desktop through industrial tiers" instead of naming
  them; "we'll confirm a clear lead time before you order" instead of stating
  day/week figures) rather than dropping the question entirely. Quote/response
  turnaround (e.g. "48 hours" for a quote) is not a delivery-time figure and is
  fine to keep.
