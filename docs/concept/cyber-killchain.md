---
id: cyber-killchain
title: The Cyber Killchain
sidebar_label: The Cyber Killchain
sidebar_position: 2
---

### What Is the Cyber Kill Chain?

The **Cyber Kill Chain** is a conceptual framework developed by Lockheed Martin to describe the typical stages of a cyberattack from the perspective of an external threat actor. By breaking attacks into distinct phases, it allows defenders — and Red Teams — to understand, map, and disrupt adversary activity at each step.

While originally designed with perimeter defense in mind, the model has evolved and remains highly relevant in Red Teaming, threat hunting, and adversary emulation.

---

### The 7 Phases of the Kill Chain

#### 1. **Reconnaissance**
The attacker gathers intel on the target environment — domain names, email formats, exposed services, employee details, or supply chain relationships. Common sources include:
- OSINT (e.g., LinkedIn, Shodan, WHOIS)
- DNS enumeration
- Passive traffic analysis

🔍 *Red Team Tip:* Passive recon minimizes noise and evades early detection.

---

#### 2. **Weaponization**
The attacker crafts a tailored exploit and binds it with a delivery mechanism (e.g., a malicious macro or an infected PDF). This step typically occurs offline.

Examples:
- Embedding a reverse shell in a Microsoft Office document
- Generating a dropper using `msfvenom` or custom malware

---

#### 3. **Delivery**
The payload is delivered to the victim via:
- Phishing emails
- Malicious websites (drive-by downloads)
- Removable media (USB drops)
- Compromised third-party services

📬 *Red Team Tip:* Choose delivery methods that match real-world attacker TTPs and avoid detection by mail gateways or DLP solutions.

---

#### 4. **Exploitation**
The attacker leverages a vulnerability to execute code on the victim's machine. Exploitation may target:
- Unpatched software (e.g., CVE-2021-40444)
- Misconfigurations (e.g., macro-enabled documents)
- User behavior (e.g., enabling content, clicking links)

---

#### 5. **Installation**
Establishing persistence through:
- Malware implants (e.g., RATs)
- Registry modifications
- Scheduled tasks or WMI subscriptions
- Userland persistence via DLL sideloading

🛠 *Red Team Tip:* Avoid noisy persistence mechanisms — prioritize stealth and resilience.

---

#### 6. **Command and Control (C2)**
A communication channel is established back to the attacker to allow ongoing access and tasking.

Common protocols:
- HTTPS (e.g., using Cobalt Strike, Mythic)
- DNS tunneling
- Slack, Telegram, or other C2-as-a-Service platforms

C2 can be **interactive**, **beacon-based**, or **fileless**.

---

#### 7. **Actions on Objectives**
With access secured, the attacker performs their mission:
- Credential harvesting
- Lateral movement
- Data exfiltration
- Destructive actions (e.g., ransomware, wipers)

🎯 *Red Team Tip:* Align objectives with realistic threat models. Don't just "pop a box" — simulate actual impact.

---

### Why It Matters for Red Teams

Understanding and leveraging the Kill Chain helps Red Teams:
- **Plan realistic attack chains**
- **Identify choke points** to test detection and response
- **Map TTPs** to MITRE ATT&CK or custom threat models
- **Communicate impact** clearly to stakeholders and Blue Teams

It also allows for **flexible insertion**: you can begin a Red Team operation at any phase (e.g., Assume Breach = Phase 4+), depending on the scope and maturity of the Blue Team.

---

### Criticism and Alternatives

While the Cyber Kill Chain is foundational, it's not perfect. Key criticisms:
- Focuses on **external threats**, not insider threats.
- Emphasizes **perimeter-centric** thinking.
- Lacks visibility into **post-compromise** activities.

Alternatives or complements include:
- **MITRE ATT&CK** (tactical-level, granular)
- **Unified Kill Chain** (expands scope across cyber operations)
- **Diamond Model** (emphasizes adversary-infrastructure-victim-activity relationships)

---

### Conclusion

The Cyber Kill Chain remains a powerful mental model for understanding, simulating, and disrupting attacker operations. For Red Teams, it's a planning and communication tool that bridges technical execution and business risk — turning abstract threats into observable, measurable campaigns.

---
