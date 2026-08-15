# Public website data

This directory is the source of truth for content published on the ConsiliumBots website.

It is intentionally separate from the private structured records in `consiliumbots-data/data/`. Do not copy internal records wholesale and do not build an automatic full-record synchronization pipeline.

## Publication workflow

1. Identify the approved internal fact or update.
2. Transfer only publication-safe fields into the applicable file here.
3. Confirm names, roles, project status, links, and image paths.
4. Exclude private contact information, budgets, payroll, internal notes, compliance records, unpublished findings, and partner-confidential material.
5. Review and build the website before deployment.

## File ownership

| File | Public responsibility |
|---|---|
| `team.json` | Approved public team profiles |
| `projects.json` | Approved public project descriptions and outcomes |
| `partners.json` | Approved public partner listings |
| `site-data.js` | Global public copy, links, and site configuration |
| `research.json` | Approved public research references |

If public content conflicts with an internal record, resolve the factual discrepancy in `consiliumbots-data` first, then make a deliberate public update here.
