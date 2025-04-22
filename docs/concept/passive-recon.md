---
id: passive-recon
title: Passive Recon
sidebar_label: Passive Recon
sidebar_position: 6
---

---

### What Is Passive Recon?

**Passive recon** is the first stage of any offensive operation. It focuses on silently gathering as much intelligence as possible about a target without directly interacting with its systems.

This stage mimics how real-world adversaries — particularly APTs — prepare their campaigns: quietly building a map of the target's digital footprint to inform tooling, tactics, and delivery methods.

Unlike active recon, passive reconnaissance avoids detection and does **not** touch the target infrastructure directly.

---

### Why It Matters

Passive reconnaissance is foundational to stealthy operations. It allows Red Teams to:

- Identify attack surface without tipping off defenders.
- Understand organizational structure, domains, and technologies in use.
- Craft targeted phishing payloads, pretexts, or username formats.
- Discover potentially exposed data, credentials, or infrastructure.

An effective recon phase can significantly reduce noise during later stages like delivery, exploitation, or lateral movement.

---

### Core Objectives of Passive Recon

- Discover registered domains and subdomains
- Identify public IP ranges and cloud assets
- Map employee structure and naming conventions
- Gather email formats, phone numbers, and physical office locations
- Detect third-party providers or acquisitions
- Identify previously leaked credentials or sensitive data

---

### Common Data Sources and Tools

| Source | Purpose |
|--------|---------|
| **WHOIS** | Domain registration info (admin names, emails, registrars) |
| **Certificate Transparency Logs** | Identify subdomains via SSL certs (e.g., [crt.sh](https://crt.sh)) |
| **Search Engines** | Google dorking for exposed files, sites, login pages |
| **Social Media** | Employee names, job roles, spear phishing pretexts |
| **GitHub/GitLab** | Accidental secrets, hardcoded credentials, internal repo names |
| **Shodan/Censys** | Public-facing services, misconfigurations, IoT assets |
| **Wayback Machine** | Archived versions of internal portals or outdated endpoints |
| **Hunter.io / Email Permutator** | Generate email addresses and patterns |
| **BreachData / DeHashed / HaveIBeenPwned** | Check for compromised accounts or passwords |

🛠 **Tools**:
- `theHarvester`
- `Amass` (in passive mode)
- `Spiderfoot`
- `Recon-ng`
- `FOCA`
- Custom Python scrapers

---

### OPSEC Considerations

Passive recon must leave minimal to no footprint. That means:
- No direct scanning of assets (use third-party sources instead).
- Avoid authenticated lookups tied to your operator identity.
- Use VPNs, Tor, or disposable VMs for web activity when needed.
- Avoid triggering 3rd-party alerting services tied to corporate monitoring.

📌 *Tip:* If your recon tools use APIs (e.g., Shodan, Censys), be mindful of API keys leaking OPSEC identifiers.

---

### Red Team Application

Passive recon data feeds directly into:
- **Phishing pretext development** (e.g., impersonating HR, vendors, executives)
- **Infrastructure targeting** (e.g., old VPN portals, test environments)
- **Username generation** for brute-force or password spraying
- **Attack surface reduction** (by choosing only stealthy vectors)

In Red Team operations, this data is typically collected silently over several days and used to build the initial campaign infrastructure (e.g., fake websites, domain fronts, tailored payloads).

---

### Conclusion

Passive reconnaissance is where every Red Team operation truly begins. It’s quiet, powerful, and often overlooked — but the intelligence gathered here determines the success, stealth, and precision of every phase that follows.

By mastering passive recon, you move from opportunistic attacks to informed campaigns that mirror advanced threat actor behavior.

---
