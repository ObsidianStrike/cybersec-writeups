---
id: data-exfil
title: Post-Exploitation Data Exfiltration
description: Understand how attackers extract stolen data from compromised systems using stealthy and resilient techniques.
slug: /concept/data-exfil
sidebar_label: Data Exfil
sidebar_position: 19
tags:
  - post-exploitation
  - data-exfiltration
  - diataxis:explanation
  - attacker-objectives
  - T1041
  - T1048
  - T1567
---

# 📤 Data Exfiltration: Explained

Data exfiltration is the phase where attackers **move collected data out of the victim environment**. It’s the transition from passive access to active theft—often the phase most scrutinized by blue teams, auditors, and incident responders.

This stage follows reconnaissance, privilege escalation, and data collection—and often precedes attacker withdrawal or persistence resets.

---

## 🎯 Why Exfiltration Matters

**Exfiltration is the payoff.** Whether the goal is espionage, extortion, or blackmail, exfiltrated data enables adversaries to:

- Sell or leak sensitive data.
- Leverage information for political or financial gain.
- Abuse credentials and secrets in later campaigns.
- Destroy trust and reputations.

Often, attackers **stage** data in a local archive (e.g., `.zip`, `.rar`, `.7z`) and then extract it from the system in ways designed to avoid detection or trigger minimal alerts.

---

## 🛣️ Exfiltration Paths (aka "Channels")

| Channel                | Description                                                | MITRE ID        |
|------------------------|------------------------------------------------------------|------------------|
| 🌐 HTTP/HTTPS          | Upload via web traffic or reverse proxy (e.g., C2 server)  | `T1041`          |
| 📩 Email               | Send stolen files as attachments or body payloads          | `T1048.003`      |
| 📁 Cloud Services      | Google Drive, Dropbox, OneDrive, MEGA, etc.                | `T1567.002`      |
| 📡 DNS Tunneling       | Encode data in DNS queries                                 | `T1048.002`      |
| 🔗 SMB/WebDAV Shares   | Push to mounted network shares or WebDAV endpoints         | `T1020`          |
| 🔌 External Drive      | Manual copy to USB or mapped removable drives              | `T1052`          |
| 🔄 C2 Protocols        | Exfil via beacon channels (e.g., Cobalt Strike, Covenant)  | `T1041`, `T1095` |

---

## 🕵️ Common Techniques

| Technique                     | Notes                                                                 |
|-------------------------------|-----------------------------------------------------------------------|
| 🔒 Use of Encrypted Channels  | HTTPS or DNS over HTTPS to bypass inspection                         |
| 🧳 Staging Archives           | Compress data to reduce size and evade filters                       |
| 🪤 File Masquerading          | Rename `.rar` or `.7z` to `.jpg`, `.docx`                             |
| 🧬 Steganography              | Embed files in images or audio                                       |
| 🔁 Chunked Exfiltration       | Send partial data in chunks to avoid DLP detection                   |
| ⏱️ Timing Evasion             | Exfil during off-hours or spread over long intervals                 |

---

## ⚠️ OPSEC Considerations

| Vector                 | Why It Matters                                      |
|------------------------|-----------------------------------------------------|
| DLP Systems             | Trigger on sensitive data signatures or extensions |
| Traffic Anomalies      | Sudden upload spikes raise red flags               |
| Protocol Misuse        | DNS overuse or ICMP with payloads is suspicious    |
| EDR/AV Correlation     | May detect archive creation and transfer behaviors |
| Proxy Logging          | Reveals URLs, destinations, file sizes             |

---

## 🛠️ Tools Used in the Wild

| Tool / Technique       | Function                                            |
|------------------------|-----------------------------------------------------|
| 🧰 `Rclone`             | Sync data to cloud endpoints                       |
| 🐍 `Exfiltrator-TS`     | Exfiltrate over multiple protocols                 |
| 💻 `PowerShell` + `Invoke-WebRequest` | Upload to attacker-controlled hosts      |
| 📦 `curl` / `wget`     | Push archives to HTTP servers                      |
| 🪪 Custom malware       | Embeds data exfil in beacon callbacks              |

---

## 🔎 Real-World Examples

| Incident                      | Exfil Method                                |
|-------------------------------|---------------------------------------------|
| SolarWinds / UNC2452          | Encrypted HTTP POST traffic to C2          |
| Lazarus Group (Sony Breach)   | Manual ZIP + transfer via SMB              |
| Conti Playbook                | Rclone sync to MEGA.nz                     |
| APT28 (Fancy Bear)            | DNS tunneling via custom implant           |

---

## 🧩 Defensive Strategies

| Control                       | Countermeasure                          |
|-------------------------------|------------------------------------------|
| 💼 Egress Filtering           | Block unnecessary outbound protocols     |
| 🔍 DLP Systems                | Detect keywords, extensions, patterns    |
| 📉 Network Anomaly Detection | Alert on spikes in outbound traffic      |
| 🔑 Zero Trust Access         | Restrict upload permissions per context  |
| 📦 File Access Monitoring     | Detect ZIP creation or mass reads        |

---

## 🔚 Summary

Exfiltration marks the **final step** in a successful compromise, where data moves from your systems to attacker-controlled infrastructure.

> 🧠 “If you’re monitoring ingress but not egress, you’re half-blind.”

---
