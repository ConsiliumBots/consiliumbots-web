// Pre-filtered public-safe snapshots committed alongside this file.
// To regenerate after SSOT changes in consiliumbotsData:
//   python scripts/query-data.py export-site-data [path/to/this/src/data/]
// Never read raw YAML here — those files contain PII.
import team from './team.json';
import projects from './projects.json';
import partners from './partners.json';

export { team, projects, partners };

export const activeTeam = team.filter((m) => m.status === 'active');
export const researchAffiliates = team.filter((m) => m.status === 'research-affiliate');
export const researchAssociates = team.filter((m) => m.status === 'research-associate');
export const board = team.filter((m) => m.status === 'board');
export const alumni = team.filter((m) => m.status === 'alumni');
export const collaborators = team.filter((m) => m.status === 'collaborator');
