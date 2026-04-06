# Polaris LEAP SQL — Local AI Assistant Resources

Community resources from **Rochester Hills Public Library (RHPL)** for Polaris ILS sites
running a local AI model to help staff write SQL queries.

These files support a self-hosted [Open WebUI](https://github.com/open-webui/open-webui) +
[vLLM](https://github.com/vllm-project/vllm) stack running Qwen3. Full setup instructions
are in [`polaris-qwen-guide.md`](polaris-qwen-guide.md).

---

## What This Is

Rochester Hills Public Library runs a local AI assistant that helps staff write SQL for the
Polaris Find Tool, SSMS, and reporting. The model understands the Polaris 8.0 database schema
and generates Find-Tool-compatible queries — meaning SELECT-only, no semicolons, correct
`WITH (NOLOCK)` placement, and the right primary key fields for each record type.

This repository contains the knowledge base files and system prompts that power that assistant.
Everything targets **Polaris 8.0** on a SQL Server backend.

---

## Hardware Requirements

A GPU is required. RHPL runs **Qwen3-14B** on an AMD Radeon AI PRO R9700 (32 GB VRAM).

| Model | Min VRAM | Notes |
|-------|----------|-------|
| Qwen3-7B | ~10 GB | Faster; good SQL quality |
| Qwen3-14B | ~16 GB | Recommended — RHPL's current model |
| Qwen3-14B-AWQ | ~10–12 GB | Quantized; good if 16 GB is tight |
| Qwen3-32B-AWQ | ~22 GB | Higher quality; useful for complex reporting queries |

Any NVIDIA (CUDA) or AMD (ROCm) GPU will work. CPU-only inference is too slow for
interactive SQL generation.

---

## Repository Layout

```
polaris-qwen-guide.md    Full setup guide — start here
schema/                  Polaris 8.0 database schema reference files
sql-queries/             Example SQL queries organized by functional area
prompts/                 System prompts for Open WebUI model configuration
sync-to-repo.sh          Script to sync updated files from local build dirs
```

### `schema/` — Database Schema Reference

Load these files as a knowledge base in Open WebUI so the model understands table structures.

| File | Contents |
|------|----------|
| `polaris_core_tables.md` | Core tables quick reference with column descriptions — start here |
| `schema-lookup-values.md` | Lookup/code table values (status IDs, type IDs, patron codes, etc.) |
| `schema-view-definitions.md` | Key SQL view definitions |
| `schema-key-tables.md` | Annotated list of most important tables |
| `schema-columns-nullability.md` | Column nullability reference |
| `generating-your-schema.md` | **How to generate CREATE TABLE definitions from your own database** |

> **Note on CREATE TABLE files:** RHPL's CREATE TABLE schema files are not included here
> because they were generated from RHPL's live database and may not match your site's
> schema exactly. You should generate your own — see
> [`schema/generating-your-schema.md`](schema/generating-your-schema.md) for the SSMS
> query and instructions.

### `sql-queries/` — Example SQL by Functional Area

Hundreds of working SQL queries organized by functional area. Load alongside schema files.

| File | Contents |
|------|----------|
| `find-tool-reference.md` | Find Tool SQL syntax rules and confirmed patterns |
| `sql-patterns.md` | Common query patterns and anti-patterns |
| `patrons.md` | Patron record queries |
| `items.md` | Item record queries |
| `circulation.md` | Checkout, checkin, circulation history |
| `holds.md` | Hold requests and hold queue queries |
| `fines-accounts.md` | Fines and patron account queries |
| `notifications.md` | Notification and notice queries |
| `reporting.md` | Report-oriented queries |
| `cataloging.md` | Bibliographic and cataloging queries |
| `collection-management.md` | Collection management and weeding queries |
| `acquisitions.md` | Acquisitions queries |
| `administration.md` | Administrative and system queries |
| `data-management.md` | Data cleanup and maintenance queries |
| `ill.md` | Interlibrary loan queries |
| `bookmobile.md` | Bookmobile-specific queries |

### `prompts/` — System Prompts

| File | Contents |
|------|----------|
| `sql-system-prompts.md` | Two system prompts — one for Find Tool (LEAP), one for SSMS/reporting |

The prompts include RHPL-specific values (branch IDs, patron codes, lookup IDs).
**Adapt these to your library before use.** See the "Adapting for Your Library" section
in `polaris-qwen-guide.md`.

---

## How to Use These Files

### Load as an Open WebUI Knowledge Base

1. In Open WebUI, go to **Workspace → Knowledge → Create**
2. Upload all files from `schema/` and `sql-queries/` into a single knowledge base
   named "Polaris SQL Queries" (or similar)
3. In **Workspace → Models**, create or edit your SQL model
4. Under **Knowledge**, attach the knowledge base you created
5. Paste one of the system prompts from `prompts/sql-system-prompts.md` into the
   **System Prompt** field
6. Save the model

### Direct context injection

If using a different front-end or API client, concatenate the schema and SQL files
and include them as context in your system prompt or conversation.

---

## Notes for Other Libraries

- All queries target **Polaris 8.0** on SQL Server. Earlier versions may have schema
  differences, especially in acquisitions and patron tables.
- RHPL-specific values (city names, branch IDs, material type IDs, patron codes, etc.)
  appear throughout the SQL examples and system prompts. Audit and update these before
  deploying at your site.
- The schema files were generated from RHPL's live database. Table and column names are
  standard Polaris, but your site may have custom tables or extended columns.
- Find Tool SQL has specific constraints (no semicolons, no subqueries, `WITH (NOLOCK)`
  placement, `SELECT DISTINCT` required). See `sql-queries/find-tool-reference.md`.
- The `schema-lookup-values.md` file contains corrected status IDs verified against a
  live Polaris 8.0 database — several IDs differ from what the official documentation shows.

---

## Contributing

Pull requests welcome. If you have queries, schema notes, prompt improvements, or
corrections that would help other Polaris libraries, submit a PR or open an issue.

---

Rochester Hills Public Library — Rochester Hills, Michigan  
[rhpl.org](https://rhpl.org)
