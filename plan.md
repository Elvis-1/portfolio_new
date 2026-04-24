# Portfolio Replication Plan

## Objective
Create a modern Next.js portfolio website that mirrors the Figma template structure while using your resume details from `elvis_flutter_engineer.pdf`.

## Assumptions
- The project will use Next.js and modern React libraries.
- The Figma wireframe is a personal portfolio layout with a hero section, experience/projects/skills blocks, and contact CTA.
- Resume content will be distilled into concise web-friendly sections.

## Color Palette
- Primary: `#0B1D3A` — deep navy for strong headings and body text.
- Accent: `#4F7DFF` — bright blue for buttons, links, and highlights.
- Surface: `#09111F` — dark page background for a modern portfolio feel.
- Card: `#112740` — rich blue surface for content cards.
- Border: `#2C4B7D` — subtle blue border for section separation.
- Muted: `#A0B4D3` — light blue-gray for secondary text.

> Note: colors are being applied consistently in Part 1 using the reference-style palette.

## Tech Stack
- Next.js (latest stable version)
- React 18+
- Tailwind CSS or styled-components / Stitches for styling
- Framer Motion for subtle animation
- React Hook Form for contact form handling (if a form is included)
- SWR or React Query for any dynamic content/data fetching
- TypeScript for type safety

## Page Structure
1. `Hero` / landing section
   - Name: Elvis Aisosa Igiebor
   - Title: Flutter Software Engineer
   - Short tagline / summary
   - Primary CTA buttons: `Contact` and `View projects`

2. `About` section
   - Professional summary from resume
   - Location: Ajah, Lekki, Nigeria
   - Contact info: phone, email, LinkedIn, GitHub

3. `Experience` section
   - Polaris Digital Bank (Vulte 3.0)
   - Craftytech (MoneySwap app)
   - Calm Global Information Technologies (African Proverbs)
   - Reelcruit inc (ADDAD media app)
   - BuzyDev Technologies Ltd (Mr. Empowerment, Hostengines, Bell Global Express, LearnIt)
   - Each role: title, company, location, date range, bullet-style achievements

4. `Projects` section
   - Featured apps with short descriptions
   - Example items: African Proverbs, Vulte, MoneySwap, Reachme Socials, Mr. Empowerment, Bell Global Express, LearnIt, Hostengines
   - Add links to Google Play and Apple App Store listings for published apps

5. `Skills` section
   - Technical skills: Dart, Flutter, mobile UI/UX, REST APIs, Git, Agile, SDLC, problem-solving
   - Leadership skills: mentoring, collaboration, communication, strategic planning

6. `Education` section
   - BSc Engineering, University of Benin (2013–2018)
   - Senior School Certificate, Testimony Group of School (1999–2004)
   - Training/certifications: Flutter & Dart courses, OKR course, Python by Meta, PHP/Web/SQL coursework

7. `Contact` section
   - Email: `igieborelvis@gmail.com`
   - Phone: `+234 8061464092`
   - WhatsApp chat link for instant messaging
   - Social links: LinkedIn, GitHub
   - Optional contact form

## Content Mapping
- Use the resume text as a source of truth, but shorten it for web readability.
- Prefer bullet lists and short paragraphs.
- Group experience by role and highlight achievements rather than full resume paragraphs.

## Data Model
Create a data file or module to store content separately from presentation.

Example structure:
- `data/hero.ts`
- `data/about.ts`
- `data/experience.ts`
- `data/projects.ts`
- `data/skills.ts`
- `data/education.ts`
- `data/contact.ts`

This makes future updates easier and separates content from layout.

## Implementation Milestones

### Part 1 — Setup and Core Branding
- Scaffold the Next.js app and install the chosen styling libraries.
- Configure TypeScript, ESLint, and basic page routing.
- Create the shared layout, global styles, and site metadata.
- Apply the reference palette to the brand theme and section styling.
- Build the `Hero` and `About` sections with your name, title, summary, and contact links.

Success criteria:
- Next.js app runs locally without errors.
- Global styling is applied and responsive layout works.
- Hero and About sections display real resume content and look polished on desktop/mobile.
- The Part 1 design uses the defined palette consistently across buttons, cards, and text.

### Part 2 — Experience and Projects
- Create the resume-driven data model for experience and project content.
- Build `Experience` section cards or timeline components.
- Build `Projects` section with featured app cards and short descriptions.
- Add data-driven rendering so future updates are easy.

Success criteria:
- Experience and Projects sections render from structured data.
- Live app project cards include direct Play Store and App Store links where available.
- Section styles match the portfolio template look/feel.
- Information is easy to scan and mobile-friendly.

### Part 3 — Skills, Education, Contact
- Add the `Skills` section with technical and leadership categories.
- Add the `Education` section, including training and certifications.
- Add the `Contact` section with email, phone, LinkedIn, GitHub, and optional form.

Success criteria:
- Skills, Education and Contact sections appear complete and clearly organized.
- Contact links are functional and include quick chat/email options.
- Optional contact form validates input and displays success/failure states if included.

> Status: Part 3 complete. Skills, Education, and Contact sections are implemented and rendered from structured data, including a WhatsApp chat option and email CTA.

### Part 4 — Polish and Final Review
- Add polished animations and refined spacing for a finished feel.
- Ensure the page is fully responsive on mobile, tablet, and desktop.
- Review copy, spacing, and visual hierarchy.
- Fix accessibility issues and test layout stability.

Success criteria:
- The site feels finished with smooth animations and consistent spacing.
- It passes basic responsiveness and accessibility checks.
- The portfolio content is polished and ready for deployment.

> Status: Part 4 complete. Final polish and review touches were added to the page layout, navigation, and section transitions.

## Notes
- The current Figma export attempt failed due to an invalid token, so the page design is inferred from a typical portfolio layout.
- Once a valid Figma source or screenshot is available, update the section order and styling details to match exactly.

## Progress
- Part 1 (Setup and Core Branding) is complete: Next.js scaffold created, dependencies installed, Hero and About sections implemented, and the project builds successfully.
- Part 2 (Experience and Projects) is complete: data-driven sections built, project cards rendered, and the app still builds and lints successfully.

## Deliverable
A single-page portfolio in Next.js with modern styling and your resume-driven content, arranged into the sections above.

## Phasal Plan
A concise, phase-by-phase implementation plan with goals, tasks, deliverables, and rough timelines. Each phase ends with clear acceptance criteria.

### Phase 0 — Content Audit (0.5 day)
- Goal: Collect and normalize existing content and assets.
- Tasks: Review `app/page.tsx` and all files under `data/` (`siteContent.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `contact.ts`, `education.ts`). Identify missing screenshots, links, and metrics.
- Deliverable: Content inventory (CSV/MD list) mapping each page section to source files and missing items.
- Acceptance: Inventory completed and reviewed.

### Phase 1 — Brand & Hero Rewrite (0.5–1 day)
- Goal: Reposition headline from "Flutter Engineer" to "Software Engineer • CTO — IFNOTGOD TECH LTD" and craft a concise hero summary emphasizing mobile, web, and AI-driven delivery.
- Tasks: Draft 3 hero variants; choose one; update `data/siteContent.ts` and `app/page.tsx` copy.
- Deliverable: New hero copy and short summary placed in `data/siteContent.ts`.
- Acceptance: Updated hero renders correctly and passes copy review.

### Phase 2 — Experience & Project Case Studies (1–2 days)
- Goal: Expand projects and experience into concise case studies (mobile vs web) with metrics and links.
- Tasks: For each selected project, add: role, platforms, tech stack, AI tooling used, timeline, outcome/metrics, and links. Separate into "Selected Mobile Projects" and "Selected Web Projects" in `data/projects.ts`.
- Deliverable: 3–6 enhanced case studies and updated project cards/components.
- Acceptance: Case studies render from data, include at least one screenshot/link, and show measurable outcomes.

### Phase 3 — CTO & Leadership Section (0.5–1 day)
- Goal: Add a dedicated section for IFNOTGOD TECH LTD describing responsibilities, team impact, and leadership highlights.
- Tasks: Draft company summary, leadership bullets, hiring/mentoring highlights, and product outcomes. Add to `data/siteContent.ts` or `data/experience.ts` as appropriate.
- Deliverable: New CTO/Leadership section added to the site with short bullets and optional links to company products.
- Acceptance: Section is discoverable from the hero and displays responsibilities and 2–3 impact metrics.

### Phase 4 — Skills, AI Tooling & Workflow (0.5 day)
- Goal: Reorganize `data/skills.ts` to surface Mobile, Web, Backend, DevOps, and AI/tooling categories; emphasize AI-enabled delivery workflows.
- Tasks: Create grouped lists, call out LLMs, prompt engineering, automation scripts, and CI techniques used to accelerate delivery.
- Deliverable: Updated `data/skills.ts` and UI grouping on the Skills section.
- Acceptance: Skills show grouped categories and a short blurb about AI-assisted development.

### Phase 5 — Visuals & Assets (1 day)
- Goal: Gather and add screenshots, short GIFs, architecture diagrams, and repo/demo links for each case study.
- Tasks: Create an `assets/case-studies/` list and reference files from `data/projects.ts`; add lightbox or carousel UI considerations.
- Deliverable: Asset manifest and updated project cards referencing assets.
- Acceptance: At least one visual per featured project and working lightbox/carousel on project pages.

### Phase 6 — QA, Polish & PR (0.5–1 day)
- Goal: Final proofreading, responsive checks, accessibility fixes, and prepare a single PR with documented changes.
- Tasks: Run linting, manual mobile checks, accessibility audits (aria, color contrast), and finalize copy.
- Deliverable: Pull request with changes, CHANGELOG notes, and instructions for deployment.
- Acceptance: PR passes local build, lint, and basic accessibility checks; content owner approves copy.

### Optional Phase 7 — Case Study Deep Dives & SEO (1–2 days)
- Goal: Create dedicated pages for 2–3 flagship projects with deeper technical write-ups, architecture diagrams, and SEO optimization.
- Tasks: Create routes/pages, canonical metadata, structured data (JSON-LD), and longer-form writeups.
- Deliverable: 2–3 project pages and improved SEO metadata.
- Acceptance: Pages accessible from main site and indexable by search engines.

## Timeline Summary
- Minimum viable content update (Phases 0–4): 3–4 working days.
- Full polish with visuals and PR (Phases 5–6): 1–2 additional days.
- Deep case studies and SEO (Phase 7): optional 1–2 days.

If you confirm, I'll run the content audit (Phase 0) and create the content inventory next.
