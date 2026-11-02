# One Who Codes — Windows release guide

Registration already confirmed in Gmail. Website submission is separate.

## 1. Preview and review

Open this directory in VS Code or PowerShell and run:

```powershell
python -m http.server 8080
```

Open `http://localhost:8080` on desktop and phone browser (or use browser responsive mode). Personalize the introductory copy, verify the correct name, LinkedIn, project claims and permissions for team project descriptions. End the server with Ctrl+C.

## 2. Create a new public GitHub repository

At https://github.com/new choose owner **yashshah1211**, name **one-who-codes-2026**, **Public**, without initializing with a README or .gitignore (they already exist in this folder). Do not choose your HackerMate or Operation Four repository.

From PowerShell in the extracted portfolio folder:

```powershell
git init
git branch -M main
git add .
git commit -m "Build original One Who Codes 2026 developer portfolio"
git remote add origin https://github.com/yashshah1211/one-who-codes-2026.git
git push -u origin main
```

Use GitHub's normal browser/device authorization when prompted. **Don't paste tokens into chat.** Check that the new repo contains `index.html`, `app.js`, `styles.css`, `assets`, and the docs.

## 3. Deploy through Vercel (free static site)

1. Visit https://vercel.com/new while signed into the account linked to GitHub.
2. Import **only** `yashshah1211/one-who-codes-2026`.
3. Framework preset: **Other** (static HTML). Root directory: `/`. No build command and no environment variables needed.
4. Click Deploy. Open the resulting `https://...vercel.app` URL. Test home page, six case files, filters, mobile layout, and external links.
5. The same repository is connected to the deployment; later Git pushes will redeploy automatically. Keep it stable once judging begins.

## 4. Claim ONEWHO application URL

1. Go to https://isonewho.codes, choose **Sign in with GitHub** and authorize your own account.
2. Choose your unique ONEWHO name and connect the deployed `https://...vercel.app` address.
3. Open **Applications**, create an application with company **Unstop**.
4. Copy the complete link ending in `/a/unstop`; don't submit the plain home-page URL in its place.

## 5. Submit the actual Unstop entry

1. Open https://unstop.com/hackathons/one-who-codes-2026-a-portfolio-challenge-acadable-1784554 while signed into your registered account.
2. Go to your registered participant dashboard / submission stage.
3. Provide **two links**: the `/a/unstop` ONEWHO application link and `https://github.com/yashshah1211/one-who-codes-2026`.
4. Submit, confirm status shows **Submitted** rather than Registered, and capture a screenshot of confirmation.
5. Deadline: **15 November 2026, 11:59 PM IST**. Keep the repo, deployed site and ONEWHO URL public and unchanged during judging.

## Known boundaries

This is authored with AI assistance using documented projects from the GitHub account; your original contribution and accurate attribution remain mandatory. The `PARALLAX` source repo is private; only its public video is linked. No awards or metrics are invented.
