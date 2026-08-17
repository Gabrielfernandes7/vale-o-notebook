const routes = [
  '/',
  '/notebooks',
  '/melhor-notebook-ate-3000',
  '/notebook-para-faculdade',
  '/notebook-para-programacao',
  '/qual-notebook-comprar',
];

export const prerender = true;

export function GET({ site }: { site?: URL }) {
  const configuredSite = import.meta.env.PUBLIC_SITE_URL;
  const base = configuredSite ? new URL(configuredSite) : site ?? new URL('https://vale-o-notebook.vercel.app');

  const urls = routes.map((route) => `<url><loc>${new URL(route, base)}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
