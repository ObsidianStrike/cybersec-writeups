---
id: data-collection
title: Post-Exploitation Data Collection
description: Understand how adversaries locate, stage, and exfiltrate sensitive data after gaining access to systems.
slug: /concept/data-collection
sidebar_label: Data Collection
sidebar_position: 18
tags:
  - post-exploitation
  - data-collection
  - diataxis:explanation
  - attacker-objectives
  - T1552
  - T1005
---

# 🗄️ Data Collection: Explained

Once access is established and the attacker has escalated privileges, the next step is often **data collection**—locating, staging, and preparing **valuable data for exfiltration or analysis**. This is a high-value phase where adversaries pursue specific intelligence goals aligned with the campaign's purpose.

---

## 🎯 Why Data Collection Matters

This stage transforms access into **actionable intelligence**.

- 📜 Intellectual property can be copied.
- 🧾 Credentials and tokens can be reused.
- 🔐 Secrets in memory or config files can provide deeper access.
- 📦 Archives or databases may contain the crown jewels.

---

## 📂 What Kind of Data is Targeted?

| Category             | Examples                                  | MITRE ATT&CK IDs          |
|----------------------|-------------------------------------------|----------------------------|
| 🔐 Credentials       | `.git-credentials`, `secrets.xml`, LSASS  | `T1555`, `T1003`, `T1552`  |
| 🧾 Documents         | Contracts, R&D, strategy docs              | `T1005`, `T1119`           |
| 💳 Financial Data    | Invoices, payment records, banking files  | `T1005`, `T1213`           |
| 🛠️ Configs/Secrets  | API keys, SSH keys, `.env` files           | `T1552.001`, `T1552.004`   |
| 🧠 Behavioral Logs   | Keystrokes, screen captures, clipboard     | `T1056`, `T1113`, `T1115`  |
| 📸 Media             | Video/Audio/Photos (esp. in espionage)    | `T1123`, `T1125`           |
| 🛡️ Security Artifacts | AV logs, SIEM configs, firewall rules     | `T1083`, `T1518`           |

---

## 🔍 Collection Techniques

| Technique                        | Description                                       |
|----------------------------------|---------------------------------------------------|
| 🧠 Memory scraping               | Grabbing secrets from RAM or process memory       |
| 📁 Directory traversal           | Recursively searching home dirs and shares        |
| 🧪 Keyword scanning              | Looking for "password", "confidential", etc.      |
| 🗄️ Registry scraping            | For credential remnants or configuration info     |
| 📦 Local staging                 | Archiving data (ZIP, RAR) before exfil            |
| 📋 Clipboard/keylog monitoring   | Capturing transient but sensitive user input      |

---

## ⚖️ OPSEC & Noise Considerations

| Concern         | Description                                     |
|------------------|-------------------------------------------------|
| 🔊 File Access Logs | Bulk reads can trigger DLP or AV logging     |
| 🚨 EDR Detection   | Suspicious API calls (e.g., LSASS access)     |
| 🔄 Collection Loops| May indicate automation, risk triggering SIEM |
| 🕵️‍♂️ Staging Clues | Use of `C:\Users\Public` is often monitored   |

---

## 🛠️ Common Tools

| Tool/Framework     | Purpose                               |
|--------------------|----------------------------------------|
| 🦈 Mimikatz         | Credentials from memory, DPAPI         |
| 🧬 SharpHound       | AD recon, collects user/group data     |
| 📦 WinRAR/7-Zip     | Staging files for exfil                |
| 🧠 PowerView        | File share enumeration and discovery    |
| 🪟 Seatbelt         | Pulls system artifacts and secrets     |
| 🛒 Rclone           | Automated sync to cloud exfil targets  |

---

## 🎓 Real-World Examples

| Incident              | Data Targeted                          |
|-----------------------|----------------------------------------|
| SolarWinds Breach     | Red Team reports, credentials          |
| Equifax Breach        | SSNs, PII from DBs                     |
| Conti Playbook Leaks  | PowerShell scripts for ZIP staging     |

---

## 🔚 Summary

**Data collection** is the bridge between access and impact.

- It prepares for **exfiltration**, **intelligence analysis**, or **future compromise**.
- Defensive teams must **monitor usage patterns**, not just tool signatures.

> 🧠 *If an attacker is reading your documentation, configs, and exports—you're in the collection phase. Your secrets are next.*

---
