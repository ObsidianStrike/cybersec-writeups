# cybersec-writeups
A docs‑as‑code repository for offensive cybersecurity content—organized by the Diátaxis framework—to teach and reference penetration testing tactics, techniques, and procedures. 


[![Build Status](https://img.shields.io/github/actions/workflow/status/your-org/diataxis-cybersec-docs/docs-ci.yml?branch=main)](https://github.com/your-org/diataxis-cybersec-docs/actions) [![Link Check](https://img.shields.io/badge/link-check-passing-brightgreen)](https://github.com/your-org/diataxis-cybersec-docs/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> A docs‑as‑code repository for Diátaxis‑structured cybersecurity guides, how‑tos, tutorials, and references—focused on web application penetration testing TTPs.

---

## 📂 Repository Structure

```
/
├── docs/                      ← All MDX source content
│   ├── concept/               ← Concept guides (e.g. “What is Reconnaissance?”)
│   ├── how-to/                ← Step‑by‑step recipes (e.g. Reconnaissance how‑to)
│   ├── tutorial/              ← End‑to‑end walkthroughs (e.g. Full pentest lab build)
│   └── reference/             ← API/attack technique cheat‑sheets (e.g. Injection payloads)
├── assets/                    ← Images, SVGs, example payload files
│   ├── img/
│   └── samples/
├── .github/
│   └── workflows/docs-ci.yml  ← CI: lint, link‑check, build, deploy previews
├── tests/                     ← Link‑checker & snippet validation configs
├── site-config.js             ← Docusaurus configuration
├── sidebar.js                 ← Docusaurus sidebar structure
├── openapi.yaml               ← (Optional) API specs for reference generation
├── package.json               ← Build scripts & dependencies
└── README.md                  ← This overview & developer guide
```

---

## 🚀 Getting Started

1. **Clone the repo**  
   ```bash
   git clone git@github.com:your-org/diataxis-cybersec-docs.git
   cd diataxis-cybersec-docs
   ```

2. **Install dependencies**  
   ```bash
   npm ci
   ```

3. **Run locally**  
   ```bash
   npm run start
   # Opens http://localhost:3000 with hot‑reload
   ```

---

## ✍️ Contributing

1. Fork the repo and create a feature branch:  
   ```bash
   git checkout -b feature/<quadrant>/<short-desc>
   ```
2. Write your content under the appropriate `docs/<quadrant>/` folder.  
3. Preview locally with `npm run start`.  
4. Submit a PR targeting `main`, linking to an issue if applicable.  
5. At least one peer review is required before merge.

See [CONTRIBUTING.md](CONTRIBUTING.md) for style guidelines and branch naming conventions.

---

## 🔧 CI/CD

- **Lint**: `npm run lint:md` (Markdown linting)  
- **Link‑check**: via `tests/link-check.config.json`  
- **Build**: `npm run build`  
- **Preview Deploy**: on PRs via GitHub Pages previews

---

## 🎯 Diátaxis Quadrants

- **Concept**: “What” & “Why” (e.g., web app pentest overview)  
- **How‑To**: Task‑oriented recipes (e.g., reconnaissance steps)  
- **Tutorial**: Guided, end‑to‑end labs (e.g., build a vulnerable app)  
- **Reference**: Concise cheat‑sheets (e.g., injection payload library)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📣 Feedback & Metrics

- Add “Was this page helpful?” at the bottom of each doc.  
- Track page views via Plausible (or your analytics tool).  
- File issues for typos, content gaps, or outdated references.

---

*You have the following options if you’d like a different summary or style:*  
- **TLDR**  
- **ELI5**  
- **FD** (for dummies)  
- **KISS**  
- **LT** (layman’s terms)  
- **CE** (Conversational English)  
