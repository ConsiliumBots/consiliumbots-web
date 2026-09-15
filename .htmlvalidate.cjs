// html-validate runs over the built site in CI (`npm run check:html`).
module.exports = {
  extends: ['html-validate:recommended'],
  rules: {
    // Astro writes a lowercase doctype on the /eng/* redirect stubs; casing is meaningless.
    'doctype-style': 'off',
    // Page titles are "<page name> | ConsiliumBots"; long project names push past 70
    // characters and the name is the part that has to stay intact.
    'long-title': 'off',
    // The team-page loop autoplays muted with a visible pause control and is
    // disabled under prefers-reduced-motion, which is what the rule guards against.
    'no-autoplay': 'off',
  },
};
