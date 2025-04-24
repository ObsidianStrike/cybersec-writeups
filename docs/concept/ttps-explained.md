---
id: ttps-explained
title: Tactics, Techniques, and Procedures (TTPs)
sidebar_label: TTPs
sidebar_position: 3
---

---

### What Are TTPs?

**Tactics, Techniques, and Procedures (TTPs)** represent the behavioral DNA of threat actors. Rather than focusing solely on tools or payloads, TTPs describe *how* adversaries operate — from strategic objectives down to specific commands or scripts used during intrusions.

TTPs are foundational to Red Teaming, threat intelligence, and adversary emulation because they shift the focus from tools (which change frequently) to behavior (which tends to be more consistent and revealing).

---

### Breaking It Down

#### 🧠 Tactics
**Tactics** are the *why* — the adversary’s strategic goals during an operation. These are high-level categories like:
- **Initial Access**
- **Privilege Escalation**
- **Lateral Movement**
- **Defense Evasion**
- **Exfiltration**

Tactics provide context for what the attacker is trying to accomplish at a given point in the intrusion.

#### 🛠 Techniques
**Techniques** are the *how* — the methods used to achieve the tactic. Each tactic can have dozens of techniques. For example:
- Under **Lateral Movement**, a technique might be:
  - `T1021.002 – SMB/Windows Admin Shares`
  - `T1075 – Pass the Hash`

These help define specific approaches that adversaries take.

#### 🔍 Procedures
**Procedures** are the *what* — the exact implementation or instance of a technique. This includes:
- The use of `PsExec` to pivot laterally.
- A PowerShell one-liner to dump LSASS memory.
- A macro-laced Word doc exploiting CVE-2017-0199.

Procedures are what you observe during real-world incidents or Red Team engagements.

---

### Why TTPs Matter in Offensive Security

Understanding and emulating TTPs allows Red Teams to:
- **Replicate real-world adversaries** (e.g., APT29, FIN7).
- **Avoid tool signature detection** by focusing on behavior.
- **Map detection gaps** in Blue Team visibility.
- **Drive purple teaming** through concrete, testable behaviors.
- **Stay resilient** — when tools break or get flagged, behavior-based thinking keeps the operation moving.

TTPs are also central to the **MITRE ATT&CK framework**, which organizes known adversary behaviors into a comprehensive matrix. Red Teams often map their activity to ATT&CK for reporting, detection validation, or adversary emulation planning.

---

### Real-World Example

Let’s break down a simple TTP flow:

- **Tactic**: Credential Access  
- **Technique**: `T1003.001 – LSASS Memory`  
- **Procedure**: Use `procdump.exe -ma lsass.exe` to dump process memory for offline credential extraction.

This abstraction hierarchy helps communicate intent, method, and implementation clearly — across technical and non-technical stakeholders.

---

### TTPs vs. Tools

It’s common to see operators rely too heavily on tools (e.g., Metasploit, Cobalt Strike), but tools can betray OPSEC. Focusing on TTPs allows Red Teams to:
- Swap tooling mid-op without altering behavior.
- Build custom tradecraft that matches specific adversaries.
- Avoid detection patterns that focus on binaries or process names.

---

### Conclusion

TTPs are the common language of cyber offense and defense. For Red Teams, thinking in TTPs means you’re building threat-informed operations, not just popping shells. They help align your work with real-world threats, ensure repeatability, and allow for clear mapping of risk, detection, and response.

---

