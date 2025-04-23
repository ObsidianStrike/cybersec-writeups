---
id: internal-planning-docs
title: How to Set Up Internal Red Team Planning Docs
sidebar_label: Internal Planning Docs
sidebar_position: 5
---

---

### Objective

Create and structure your internal documentation to support a Red Team operation from pre-engagement to post-report. These docs serve as the **central nervous system** of your op — tracking scope, targets, infrastructure, TTPs, and findings.

---

### Prerequisites

- Pre-engagement activities (scoping, RoE, threat model) are complete
- Team roles have been defined (lead, infrastructure, operator, analyst)
- A version-controlled workspace is available (Git, Wiki, shared repo)

---

### Step-by-Step Instructions

---

#### 📁 1. Create a Standard File and Folder Structure

Set up a clear, repeatable directory for each engagement:

```bash
engagement-name/
├── planning/
│   ├── scope.md
│   ├── rules-of-engagement.md
│   ├── threat-model.md
│   ├── questionnaire-responses.md
│   └── timeline.md
├── infrastructure/
│   ├── c2-design.md
│   ├── redirectors.md
│   └── credentials.md
├── ops/
│   ├── attack-chain.md
│   ├── tool-usage.md
│   └── daily-logs/
├── reporting/
│   ├── draft-report.md
│   └── findings-matrix.csv
└── archive/
```

📌 *Tip:* Use symlinks or scripts to auto-template these for each new client.

---

#### 🧠 2. Maintain a Living Scope and RoE Tracker

Include:
- In-scope IPs, domains, and user groups
- TTPs allowed by phase (initial access, lateral, exfil)
- Constraints and kill switch conditions

Keep this file updated during the operation. If scope changes, **log the change** and why.

---

#### 🛠️ 3. Document C2 Infrastructure and Payload Planning

Track:
- C2 staging domains, redirectors, backend IPs
- Payload types, delivery methods, and profiles
- Beacon settings (sleep, jitter, indicators)
- Failover paths and fallback access

Optional: Visual diagrams (e.g., C2 flow, phishing domain infra)

---

#### 🧬 4. Build and Track Your TTP Matrix

Map each tactic used to:
- MITRE ATT&CK technique ID
- Target system or user
- Tool/method used
- OPSEC considerations (e.g., memory-only, binary dropped)

📄 *Deliverable:* `attack-chain.md` as a single-pane view of the op’s execution logic.

---

#### 📝 5. Track Daily Activity Logs

Each operator should log:
- Date/time
- Host targeted
- TTPs used
- Outcome/result
- Artifacts captured (e.g., screenshots, payload output)

Helps build the final report, supports deconfliction, and provides replayable insight.

---

#### 📊 6. Prepare Reporting Templates in Advance

Draft structure:
- Executive summary
- Attack narrative (chain of events)
- Findings & impact analysis
- Recommendations
- MITRE ATT&CK mapping
- Appendix: artifacts, hashes, IOCs, payloads

Keep a `findings-matrix.csv` for fast parsing/report generation.

---

### Summary

Good documentation is the **invisible force multiplier** of any Red Team op. It ensures continuity, sharpens collaboration, and lays the groundwork for accurate, impactful reporting.

Plan early, track often, and treat your docs like mission gear — because they are.

---