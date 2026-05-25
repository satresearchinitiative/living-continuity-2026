# Developer handoff — Living Continuity

Fill in every `_(_…)_` placeholder. Store real passwords and API keys only in your team vault (1Password, Bitwarden, etc.). Do **not** commit `.env*` files — they are gitignored.

---

## 1. Project snapshot

| Item | Fill in |
|------|---------|
| **Product / site name** | _(e.g. Living Continuity)_ |
| **Stack** | Next.js (App Router), React 19, Sass, Three.js / React Three Fiber |
| **Production URL** | _(https://…) |
| **Staging / preview URL pattern** | _(e.g. Vercel preview: `*-git-*-*.vercel.app`) |
| **Custom domain DNS / registrar** | _(who manages DNS: Vercel, Cloudflare, client IT, …)_ |

---

## 2. Source code & GitHub

| Item | Fill in |
|------|---------|
| **Git remote (HTTPS or SSH)** | _(e.g. `git@github.com:org/repo.git`) |
| **Default branch** | _(e.g. `main`) |
| **Branch / tags for production** | _(e.g. deploy from `main` only)_ |

### Access

| Role | GitHub username / invite | Notes |
|------|--------------------------|-------|
| **Org / repo admins** | _(@…)_ | _(billing, SSO, 2FA policy)_ |
| **Developers (write)** | _(@…)_ | |
| **CI / bots** | _(e.g. Vercel GitHub App)_ | |

### Day-to-day Git workflow _(adjust to how your team actually works)_

```
git checkout main
git pull origin main
git checkout -b feature/your-branch
# … work …
npm run build    # sanity check before push
git push -u origin feature/your-branch
# open PR → review → merge
```

| Item | Fill in |
|------|---------|
| **PR required?** | _(yes / no)_ |
| **Who approves merges?** | _(_)_ |
| **Protected branch rules** | _(link or summary)_ |

**Note:** Sharing a single GitHub login is discouraged. Prefer org invites + personal accounts.

---

## 3. Hosting (Vercel)

The repo includes `vercel.json` with `framework: "nextjs"` and `buildCommand: "npm run build"`.

| Item | Fill in |
|------|---------|
| **Vercel team / scope** | _(_)_ |
| **Vercel project name** | _(_)_ |
| **Dashboard URL** | _(https://vercel.com/…) |
| **Git integration** | _(connected repo + branch used for Production)_ |
| **Production deploy trigger** | _(push to `main` / manual / tags)_ |

### Domains in Vercel

| Domain | Assignment | Notes |
|--------|-------------|-------|
| _(apex)_ | _(Production / Preview)_ | |
| _(www)_ | | |

### Useful Vercel settings

| Item | Fill in |
|------|---------|
| **Node.js version override** | _(Dashboard → Settings → if set; repo has no `.nvmrc`)_ |
| **Environment separation** | _(Production vs Preview vs Development env vars)_ |

---

## 4. Environment variables

Copy to **`.env.local`** for local development (never committed). Mirror the same keys in **Vercel → Project → Settings → Environment Variables** for Production / Preview.

### Required for emails in production

| Variable | Where used | Fill in example / notes |
|----------|-------------|-------------------------|
| `RESEND_API_KEY` | `app/api/submit-entry/route.js`, `app/api/submit-floor-plan/route.js` | _(Resend → API Keys)_ |

### Resend addressing

| Variable | Purpose | Fallback in code |
|----------|---------|------------------|
| `RESEND_FROM_EMAIL` | Verified sender domain in Resend | `onboarding@resend.dev` |
| `RESEND_REPLY_TO_EMAIL` | Reply-To header | Primary `to` address |
| `RESEND_TO_EMAIL` | Fallback inbox (comma-separated allowed for interpretation flow) | See below |
| `RESEND_INTERPRETATION_EMAIL` | Recipients for **interpretation** submissions (`/api/submit-entry`) | Else `RESEND_TO_EMAIL`; else **`digitalresearch@sharjaharchitecture.org`** |
| `RESEND_FLOOR_PLAN_EMAIL` | Recipient for **floor plan screenshot** (`/api/submit-floor-plan`) | Else `RESEND_TO_EMAIL`; else **`digitalresearch@sharjaharchitecture.org`** |

| Item | Fill in |
|------|---------|
| **Resend account owner / login URL** | _(https://resend.com)_ |
| **Verified sending domain** | _(_)_ |
| **Who receives submissions in production** | _(_)_ |

### reCAPTCHA (Google)

Site key is public; secret stays server-side only.

| Variable | Scope | Purpose |
|----------|--------|---------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Client + server builds | Frontend token |
| `RECAPTCHA_SECRET_KEY` | Server only | Verification in `app/api/utils/verifyRecaptcha.js` |

**Important:** If `RECAPTCHA_SECRET_KEY` is **unset**, the server treats verification as **passed** (`valid: true`) so local dev works without keys — **always set this in Production**.

Configured **expected actions** (must match when using Enterprise / score-based actions):

| API route | reCAPTCHA `expectedAction` |
|-----------|----------------------------|
| `POST /api/submit-entry` | `glossary_submit` |
| `POST /api/submit-floor-plan` | `screenshot_submit` |

| Item | Fill in |
|------|---------|
| **Google Cloud project** | _(_)_ |
| **reCAPTCHA type** | _(v3 / Enterprise — match console setup)_ |
| **Allowed domains in Google console** | _(production domain, `localhost`, Vercel previews if needed)_ |

### Optional debugging

| Variable | Effect |
|----------|--------|
| `FORM_SUBMISSION_DEBUG`=`true` | API errors may include `debug` payloads (`app/api/utils/formSubmissionErrors.js`) |
| `NEXT_PUBLIC_FORM_SUBMISSION_DEBUG`=`true` | Client-side richer error handling _(see components using it)_ |

Do **not** leave these enabled in Production unless intentional.

---

## 5. Forms & API endpoints

| Endpoint | Method | Body | Behaviour |
|----------|--------|------|-----------|
| `/api/submit-entry` | `POST` | JSON: interpretation, name, keyword, `recaptchaToken`; honeypot field `website` must be empty | Sends email via Resend |
| `/api/submit-floor-plan` | `POST` | `multipart/form-data`: `screenshot`, `recaptchaToken`; honeypot `website` | Sends email with attachment via Resend |

**UI callers (for code navigation):**

- Interpretation / glossary submission: `components/navigation/SubmitEntryPanel.jsx`
- Capture / floor plan: `components/captureModal/CaptureModal.jsx`

---

## 6. Content & static assets

| Path | Purpose |
|------|---------|
| `public/data/glossary.json` | Glossary data |
| Other `public/` assets | Images, fonts, etc. _(list any critical CDN paths)_ |

---

## 7. Local development

| Step | Command / note |
|------|----------------|
| Install | `npm install` |
| Run dev server | `npm run dev` → http://localhost:3000 |
| Production build smoke test | `npm run build` then `npm run start` |

The project path may live under **MAMP’s `htdocs`** on some machines; the app itself is served by Next.js (`npm run dev`), not PHP.

---

## 8. Operational contacts

| Area | Owner / channel | Details |
|------|-----------------|--------|
| **Client / product** | _(_)_ | |
| **Hosting / Vercel** | _(_)_ | |
| **Domain / DNS** | _(_)_ | |
| **Email deliverability (Resend)** | _(_)_ | |
| **Google reCAPTCHA / Cloud** | _(_)_ | |

---

## 9. Checklist for a new developer

- [ ] GitHub access to repo
- [ ] Vercel access (Invite → same email as GitHub helps)
- [ ] `.env.local` created from section 4
- [ ] Resend domain verified and `RESEND_FROM_EMAIL` matches
- [ ] reCAPTCHA keys created and domains allow local + production
- [ ] Confirmed Production env vars exist for **Production** (not only Preview)

---

_Last updated from repo inspection: Next.js API routes (`app/api/`), `vercel.json`, `package.json` scripts. Refresh this doc when infra changes._
