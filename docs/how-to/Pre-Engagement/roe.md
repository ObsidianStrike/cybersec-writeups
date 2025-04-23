---
id: roe
title: How to Define Rules of Engagement for a Red Team Operation
sidebar_label: Rules of Engagement
sidebar_position: 1
---

---

### Objective

Establish a clear and enforceable **Rules of Engagement (RoE)** document that defines the boundaries, permissions, and expectations for a Red Team operation. This ensures legal coverage, aligns stakeholders, and protects both operator and client.

---

### Prerequisites

- Authorized engagement with written scope or Statement of Work (SoW)
- Identified stakeholders (e.g., client sponsor, IT lead, security team)
- Defined operational goals (e.g., initial access, persistence, exfiltration simulation)

---

### Step-by-Step Instructions

---

#### ✅ 1. Define Engagement Timeframes

Specify when operators are allowed to perform testing.

- Example:
  ```text
  Red Team operations are permitted from Monday–Friday, 6:00 PM to 6:00 AM EST.
  No activity is allowed during scheduled maintenance or DR test windows.
  ```

- Optional: Include time windows for stealth vs overt testing phases.

---

#### 🚫 2. Identify Restricted Targets or Methods

Prevent unintentional disruption or data exposure by explicitly stating what's out-of-bounds.

- Examples:
  - **Out of Scope Hosts**: `DC01`, `Exchange01`, `PaymentGateway.prod.local`
  - **No-Use Techniques**: ransomware simulation, destructive malware, zero-days

---

#### 💣 3. Establish Kill Switches and Emergency Escalation

Set up conditions where the Red Team must halt activity and notify stakeholders.

- Example Clause:
  ```text
  In the event that Red Team activity causes service degradation, unauthorized data exfiltration, or security incident escalation, operations must immediately cease and the designated POC must be notified via Signal and phone.
  ```

- Include:
  - Emergency contacts (24/7 availability)
  - Notification method
  - Recovery steps and post-mortem procedure

---

#### 🧭 4. Define Allowed Tactics, Techniques, and Procedures (TTPs)

Outline what is permitted — explicitly.

- Examples:
  - Phishing with payloads? ✅
  - Credential harvesting? ✅
  - Password spraying? ✅ (limit: 10 attempts/hour/account)
  - DoS testing? ❌

- Map to MITRE ATT&CK for clarity.

---

#### 🧑‍💼 5. Confirm Stakeholder Alignment

Ensure all relevant parties agree to the RoE.

- Minimum required approvals:
  - CISO or security sponsor
  - Legal/compliance representative
  - IT/infra lead
  - Red Team lead

- Use a **sign-off page or e-signature section**.

---

#### 🧾 6. Include Supporting Legal Language

Examples:
- "All activities will be conducted under the authorized Statement of Work dated [DATE]."
- "Red Team operators shall not access personal data unless explicitly permitted in writing."
- "All findings will be disclosed during the debrief and within the final report."

---

### Optional Enhancements

- **RoE Tracker**: spreadsheet logging each tactic/phase approval
- **Change Log**: for mid-operation adjustments
- **Deconfliction Strategy**: if Blue Team is unaware of operation

---

### Summary

A well-written RoE protects everyone — the client, the operator, and the mission. It sets expectations, ensures legality, and helps guide ethical decision-making under pressure.

Always treat RoE like a contract — specific, scoped, and signed.

---
