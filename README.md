# THE BUILD LOG — Yash Shah

An original, zero-dependency, responsive developer portfolio for the **One Who Codes 2026** competition.

## What is included

- `index.html`: semantic, keyboard-accessible content and a case-file dialog.
- `styles.css`: original editorial visual language, responsive grids, decorative system illustrations, reduced-motion support.
- `app.js`: working project filters, keyboard-accessible case dialogs, and a local state-machine illustration.
- `assets/favicon.svg`: vector monogram.
- `docs/SUBMISSION_CHECKLIST.md`: competition-specific steps and judging rubric.
- `docs/CONTENT_PROVENANCE.md`: factual sources and disclosure checklist.

This is **not** a ONEWHO-generated portfolio. It was authored independently, using user-verified projects. The current code contains no external libraries, tracking, third-party font requests, or API secrets.

## Run

Open `index.html` in your browser, or run `python -m http.server 8080` in this directory and visit `http://localhost:8080`.

## Deploy for One Who Codes

1. Create a **new public GitHub repository** (example: `onewhocodes-portfolio`) and commit the code, making sure the history is associated with the same GitHub account used for ONEWHO.
2. Deploy **yourself** to GitHub Pages, Vercel, Netlify, Cloudflare Pages, Railway, Render or Fly. The challenge explicitly requires self-deployment to a supported platform.
3. Visit https://isonewho.codes, log in via GitHub, claim your personal ONEWHO name and connect the deployed URL.
4. In the ONEWHO dashboard, Applications → create an application with company name **Unstop**. The resulting URL must end in `/a/unstop`.
5. Submit **both** the ONEWHO `/a/unstop` application URL **and** the public repository URL on the Unstop event page before **November 15, 2026, 11:59 PM IST**.
6. Keep the site and ONEWHO address public and unchanged after the deadline until judging ends/results are announced.

## Important pre-submission checks

- Check that every linked project you want shown can be safely represented publicly. PARALLAX's repository is currently private, so only its publicly available demo video is linked.
- Verify name/identity and descriptions accurately reflect your contributions, particularly to team projects.
- Recheck outgoing project URLs and the LinkedIn profile. Ensure no stale claims remain.
- Test deployment on phone, tablet and desktop and open all six case files.
- No scores, awards or production performance claims have been invented.

## Competition criteria (as of Nov 2, 2026)

- Creativity: 30%; craft: 30%; content: 20%; performance/accessibility: 20%.
- Portfolio must represent the entrant's own work. AI tools/templates are permitted, but substantive creative contribution matters.
- One entry per person, ONEWHO name per GitHub account, no auto-generated ONEWHO portfolio.

Official rules: https://api.unstop.com/hackathons/one-who-codes-2026-a-portfolio-challenge-acadable-1784554

## Credits and licensing

Site design and code prepared with AI assistance for this entry; the entrant must review, personalize, and verify attribution. Project names and summaries reference the repositories/videos linked within the site; all trademarks remain their respective owners. No code from those projects is redistributed here.

Portfolio code: MIT License. See `LICENSE`.

## Source quality gate

Run `python tests/smoke.py` with Python 3.10+ and Node 22+ installed. GitHub Actions runs this gate on pushes and PRs. It checks source structure; it is not a replacement for testing the real deployment in Chromium/Safari.

## Windows deployment

See `DEPLOY_WINDOWS.md` for concrete GitHub, Vercel, ONEWHO and Unstop instructions.
