---
id: threat-model
title: How to Create a Threat Model for an Adversary Simulation
sidebar_label: Threat Modeling
sidebar_position: 3
---

---

### Objective

Define a realistic and relevant **threat model** to guide a Red Team operation. A strong threat model ensures the engagement simulates credible adversaries, aligns with the client's industry risks, and validates their real-world security posture.

---

### Prerequisites

- Scoping and pre-engagement activities completed
- Access to stakeholder input on business risk, industry, and past incidents
- Familiarity with the MITRE ATT&CK framework and known APT profiles

---

### Step-by-Step Instructions

---

#### 🧠 1. Understand the Client’s Business and Risk Profile

Start by identifying:
- **Industry vertical** (e.g., healthcare, finance, manufacturing)
- **Threat exposure** (e.g., ransomware, IP theft, insider risk)
- **Critical business functions** (e.g., payment processing, ERP, customer portals)

📌 *Ask:* What kind of attacker keeps your CISO up at night?

---

#### 🔍 2. Select an Adversary Type to Emulate

Choose a threat actor class that matches the client’s environment:

| Adversary Type | Description |
|----------------|-------------|
| **Nation-state/APT** | Long-dwell, stealthy, highly capable (e.g., APT29, APT41) |
| **Cybercriminal** | Ransomware, initial access brokers (e.g., FIN7, Conti) |
| **Insider Threat** | Disgruntled employees, contractors, third-party abuse |
| **Hacktivist** | Political or ideological actors, often target public-facing systems |

Optionally choose a **named threat group** from MITRE or CTI feeds to build realism.

---

#### 🧰 3. Build a TTP Matrix Based on MITRE ATT&CK

Use [https://attack.mitre.org](https://attack.mitre.org) or Threat Intelligence reports to gather:

- Initial Access: `T1566.001 – Spearphishing Attachment`
- Execution: `T1059 – Command and Scripting Interpreter`
- Credential Access: `T1003 – OS Credential Dumping`
- Lateral Movement: `T1021 – Remote Services`
- Exfiltration: `T1041 – Exfil over C2 Channel`

📄 *Deliverable:* A table or matrix of selected techniques by phase.

---

#### 🧗 4. Align Objectives to the Threat Model

Translate the model into measurable goals:
- “Can we simulate data exfiltration from a dev share using stealthy C2?”
- “Can an attacker escalate from user-level access to domain admin?”
- “Can the Blue Team detect lateral movement from a compromised endpoint?”

Each tactic should tie back to:
- A known adversary capability
- A defensive detection/response control
- A mission-critical business risk

---

#### 🛡️ 5. Validate with Stakeholders

Walk through the threat model with:
- Security leadership (to confirm realism)
- Legal/compliance (to vet method legality)
- IT and IR (optional for purple teaming or assumed breach setups)

📌 *Tip:* Ask for feedback on **relevance**, not **technicality**.

---

### Example Template (Simplified)

| Phase             | Tactic                        | Technique ID     | Tool/Method             | Justification                         |
|------------------|-------------------------------|------------------|-------------------------|--------------------------------------|
| Initial Access    | Phishing                      | T1566.002        | Macro-armed XLSX        | Matches APT29 behavior in industry X |
| Execution         | PowerShell                    | T1059.001        | Obfuscated one-liner    | Bypasses AppLocker and EDR           |
| Priv Esc          | Token Impersonation           | T1134.001        | Rubeus                  | Common in post-ex scenarios          |
| Lateral Movement  | SMB Admin Shares              | T1021.002        | PsExec                  | Valid technique for domain move      |
| Exfiltration      | Encrypted Web Traffic         | T1041            | HTTPS C2 beacon         | Matches Conti RaaS TTPs              |

---

### Summary

A good threat model is more than a checklist — it’s a tactical playbook backed by intelligence. It ensures Red Team operations are grounded in realism, relevance, and risk.

Use the model to **guide tooling**, **shape payloads**, and **define victory** — not just emulate attackers, but out-think them.

---
