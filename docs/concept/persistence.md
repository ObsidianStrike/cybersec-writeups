---
id: persistence
title: Persistence Explained
description: Understand what persistence is, why it's used, and how adversaries achieve it in post-exploitation.
slug: /concept/persistence
sidebar_label: Persistence
sidebar_position: 12
tags:
  - post-exploitation
  - red-team
  - persistence
  - windows
  - linux
  - diataxis:explanation
---

# Persistence

Persistence is the technique by which an adversary ensures **continued access** to a compromised system—even after reboots, logouts, or temporary disconnections. It is one of the defining characteristics of a **determined attacker** and a critical phase in real-world intrusions, Advanced Persistent Threats (APTs), and red team operations.

---

## 💡 Why Persistence Matters

Once access has been gained, it can easily be lost. A user rebooting their machine, an AV cleanup script, or even a missed heartbeat from your C2 implant can sever your connection.

Persistence is about ensuring **reliable access over time**—it’s the difference between a one-off shell and full control over the environment.

It enables:

- **Resilience**: Maintain presence across disruptions.
- **Strategic Operations**: Execute long-term actions at a time of your choosing.
- **Multi-stage Campaigns**: Lay groundwork for lateral movement and privilege escalation.
- **Stealth**: Blend in with scheduled tasks, services, registry keys, or startup folders.

---

## 🔍 What Is Considered Persistence?

Persistence can take many forms depending on OS, privileges, and tooling:

### 🪟 On Windows:

| Category             | Examples |
|----------------------|----------|
| **Startup Items**    | `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup` |
| **Scheduled Tasks**  | `schtasks /create`, `Task Scheduler GUI` |
| **Registry Keys**    | `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` |
| **Services**         | `New-Service`, `sc.exe` |
| **WMI Subscriptions**| Event-triggered payloads |
| **Office Macros**    | Documents that run scripts |
| **DLL Hijacking**    | Abuse of load order or PATH |
| **Signed Binaries**  | LOLBAS (e.g., `mshta`, `regsvr32`) |
| **Credential Dumping** | Steal tokens and automate re-login |

### 🐧 On Linux/macOS:

| Category              | Examples |
|-----------------------|----------|
| **Crontabs**          | `@reboot /path/to/script.sh` |
| **Init Scripts**      | `/etc/init.d`, `/etc/rc.local` |
| **Systemd Services**  | `~/.config/systemd/user/` |
| **Bash Profile**      | `.bashrc`, `.bash_profile`, `.zshrc` |
| **LD_PRELOAD**        | Shared object injection |
| **SSH Keys**          | Append to `~/.ssh/authorized_keys` |
| **Plist Hijacking**   | On macOS: `~/Library/LaunchAgents/` |

---

## 🧠 Strategic Considerations

When designing persistence methods, red teamers must consider:

- **OPSEC tradeoffs**: Is this method noisy? Does it write to disk or trigger EDR rules?
- **Privileges required**: Userland vs admin vs SYSTEM.
- **Durability**: Will this survive reboots, logouts, AV cleanups?
- **Trigger**: What initiates the payload? Login, boot, event?

Example:
- `HKCU\...\Run` is stealthier but only works on login.
- A scheduled task with SYSTEM permissions may run independent of user activity.

---

## 🔒 OPSEC Concerns

Persistence can trigger alerts more than almost any other tactic.

Tips:
- Use **native tooling** (`schtasks`, `reg`, `wscript`) where possible.
- Minimize writes to common **AV/EDR-watched locations**.
- Store payloads in **alternate data streams**, **encrypted files**, or **non-standard extensions**.
- Consider **“volatile” persistence** (in-memory or re-implant methods) for stealthy ops.

---

## 🧭 Where Does Persistence Fit?

```
Initial Access → Execution → [ Post-Ex Recon ] → [ Persistence ] → Lateral Movement / Objectives
```

Persistence is often set **before** or **after** lateral movement, depending on the operator’s level of access and environment stability.

---

## 📌 Summary

> Persistence is about **longevity** and **strategic foothold**. It’s not just about staying in—it’s about coming back, whenever you want, and from wherever you need.

Mastering it gives red teams and adversaries a **temporal advantage**—the ability to pause, regroup, and strike again on their own terms.

---
