// Display labels for SSOT fields that are stored as English enum-like strings
// (project `type`, `country`). Prose fields are translated in the SSOT itself
// (descriptionEs etc.); these small vocabularies are cheaper to keep here.

const TYPE_ES = {
  'Information Intervention + RCT': 'Intervención informativa + RCT',
  'AI Intervention + RCT': 'Intervención con IA + RCT',
  'Education Technology': 'Tecnología educativa',
  'Chatbot / Information Intervention': 'Chatbot / Intervención informativa',
  'Housing Technology': 'Tecnología para vivienda',
  'Search and Information Platform': 'Plataforma de búsqueda e información',
  'Smart Matching Platform': 'Plataforma de emparejamiento inteligente',
  'Information Intervention': 'Intervención informativa',
  'National Admissions System': 'Sistema nacional de admisión',
  'Assignment Algorithm Operations + Information Intervention':
    'Operación del algoritmo de asignación + Intervención informativa',
  'Centralized Admissions Algorithm': 'Algoritmo de admisión centralizada',
  Research: 'Investigación',
  'Review paper + data platform': 'Artículo de revisión + plataforma de datos',
  'AI case-management scoping study': 'Estudio exploratorio de gestión de casos con IA',
  'Proposed school RCT': 'RCT escolar propuesto',
  'Web platform': 'Plataforma web',
  'Research + information intervention': 'Investigación + intervención informativa',
};

const COUNTRY_ES = {
  Brazil: 'Brasil',
  'Dominican Republic': 'República Dominicana',
  Peru: 'Perú',
  'United States': 'Estados Unidos',
};

export function typeLabel(type, lang) {
  if (!type || lang !== 'es') return type;
  return TYPE_ES[type] ?? type;
}

// Handles comma-joined values like "Chile, Peru, Brazil".
export function countryLabel(country, lang) {
  if (!country || lang !== 'es') return country;
  return country
    .split(', ')
    .map((c) => COUNTRY_ES[c] ?? c)
    .join(', ');
}
