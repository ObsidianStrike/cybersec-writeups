---
id: client-questionnaire
title: How to Build a Pre-Engagement Questionnaire for Clients
sidebar_label: Client Questionnaire
sidebar_position: 4
---

---

### Objective

Design a comprehensive **pre-engagement questionnaire** to extract the technical, business, and security information needed for accurate scoping, threat modeling, and risk-aligned Red Team operations.

---

### Prerequisites

- Engagement has been tentatively approved or scoped
- You have a primary point of contact from the client
- You've completed initial discussions on objectives and risk appetite

---

### Step-by-Step Instructions

---

#### 🧠 1. Understand What the Questionnaire Should Capture

The goal is to gather:

- Business-critical assets and functions
- Technical environment and defensive controls
- Organizational structure and visibility boundaries
- Risk tolerance and operational constraints

This helps shape **scope, realism, safety, and value**.

---

#### 🧾 2. Structure the Questionnaire into Key Sections

Here’s a recommended structure:

---

##### **1. Organizational Context**
- What industry do you operate in?
- Who are your primary threat actors (based on threat intel)?
- Have you experienced any security incidents in the last 12 months?

---

##### **2. Business Priorities & Risk**
- What are your most critical systems or data?
- What is considered unacceptable impact (e.g., downtime, data exposure)?
- Are there legal/regulatory obligations we should be aware of?

---

##### **3. Technical Environment**
- What operating systems and platforms are in use (Windows, Linux, cloud)?
- Do you use on-prem Active Directory, Azure AD, or both?
- Key third-party integrations or SaaS platforms in use?

---

##### **4. Blue Team Maturity**
- Is the Blue Team aware of this engagement?
- Do you run EDR, NDR, or SIEM? Which tools?
- Are you looking to test detection, response, or both?

---

##### **5. Access & Prepositioning**
- Will this be an external or assumed breach engagement?
- Will credentials, VPN access, or a dropbox be provided?
- Are phishing, USB drops, or physical tests permitted?

---

##### **6. Constraints & Exclusions**
- Are there systems, user groups, or locations that are out-of-scope?
- Are there specific times when testing should not occur?
- What escalation and kill switch process should we follow?

---

#### 🧱 3. Deliver as a Reusable Document Template

Format options:
- Google Form
- Markdown file in your internal repo
- PDF with checkboxes + short answers

📌 *Tip:* Use conditional logic in forms to streamline the process (e.g., show cloud questions only if they use cloud).

---

#### ✅ 4. Validate the Inputs with Stakeholders

Once the questionnaire is returned:
- Schedule a call to clarify ambiguous answers
- Ask for diagrams, inventories, or policy docs where helpful
- Confirm any gaps in scope or understanding before finalizing RoE

---

### Example Questions Snapshot

| Section            | Question                                                              |
|--------------------|-----------------------------------------------------------------------|
| Risk Tolerance      | What impact level is acceptable before you’d want us to stop the op? |
| Blue Team Awareness | Is your detection team aware this is a Red Team engagement?          |
| Access              | Will initial access be simulated or provided (assumed breach)?       |
| Tooling             | What endpoint security solutions are in place on user workstations?  |
| Cloud               | Are any Azure AD or AWS IAM roles in-scope for simulation?           |

---

### Summary

A well-crafted pre-engagement questionnaire acts as both a **risk filter** and a **mission briefing**. It helps avoid misunderstandings, enables accurate threat simulation, and allows Red Teams to operate with precision and trust.

Make it part of your standard operating procedure — and improve it with every engagement.

---
