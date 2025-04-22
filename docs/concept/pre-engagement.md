---
id: pre-engagement
title: Pre-Engagement
sidebar_label: Pre-Engagement
sidebar_position: 4
---

---

### What Is Pre-Engagement?

**Pre-engagement** is the planning and alignment phase that takes place *before* any offensive security activity begins. It lays the foundation for a safe, legal, and effective operation — whether you’re conducting a penetration test, Red Team engagement, adversary simulation, or social engineering campaign.

This phase ensures all stakeholders understand what will happen, when, how, and under what rules. Without pre-engagement, even the most technically sound operation risks becoming a legal, ethical, or operational failure.

---

### Why It Matters

Pre-engagement is critical for several reasons:

- ✅ **Legal Authorization**: Clearly defines what is and isn’t allowed, and protects both the client and the operator.
- ✅ **Scope Control**: Establishes boundaries so the test doesn't unintentionally impact production systems or critical assets.
- ✅ **Expectations Management**: Aligns stakeholders on objectives, deliverables, timelines, and risk tolerance.
- ✅ **Safety & OPSEC**: Prevents collateral damage or detection by accident, especially in stealth operations.

It also helps Red Teams understand the client's threat model, infrastructure, and security maturity before crafting a realistic campaign.

---

### Key Components of Pre-Engagement

#### 📝 Rules of Engagement (RoE)
Defines how the operation will be conducted:
- Authorized hours of operation
- Which TTPs are permitted (e.g., can you phish? drop implants? pivot?)
- Restrictions (e.g., no targeting production AD, no destructive actions)
- Notification/escalation protocols
- Use of custom malware or C2 infrastructure

RoE is your contract with the Blue Team (if involved) and the legal team.

---

#### 📜 Statement of Work (SoW)
Outlines the formal agreement between you and the client. Typically includes:
- Objectives (e.g., test lateral movement, exfiltration paths, social engineering)
- Deliverables (report, debrief, artifacts)
- Timeline and engagement phases
- Payment terms and legal boilerplate

---

#### 🎯 Scoping
Defines the technical and operational boundaries:
- **In-scope**: IP ranges, domains, employee groups, physical locations
- **Out-of-scope**: Critical systems, personal devices, third-party infrastructure
- Credentials, pre-placed access, or Assume Breach conditions

Scoping prevents accidental disruption and helps operators prepare attack chains aligned with the environment.

---

#### 🧠 Threat Modeling
(Optional but valuable) — Identify the kinds of adversaries the engagement should emulate:
- Nation-state APTs?
- Ransomware groups?
- Malicious insiders?

This guides the selection of TTPs and sets realism expectations.

---

#### ☎️ Communications Plan
How will you stay in contact during the engagement?
- Primary and secondary POCs
- Emergency out-of-band channels (e.g., Signal, direct phone)
- Daily or weekly check-ins (especially for long-term campaigns)

Failing to plan communications can turn a successful breach into a war room panic if the client doesn’t know it’s part of the simulation.

---

### Red Team-Specific Considerations

For Red Team operations (vs. basic pentests), pre-engagement may also include:
- Setting **"break glass" conditions** if you're discovered
- Pre-briefing select Blue Team leads (in *assumed breach* or *purple team* setups)
- Provisioning of **C2 infrastructure**, domain fronts, or droppers ahead of time
- Deciding whether the team will simulate **internal access**, or achieve it organically

---

### Conclusion

Pre-engagement is where real professionalism begins. It transforms an “attack” into a **controlled exercise**, aligning stakeholders and setting the tone for the entire operation. A well-documented, well-scoped, and well-communicated pre-engagement phase is often what separates elite operators from script kiddies with good tooling.

---

