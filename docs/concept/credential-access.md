---
id: credential-access
title: Credential Access Explained
description: Understand what credential access is, how attackers obtain them, and why they're essential for privilege escalation and lateral movement.
slug: /concept/credential-access
sidebar_label: Creds
sidebar_position: 13
tags:
  - post-exploitation
  - red-team
  - credential-access
  - password-dumping
  - token-theft
  - diataxis:explanation
---

# Credential Access

**Credential Access** refers to the techniques adversaries use to **steal account credentials**—passwords, tokens, hashes, or Kerberos tickets—from compromised systems.

Credential theft is **one of the most impactful post-exploitation activities** because it enables:

- **Privilege escalation**
- **Lateral movement**
- **Persistence**
- **Impersonation of legitimate users**

---

## 🔐 What Counts as a Credential?

- Plaintext passwords
- NTLM hashes (used for Pass-the-Hash)
- Kerberos tickets (used for Pass-the-Ticket)
- SSH private keys
- Web cookies / API tokens
- Vault credentials
- Password manager exports

---

## 🧠 Why Credential Access Matters

Credentials are the **keys to the kingdom** in any environment.

Once an attacker captures one:

- They can impersonate the user in that context.
- If reused across services, the compromise spreads.
- If the user is privileged, the attacker gains full control.

It also supports **persistence**: even if malware is removed, valid credentials can provide access again.

---

## 🧪 Common Credential Theft Techniques

| Technique                  | Target                       | Tooling                     |
|---------------------------|------------------------------|-----------------------------|
| **LSASS Dumping**         | Local logon session creds    | `mimikatz`, `procdump`, Cobalt Strike |
| **SAM & SYSTEM Hive Dump**| Local account hashes         | `reg save`, `secretsdump.py` |
| **DCSync**                | Pull hashes from DC          | `mimikatz`, `impacket-secretsdump` |
| **Kerberos Ticket Harvesting** | TGT/TGS reuse           | `kerberoast`, `Rubeus`, `klist` |
| **Credential Manager**    | Windows vault data           | `cmdkey`, `vaultcmd`         |
| **Memory Injection**      | Inline creds in memory       | Cobalt Strike BOFs, Sliver   |
| **Web Credentials**       | Browser stores               | `LaZagne`, `SharpChrome`, `TokenTactics` |
| **Keylogging / Clipboard**| User input                   | Built-in to many C2s         |
| **Phishing / Harvesting** | User-supplied via bait       | HTA macros, spoofed portals  |

---

## 🧬 Windows-Specific Artifacts

- `lsass.exe`: Memory contains password hashes and Kerberos tickets.
- Registry hives:
  - `HKLM\SAM` — Local accounts
  - `HKLM\SYSTEM` — SysKey for decryption
  - `HKLM\SECURITY` — LSA secrets
- Credential Manager: `cmdkey /list`
- Token impersonation: `mimikatz` or `MakeToken` in C2

---

## 🐧 Linux Targets

- `/etc/shadow`: Hashes of local users (needs root)
- `~/.ssh/id_rsa`: Private keys
- `~/.bash_history`, `.zshrc`: Command history revealing passwords
- SSH agent: `ssh-add -l`
- Vaults like `gnome-keyring` or `KWallet`

---

## 🧠 OPSEC and Detection

Credential access is **high-value, high-risk**.

### 🛡️ Monitored Behaviors

- `lsass.exe` access from non-system processes
- Registry exports of SAM/SYSTEM
- High handle requests on sensitive processes
- DCSync attempts via event logs (`4662`)
- `cmdkey`, `vaultcmd` execution

### 🔒 Evasion Tips

- Use in-memory or BOF-based tools
- Delay or stagger activity post-access
- Use `rundll32`, `comsvcs.dll` for stealth LSASS dumps
- Rename tooling or blend with legitimate system binaries (LOLBAS)

---

## 📌 Credential Theft Lifecycle

```plaintext
Initial Access
      ↓
Process Injection / Persistence
      ↓
Credential Dumping (LSASS / SAM / Vault)
      ↓
Lateral Movement (SMB / RDP / SSH)
      ↓
Repeat
```

Credential access is often **chained**, where new hosts yield new creds, leading to further access.

---

## 💡 Real-World Examples

- **APT29** uses Kerberos ticketing (Golden Ticket attacks)
- **Cobalt Strike users** frequently use `sekurlsa::logonpasswords` after privilege escalation
- **Sliver/Empire** modules automate SAM dump + reuse

---
