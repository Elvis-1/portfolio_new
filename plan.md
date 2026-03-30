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
- Contact links are functional.
- Optional contact form validates input and displays success/failure states if included.

> Status: Part 3 complete. Skills, Education, and Contact sections are implemented and rendered from structured data.

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
