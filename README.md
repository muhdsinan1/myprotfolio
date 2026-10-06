# Muhammad Sinan — AI Engineer & Software Engineer Portfolio

A premium, modern, and production-grade personal portfolio website crafted for **Muhammad Sinan**, a BCA graduate specializing in **Artificial Intelligence, Cloud Computing & DevOps**.

Designed specifically to impress technical recruiters, engineering leaders, and modern AI/software companies with an authentic, high-caliber editorial developer presentation.

---

## ⚡ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/vite`)
- **Animations**: Framer Motion
- **Icons**: Lucide React + Custom SVG Icons
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Playfair Display*, *JetBrains Mono*)
- **Code Quality**: Oxlint (0 warnings, 0 errors)
- **Deployment**: GitHub Pages (Automated via GitHub Actions + `gh-pages`)

---

## 🚀 Key Website Sections & Architecture

1. **Editorial Navigation & Full-Screen Menu**:
   - Serif brand logo with status indicator.
   - 48px circular hamburger button with 3 horizontal lines (`☰`).
   - Full-screen editorial overlay with numbered navigation links (`01–08`), direct contact, and social profiles.

2. **Editorial Hero Section**:
   - Availability status indicator: `AVAILABLE FOR OPPORTUNITIES` (pulsing glowing dot).
   - High-contrast editorial typography: modern sans-serif `"Hi, I'm Muhammad"` + serif italic `"AI Engineer"`.
   - Real monochrome portrait with natural fade, overlapping typography with balanced z-index depth.
   - Radiant lime-to-cream radial background gradient (`#B8FF3D` to `#FAFAF4`).
   - Bottom status badge (`MS • TCS Remote Intern`) and quick social buttons.
   - Primary black pill CTAs with animated slide arrows (`→ Let's Talk` & `Download Resume`).

3. **Intro Philosophy & Focus Statement**:
   - Elegant italic greeting (`"Hello!"`).
   - High-impact two-tone typography statement with visual contrast (`#111111` vs `#B7B7B7`).
   - Asynchronous floating skill badges representing actual competencies (*AI Engineering*, *Python*, *Backend*, *Machine Learning*, *Full-Stack*, *Cloud & DevOps*).

4. **About Me**:
   - Academic credential highlights: BCA (AI • Cloud • DevOps).
   - Core metrics cards: 8+ Major Projects, Machine Learning & Computer Vision, Full-Stack System Architecture.
   - Engineering pillars: *Model-to-Production*, *Scalable Architecture*, and *Cloud & DevOps*.

5. **Interactive Technical Skills Matrix**:
   - Filterable skills across **Languages**, **AI / Machine Learning**, **Backend**, **Frontend**, **Databases**, and **Cloud / DevOps**.
   - Skill cards with animated proficiency indicators, tags, and context.

6. **Featured Projects Showcase (Case Study Cards)**:
   - Dedicated 16:10 visual representations for each project.
   - Hover zoom effect (`1.04`) with glassmorphic overlay (`Open Case Study →`).
   - **AI Digital Human (Featured)**: Real-time conversational AI system with an interactive sandbox simulator modal!
   - **GOIA AI Chatbot**: Intent-driven Dialogflow, FastAPI, and MySQL integration.
   - **Potato Leaf Disease Detection**: Deep learning CNN model with visual pipeline (`Dataset → Training → Prediction`) and interactive leaf disease diagnosis tester.
   - **Sports Celebrity Classification**: OpenCV facial feature extraction and Support Vector Machines (SVM).
   - **FoOtAreNa**: Turf discovery and slot booking platform built with React, Django REST Framework, and PostgreSQL.
   - **Full-Stack Quiz Application**: Timed multi-tier examination platform with Angular, Spring Boot, and PostgreSQL.

7. **Production AI Case Study Pipeline**:
   - Step-by-step breakdown of how Muhammad Sinan builds production-ready AI applications:
     `Problem Formulation → Data Engineering → AI Model Development → Backend API → Frontend → Database → Docker → Cloud Deployment`.

8. **Experience & Education**:
   - **Machine Learning Intern** @ *TCS (Remote Internship)*.
   - **Bachelor of Computer Applications (BCA)** with 10 structured coursework modules.

9. **Engineering Progression Journey**:
   - 8-phase visual roadmap from programming fundamentals to end-to-end AI engineering.

10. **GitHub & Open Source Section**:
    - Pinned repository showcases with stars and tech tags.
    - Simulated 40-week commit activity heat map visual.

11. **Interactive Resume Modal & Contact Section**:
    - Instant on-screen resume previewer with print & download PDF actions.
    - Interactive contact form with input validation, mailto integration, and direct email copy feature.

---

## 📁 Project Structure

```
myprotfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD Workflow
├── public/
│   ├── assets/
│   │   ├── projects/            # 16:10 Project UI Visuals (6 projects)
│   │   ├── Monochrome Portrait with Soft Fade.png # Real Portrait Cutout
│   │   ├── resume.pdf           # Downloadable Resume PDF
│   │   └── sinan-portrait.jpg   # Social / Meta Image
│   ├── favicon.svg              # Custom MS Favicon
│   └── robots.txt               # SEO Crawler Policy
├── src/
│   ├── components/
│   │   ├── About.jsx            # About Me & Statistics Cards
│   │   ├── CaseStudy.jsx        # 8-Stage Production AI Pipeline
│   │   ├── ContactSection.jsx   # Validated Contact Form & Copy Email
│   │   ├── DevelopmentJourney.jsx # 8-Milestone Engineering Roadmap
│   │   ├── Education.jsx        # BCA Degree & Coursework Grid
│   │   ├── Experience.jsx       # TCS Remote Internship
│   │   ├── Footer.jsx           # Minimalist Clean Footer
│   │   ├── GitHubSection.jsx    # GitHub Repos & Commit Heat Map
│   │   ├── Hero.jsx             # Editorial Hero with Centered Portrait
│   │   ├── Icons.jsx            # SVG Icons (GitHub, LinkedIn)
│   │   ├── IntroStatement.jsx   # Philosophy & Floating Skill Badges
│   │   ├── IntroStatement.css   # Floating Badge Keyframes
│   │   ├── Navbar.jsx           # Circular Menu & Full-Screen Overlay
│   │   ├── NotFound.jsx         # Custom 404 Inference Error Page
│   │   ├── ProjectModal.jsx     # Interactive Project Sandbox Modal
│   │   ├── Projects.jsx         # Case-Study Project Cards with 16:10 Visuals
│   │   ├── ResumeModal.jsx      # High-Definition On-Screen Resume Viewer
│   │   └── ResumeSection.jsx    # Resume CTA Banner
│   ├── data/
│   │   └── portfolioData.js     # Centralized Data Store
│   ├── App.jsx                  # Main Application Shell
│   ├── index.css                # Global Theme & Tailwind Directives
│   └── main.jsx                 # React DOM Root Entrypoint
├── index.html                   # HTML Entrypoint with SEO & OG Meta Tags
├── package.json
└── vite.config.js               # Vite + React + Tailwind v4 Configuration (base: './')
```

---

## 🌐 Deploy to GitHub & GitHub Pages

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. **Create a new repository** on GitHub named `myprotfolio` (or `muhdsinan1.github.io`):
   [https://github.com/new](https://github.com/new)

2. **Add the remote and push**:
   ```bash
   git remote add origin https://github.com/muhdsinan1/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
   - The workflow `.github/workflows/deploy.yml` will automatically build and publish your portfolio!

---

### Method 2: One-Command Manual Deploy via `gh-pages`

```bash
npm run deploy
```

This command will automatically run `npm run build` and push the production bundle directly to the `gh-pages` branch on your GitHub repository.

---

## 📄 License
Crafted for **Muhammad Sinan**. Feel free to customize and showcase.
