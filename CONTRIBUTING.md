# 🚀 Contributing to cybersec-writeups

Thank you for your interest in contributing! We welcome improvements, corrections, and new content. Please read the following guidelines to ensure a smooth collaboration.

---
## 📑 Table of Contents
1. [🚀 Getting Started](#🚀-getting-started)
2. [✍️ Style Guidelines](#✍️-style-guidelines)
   - [Tone & Voice](#tone--voice)
   - [Markdown/MDX](#markdownmdx)
   - [Headings & Structure](#headings--structure)
   - [Admonitions & Alerts](#admonitions--alerts)
3. [📂 File & Folder Structure](#📂-file--folder-structure)
4. [🌿 Branch Naming Conventions](#🌿-branch-naming-conventions)
5. [💬 Commit Message Conventions](#💬-commit-message-conventions)
6. [🔀 Pull Request Process](#🔀-pull-request-process)
7. [✅ Testing & CI](#✅-testing--ci)
8. [📝 Code Snippet Quality](#📝-code-snippet-quality)
9. [🖼️ Images & Assets](#🖼️-images--assets)
10. [🏷️ Versioning Docs](#🏷️-versioning-docs)
11. [❓ Feedback & Questions](#❓-feedback--questions)

---
## 🚀 Getting Started
1. **Fork** the repository and **clone** your fork:
   ```bash
   git clone git@github.com:<your-user>/cybersec-writeups.git
   cd cybersec-writeups
   ```
2. **Install dependencies**:
   ```bash
   npm ci
   ```
3. **Start the local dev server**:
   ```bash
   npm run start
   # http://localhost:3000
   ```
4. Create a new **branch** following our [🌿 Branch Naming Conventions](#🌿-branch-naming-conventions).

---
## ✍️ Style Guidelines
### Tone & Voice
- Write in a **clear**, **concise**, and **professional** tone.
- Use active voice and second-person (`you`) for how-to instructions.
- Aim for **neutral** and **inclusive** language.

### Markdown/MDX
- Use **MDX** when you need React components (e.g., `<Tabs>`, `<Admonition>`).
- Keep files with `.md` extension if they don’t require interactive components.
- Wrap inline code in backticks: `` `code` ``.

### Headings & Structure
- Follow a logical hierarchy: `#` for H1 (document title), `##` for H2, `###` for H3.
- Start each doc with an H1 title reflecting its purpose.
- Use descriptive headings; avoid generic titles like “Overview.”

### Admonitions & Alerts
- Use Docusaurus `<Admonition>` for notes, warnings, tips:
  ```mdx
  import { Admonition } from 'docs-shared';

  <Admonition type="tip">
  Remember to configure your GPU drivers before proceeding.
  </Admonition>
  ```

---
## 📂 File & Folder Structure
Place content under the appropriate Diátaxis quadrant folder in `/docs`:
```
/docs/
  concept/    ← Concepts and overviews
  how-to/     ← Step-by-step guides
  tutorial/   ← End-to-end walkthroughs
  reference/  ← Cheat-sheets and APIs
```
- **Filenames**: use lowercase and hyphens (e.g., `gpu-setup.md`).
- **Asset files**: store under `/assets/img/` or `/assets/samples/` with clear names (e.g., `k8s-pod-security.png`).

---
## 🌿 Branch Naming Conventions
| Type    | Format                                     | Example                                 |
|---------|--------------------------------------------|-----------------------------------------|
| Feature | `feature/<quadrant>/<short-description>`    | `feature/how-to/recon-fundamentals`     |
| Fix     | `fix/<quadrant>/<short-description>`        | `fix/reference/sql-injection-table`     |
| Chore   | `chore/<description>`                       | `chore/update-docusaurus-version`       |
| Hotfix  | `hotfix/<issue-number>-<short-description>` | `hotfix/1234-broken-link`               |

---
## 💬 Commit Message Conventions
Follow **Conventional Commits**:
```
<type>(<scope>): <short summary>

[optional body]

[optional footer]
```
- **type**: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`.
- **scope**: typically the quadrant or component (e.g., `concept`, `site-config`).
- **short summary**: 50 characters max, imperative mood.
- **body**: wrap at 72 characters, explain motivation.
- **footer**: reference issues (e.g., `Closes #123`).

**Examples:**
```
docs(concept): add GPU acceleration overview
fix(how-to): correct Kubernetes manifest indentation
chore: upgrade Docusaurus to v3.5.0
``` 

---
## 🔀 Pull Request Process
1. Push your branch to your fork.
2. Open a PR against `main` in the upstream repo.
3. Use the PR template; include:
   - Quadrant (`concept`, `how-to`, etc.)
   - Audience level (`beginner`, `advanced`)
   - Related issue or ticket.
4. Request at least **one peer review**.
5. Address review comments; ensure CI passes.
6. Merge after approvals and passing checks.

---
## ✅ Testing & CI
- **Lint Markdown**: `npm run lint:md` (fail on errors).
- **Link Check**: runs automatically in CI via `tests/link-check.config.json`.
- **Build**: verify with `npm run build`.
- Fix any errors before merging.

---
## 📝 Code Snippet Quality
- **Fenced blocks** with language tag: ````bash``, ````python```, etc.
- **Titles**: add `title="..."` for context.
- **Expected Output**: comment lines starting with `# Expected output:`.
- **Test snippets** in `/tests/snippets/`; CI will validate.

---
## 🖼️ Images & Assets
- Store in `/assets/img/` or `/assets/samples/`.
- Filenames: lowercase, hyphens (e.g., `id-fuzzing-result.png`).
- Optimize images (PNG compression, SVG minification).
- Provide `alt` text for accessibility.

---
## 🏷️ Versioning Docs
If supporting multiple product versions:
1. Create a version: `npm run docs:version <version>`.
2. New folder: `/docs/version-<version>/`.
3. Update sidebar and version dropdown in `site-config.js`.

---
## ❓ Feedback & Questions
- Use the “Was this page helpful?” widget to submit ratings.
- File issues for typos, content gaps, or bugs: [New Issue](https://github.com/your-org/cybersec-writeups/issues/new).
- For further assistance, reach out on Slack or open a discussion.

---
*Thank you for making our docs better!*

