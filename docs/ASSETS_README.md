# Assets & Case Studies — How to add images and metrics

1. Place visual assets (screenshots, GIFs, diagrams) in `public/assets/case-studies/`.
   - Use kebab-case filenames, e.g. `vulte-1.png`, `sohenation-dashboard-1.png`.

2. Update `data/assets.ts`
   - Add the filenames (paths starting with `/assets/case-studies/`) under the project key matching the `name` in `data/projects.ts`.

3. Add numeric metrics to `data/projects.ts` for the project in `metrics` (array of short strings), and update `projects` entries with `assets` and `metrics` if desired.

4. Use the case study template in `docs/case-study-template.md` to author long-form project pages.

5. To preview locally:

```bash
# from project root
pnpm install  # or npm/yarn if needed
pnpm dev
```

Notes:
- Keep images under 1–2MB where possible; use optimized PNG/JPEG or WebP for web performance.
- Update `data/assets.ts` and `data/projects.ts` together to keep the manifest consistent.
