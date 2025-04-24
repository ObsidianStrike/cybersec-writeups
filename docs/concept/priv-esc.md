---
id: priv-esc
title: Privilege Escalation Explained
description: Understand what privilege escalation is, why it matters, and how attackers leverage it during operations.
slug: /concept/privilege-escalation
sidebar_label: Priv Esc
sidebar_position: 14
tags:
  - post-exploitation
  - red-team
  - escalation
  - windows
  - linux
  - diataxis:explanation
---

# Privilege Escalation

**Privilege Escalation (PrivEsc)** is the process of gaining **higher-level permissions** on a system than initially granted—usually moving from a limited user to administrative (Windows: `Administrator`, `SYSTEM`; Linux: `root`).

In red teaming and adversary simulations, this is a **critical post-exploitation milestone**, enabling control, persistence, and pivoting within a network.

---

## 💡 Why Privilege Escalation Matters

Initial access often lands an operator in a **restricted context**:

- Limited shell from a phished user
- Web app RCE as `www-data`
- Initial C2 beacon running as a service account

With these constraints, the attacker can't:

- Install persistence mechanisms in protected areas
- Access credential stores (e.g., SAM, LSA secrets, LSASS)
- Dump memory or sensitive logs
- Manipulate system services or security settings
- Move laterally across boundaries like UAC, domains, or containers

**PrivEsc unlocks post-ex capabilities**, turning a foothold into a beachhead.

---

## 🔍 Types of Privilege Escalation

### 🧭 Horizontal vs Vertical

| Type         | Description |
|--------------|-------------|
| **Vertical** | Low → High (e.g., `user` → `SYSTEM`) |
| **Horizontal** | Lateral in scope, gaining access to another user’s account with equivalent privileges, often for access to different resources |

### 🪟 On Windows

| Category         | Examples |
|------------------|----------|
| **Unquoted Service Paths** | Services with spaces in path without quotes |
| **Insecure Registry Permissions** | Writeable keys in `HKLM\SYSTEM\...` |
| **DLL Hijacking** | Abuse of DLL load order in services or apps |
| **Token Impersonation** | Steal or impersonate tokens (e.g., `Incognito`, `PrintSpoofer`) |
| **UAC Bypass** | Masquerading as trusted binaries (`fodhelper.exe`, `eventvwr.exe`) |
| **Scheduled Tasks** | Abuse of misconfigured or writable tasks |
| **AlwaysInstallElevated** | Misconfigured installer policies |

### 🐧 On Linux/macOS

| Category            | Examples |
|---------------------|----------|
| **SUID Binaries**    | Find misconfigured files with `find / -perm -4000` |
| **Cron Jobs**        | Writable or weakly configured scheduled tasks |
| **Shell Escapes**    | From limited shells into full TTYs |
| **Weak Permissions** | Writable system scripts run by root |
| **Kernel Exploits**  | e.g., Dirty COW, Dirty Pipe, Stack Clash |
| **PATH Hijacking**   | Replace binaries in `PATH` if running as root |

---

## 🛠 Tools & Techniques

Popular enumeration and escalation tools include:

- **Windows**:  
  - [Seatbelt](https://github.com/GhostPack/Seatbelt)  
  - [PowerUp](https://github.com/PowerShellMafia/PowerSploit)  
  - [Watson](https://github.com/rasta-mouse/Watson)

- **Linux**:  
  - [LinPEAS](https://github.com/carlospolop/PEASS-ng)  
  - [Linux Exploit Suggester](https://github.com/mzet-/linux-exploit-suggester)  
  - [GTFOBins](https://gtfobins.github.io/)

These tools automate the detection of misconfigs and exploitation pathways.

---

## 🧠 OPSEC Considerations

Privilege escalation often involves:

- Writing to disk (exploits, binaries)
- Loading unsigned code or DLLs
- Triggering EDR-monitored events (e.g., `reg add`, `schtasks`, `seclogon`)

**Mitigation**:

- Use in-memory techniques (e.g., Cobalt Strike’s Beacon, Sliver’s BOFs)
- Abuse native tools and avoid spawning child processes
- Clean up logs and artifacts after testing exploitability

---

## 🎯 Goals After Escalation

Once escalation is successful:

- **Dump credentials** from LSASS or SAM
- **Pivot** to sensitive services (SQL, RDP, AD tools)
- **Establish persistence** with higher integrity
- **Modify or disable AV/EDR settings**
- **Hijack network-bound processes**

---

## 🧭 Where Does PrivEsc Fit?

```
Initial Access → Execution → [ Post-Ex Recon ] → [ Privilege Escalation ] → Persistence → Lateral Movement → Objectives
```

It often occurs **early** in the post-exploitation phase, enabling or enhancing the effectiveness of all other actions.

---

## 📌 Summary

> Privilege escalation isn’t just about admin rights—it’s about control. It widens your operational scope, enhances stealth and durability, and sets the stage for deeper access and broader compromise.

Whether you're simulating adversaries or defending real networks, understanding escalation is foundational.

---
