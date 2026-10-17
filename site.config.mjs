// Single place for deployment settings. Change these when you get a custom domain.
export default {
  // Full origin of the deployed site (no trailing slash).
  site: process.env.SITE_URL || 'https://corrigk.github.io',
  // Sub-path. '/joshua-portfolio' for a GitHub *project* page (user.github.io/joshua-portfolio).
  // Use '' (empty) for a user page or a custom domain.
  base: process.env.SITE_BASE ?? '/joshua-portfolio',
  // Decorative motif: 'aircraft' (rotating B-1B, jet transitions) or 'space' (constellation, rockets).
  motif: 'space',
  // Show every project on the Timeline page automatically (in addition to timeline entries).
  timelineIncludesProjects: true,
  // Privacy-friendly visit counts (no cookies). Create a free account at https://www.goatcounter.com,
  // then put your code here, e.g. 'mysite' for https://mysite.goatcounter.com. Empty = no analytics.
  goatcounter: process.env.GOATCOUNTER || '',
  // Order of category filters and home-page stats.
  categoryOrder: ['hardware', 'fun', 'software'],
};
