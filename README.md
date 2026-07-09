# Sushmitha Katherine Jayaraj — Portfolio

React + TypeScript + Vite + Tailwind CSS, structured to match a Lovable-style project
(shadcn-pattern `Button` component, per-section components, CSS-variable design tokens).

## What's filled in already
- Name, logo initial (S.), "Data Analytics Engineer" badge, tagline, 4+ yrs badge

## What's still a placeholder — search for `✏️` comments
- Bio, education status line, resume link, social links
- Skill chips, Experience entries, Projects, Skills groups, Certifications, Education, Contact info

## Run locally
```bash
npm install
npm run dev
```
Then open the printed localhost URL.

## Build for production
```bash
npm run build
```
Outputs static files to `dist/`, deployable anywhere (Vercel, Netlify, GitHub Pages, etc.)

## Importing into Lovable
Lovable can import an existing GitHub repo. Steps:
1. Push this folder to a new GitHub repo (`git init && git add . && git commit -m "init" && git remote add origin <your-repo-url> && git push -u origin main`)
2. In Lovable, choose "Import from GitHub" and select the repo
3. Lovable will pick up the Vite + React + Tailwind setup automatically

## Adding your photo / project images / logos
Drop image files into `public/` (e.g. `public/photo.jpg`) and reference them as `/photo.jpg`
in the relevant component. Placeholders currently use lucide-react icons instead of images.

## Wiring up the contact form
The form in `src/components/ContactSection.tsx` doesn't send anywhere yet — it just shows a
confirmation message. Connect it to a service like Formspree, EmailJS, or your own API route.
