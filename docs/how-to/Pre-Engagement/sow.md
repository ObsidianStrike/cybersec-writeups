---
id: sow
title: How to Scope a Red Team Engagement Safely and Effectively
sidebar_label: Scope of Work
sidebar_position: 2
---

---

### Objective

This guide walks through the process of **defining a safe, effective, and measurable scope** for a Red Team operation. A clearly scoped engagement protects systems, ensures alignment with business risk, and prevents legal or operational fallout.

---

### Prerequisites

- Signed pre-engagement agreement or initial client authorization
- Stakeholder input from IT, security, legal, and executive sponsors
- An understanding of the organization’s core business processes

---

### Step-by-Step Instructions

---

#### 🧭 1. Map Technical vs Logical Scope

Define **technical scope** (infrastructure) and **logical scope** (objectives).

**Technical Scope Examples:**
- IP ranges: `192.168.1.0/24`, `vpn.corp.com`, `cloud-prod.us-west-1.aws.com`
- Domains/subdomains: `corp.internal`, `mail.target.tld`
- Employee directory access (for phishing)

**Logical Scope Examples:**
- Simulate APT-style lateral movement
- Validate internal credential hygiene
- Test Blue Team detection via assumed breach

📌 *Tip:* Tie logical scope to **MITRE ATT&CK** or real threat actor profiles.

---

#### 🎯 2. Build the Target List

Work with client stakeholders to define what’s:
- ✅ In scope: systems, apps, networks, personas
- ❌ Out of scope: prod databases, payment processors, certain user groups

Target categories to ask about:
- External: VPNs, web portals, DMZ services
- Internal: AD domains, critical systems, legacy tech
- Cloud: Azure, AWS, GCP — IAM, VMs, storage
- Human: Phishing targets, social engineering rules

📄 *Deliverable:* A target list spreadsheet or markdown doc for team reference.

---

#### ❓ 3. Ask the Right Questions

Use a standardized scoping questionnaire to gather the right intel.

Sample questions:
- What business functions are critical and must not be interrupted?
- What’s the maturity of the Blue Team/EDR setup?
- Are there known high-risk assets we should exclude?
- Can we simulate phishing, and to whom?
- Do you want a stealthy or noisy operation?
- Will you permit Assume Breach access?

Optional: Conduct a **threat modeling session** to align simulation scope to adversary types.

---

#### 📜 4. Document Scope in the Statement of Work (SoW)

Your SoW should reflect both **technical and operational boundaries**.

Minimum inclusions:
- List of in-scope and out-of-scope targets
- Approved attack vectors (e.g., phishing, USB drops, C2 callbacks)
- Restricted methods (e.g., destructive payloads, ransomware simulation)
- Timeline of activity
- Contacts for escalation or deconfliction
- Signature from all stakeholders

📌 *Pro Tip:* Include a version-controlled RoE annex or attachment.

---

### Summary

A well-scoped Red Team operation reduces risk, increases effectiveness, and helps ensure every action supports a measurable objective. Treat scoping as the foundation of everything that follows — from infrastructure setup to final reporting.

Spend the time here, and you’ll save days during execution and debrief.

---
