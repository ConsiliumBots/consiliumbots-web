// Lightweight i18n helpers for the bilingual (English / Spanish) site.
// English lives at the root (/, /what-we-do, ...) and Spanish under /es/.

export const defaultLang = 'en';
export const languages = ['en', 'es'];

// Detect the language from a URL pathname.
export function getLang(pathname) {
  return pathname === '/es' || pathname === '/es/' || pathname.startsWith('/es/')
    ? 'es'
    : 'en';
}

// Return the path with any /es prefix removed (always starts with "/").
export function stripLang(pathname) {
  if (pathname === '/es' || pathname === '/es/') return '/';
  if (pathname.startsWith('/es/')) return pathname.slice(3);
  return pathname;
}

// Build the localized path for a base path ("/" , "/what-we-do", ...).
export function localizePath(basePath, lang) {
  const clean = basePath === '/' ? '' : basePath.replace(/\/$/, '');
  return lang === 'es' ? `/es${clean || '/'}` : clean || '/';
}

// UI strings shared across the layout/components.
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.whatWeDo': 'What We Do',
    'nav.projects': 'Projects',
    'nav.research': 'Research',
    'nav.team': 'Team',
    'nav.blog': 'Blog',
    'nav.workingPapers': 'Working Papers',
    'nav.contact': 'Contact',
    'nav.langSwitch': 'ES',
    'nav.langSwitchLabel': 'Ver en español',
    'blog.title': 'Blog',
    'blog.intro':
      'Notes on the research and the systems behind it — what we are learning from building information tools with governments.',
    'blog.back': '← All posts',
    'blog.readMore': 'Read the post',
    'blog.updated': 'Updated',
    'blog.readPaper': 'Read the paper',
    'blog.downloadPdf': 'Download the PDF',
    'blog.empty': 'No posts yet.',
    'blog.englishNotice':
      'This post is available in English only.',
    'footer.mission':
      'ConsiliumBots is a nonprofit organization with the mission of fostering technological innovation to connect government data with the community.',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.whatWeDo': 'Qué Hacemos',
    'nav.projects': 'Proyectos',
    'nav.research': 'Investigación',
    'nav.team': 'Equipo',
    'nav.blog': 'Blog',
    'nav.workingPapers': 'Documentos de Trabajo',
    'nav.contact': 'Contacto',
    'nav.langSwitch': 'EN',
    'nav.langSwitchLabel': 'View in English',
    'blog.title': 'Blog',
    'blog.intro':
      'Notas sobre la investigación y los sistemas detrás de ella: lo que aprendemos construyendo herramientas de información junto a gobiernos.',
    'blog.back': '← Todas las entradas',
    'blog.readMore': 'Leer la entrada',
    'blog.updated': 'Actualizado',
    'blog.readPaper': 'Leer el documento',
    'blog.downloadPdf': 'Descargar el PDF',
    'blog.empty': 'Aún no hay entradas.',
    'blog.englishNotice':
      'Esta entrada está disponible sólo en inglés.',
    'footer.mission':
      'ConsiliumBots es una organización sin fines de lucro cuya misión es fomentar la innovación tecnológica para conectar los datos del gobierno con la comunidad.',
  },
};

// Translator factory: const t = useTranslations(lang); t('nav.home')
export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}
