---
id: lateral-movement
title: Lateral Movement Explained
description: Understand what lateral movement is, how it's accomplished, and why it's critical in offensive operations.
slug: /concept/lateral-movement
sidebar_label: Lateral Movement
sidebar_position: 15
tags:
  - post-exploitation
  - red-team
  - movement
  - pivoting
  - lateral
  - diataxis:explanation
---

# Lateral Movement

**Lateral Movement** refers to the techniques used by an attacker to **move across a network**, accessing additional systems, accounts, and data after compromising an initial host.

This step is crucial in post-exploitation because it allows adversaries to **expand their access**, **escalate privileges**, **harvest credentials**, and ultimately reach **high-value targets** like domain controllers, critical servers, or sensitive data repositories.

---

## 🧭 Why Lateral Movement Matters

Initial compromise is often limited to:

- A single workstation or endpoint
- A low-privileged domain user
- A segmented network zone

Lateral movement helps attackers:

- Bypass network segmentation
- Move from user to admin accounts
- Access additional credentials (token theft, harvesting)
- Reach crown-jewel assets (Active Directory, databases, file servers)

It transforms a **single compromised node** into **domain-wide compromise**.

---

## 🔑 Core Techniques

### 🔗 Credential Abuse

- **Pass-the-Hash (PtH)** – Use stolen NTLM hashes to authenticate without plaintext password.
- **Pass-the-Ticket (PtT)** – Use forged or stolen Kerberos TGT/TGS tickets.
- **Over-Pass-the-Hash** – Combine NTLM credentials to request Kerberos tickets.
- **Token Impersonation** – Duplicate existing access tokens for impersonation.

### 🛠 Protocol-Based Movement

- **SMB / WMI / WinRM** – Remote code execution on Windows systems
- **RDP** – Full GUI session into another system
- **PsExec** – Remote service creation to launch executables
- **SSH** – Primary movement vector on Linux systems

### 🧠 Application Layer & Living-off-the-Land

- **Scheduled Tasks** – Set tasks on remote systems to run payloads
- **Service Creation** – Register and start services that run attacker code
- **DLL Injection / Process Hollowing** – For stealthy code execution on remote machines
- **PowerShell Remoting** – `Invoke-Command`, `Enter-PSSession` for remote ops

---

## 🧪 Common Tools for Lateral Movement

| Tool               | Platform | Notes |
|--------------------|----------|-------|
| **PsExec**         | Windows  | Fast, noisy, EDR monitored |
| **WMIExec.py**     | Windows  | Python-based alternative |
| **CrackMapExec**   | Windows  | Swiss army knife for SMB/WinRM/RDP |
| **Impacket suite** | Windows  | `smbexec`, `wmiexec`, `atexec`, `dcomexec`, etc. |
| **Sliver / Cobalt Strike** | Cross-platform | Beaconing C2s that support lateral ops |
| **SSH (native)**   | Linux    | With stolen keys, `.ssh/authorized_keys` |
| **Ansible / SaltStack** | Linux | If internal automation tools can be hijacked |

---

## 📐 Typical Workflow

```plaintext
Initial Access
      ↓
Credential Dumping (e.g., LSASS, SAM)
      ↓
Token/Theft/Harvesting (e.g., mimikatz, SharpHound)
      ↓
Lateral Movement via SMB/WMI/RDP/SSH
      ↓
Post-access Credential Dumping on New Hosts
      ↓
Privilege Escalation → Repeat or Persist
```

---

## 🧠 OPSEC Considerations

Lateral movement is **high-risk** from a detection standpoint:

- Endpoint Detection and Response (EDR) tools often monitor:
  - PsExec patterns
  - Remote service creation
  - Admin share access (e.g., `C$`, `ADMIN$`)
  - WMI and WinRM execution
- Logs to monitor:
  - `Security.evtx` (event ID 4624, 4672)
  - PowerShell logs (event ID 4104)
  - Sysmon logs (network connections, process creation)

### 🔒 Evasion Tips

- Use **in-memory execution** (e.g., BOFs, reflectively loaded DLLs)
- Rename known tooling binaries
- Abandon PsExec in favor of `wmiexec.py` or C2-native features
- Stagger traffic and simulate user behavior

---

## 🧭 Where Lateral Movement Fits

```
Initial Access → Execution → Post-Ex Recon → Privilege Escalation → [ Lateral Movement ] → Credential Dumping → Objectives
```

It's often **iterative**, repeated as you discover more users, more systems, and gather more credentials.

---

## 📌 Summary

> Lateral movement isn't just a pathway—it's how red teamers and adversaries **conquer networks**. Without it, you're just a squatter on a box. With it, you're a threat actor expanding your territory.

Whether it's a domain controller or a Linux bastion host, lateral movement is how you reach your real targets.

---
