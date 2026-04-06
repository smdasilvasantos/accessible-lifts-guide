import type { APIRoute } from 'astro';

const siteUrl = 'https://vidaacessivel.pt';
const today = new Date().toISOString().split('T')[0];

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/sobre/', priority: '0.7', changefreq: 'monthly' },
  { url: '/contacto/', priority: '0.7', changefreq: 'monthly' },
  { url: '/pedir-orcamento/', priority: '0.9', changefreq: 'monthly' },
  { url: '/catalogo-gratis/', priority: '0.8', changefreq: 'monthly' },
  { url: '/politica-de-privacidade/', priority: '0.3', changefreq: 'yearly' },
  // Equipment hubs
  { url: '/equipamentos/elevadores-de-escadas/', priority: '0.9', changefreq: 'weekly' },
  { url: '/equipamentos/elevadores/', priority: '0.9', changefreq: 'weekly' },
  { url: '/equipamentos/plataformas-elevatorias/', priority: '0.9', changefreq: 'weekly' },
  // Sub-types - stairlifts
  { url: '/elevadores-de-escadas/escadas-retas/', priority: '0.8', changefreq: 'monthly' },
  { url: '/elevadores-de-escadas/escadas-curvas/', priority: '0.8', changefreq: 'monthly' },
  { url: '/elevadores-de-escadas/escadas-exteriores/', priority: '0.8', changefreq: 'monthly' },
  { url: '/elevadores-de-escadas/escadas-estreitas/', priority: '0.8', changefreq: 'monthly' },
  // Sub-types - home elevators
  { url: '/elevadores-residenciais/1-andar/', priority: '0.8', changefreq: 'monthly' },
  { url: '/elevadores-residenciais/sem-poco/', priority: '0.8', changefreq: 'monthly' },
  { url: '/elevadores-residenciais/compactos/', priority: '0.8', changefreq: 'monthly' },
  { url: '/elevadores-residenciais/hidraulicos/', priority: '0.8', changefreq: 'monthly' },
  { url: '/elevadores-residenciais/pneumaticos/', priority: '0.8', changefreq: 'monthly' },
  // Sub-types - platforms
  { url: '/plataformas-elevatorias/escadas-retas/', priority: '0.8', changefreq: 'monthly' },
  { url: '/plataformas-elevatorias/escadas-curvas/', priority: '0.8', changefreq: 'monthly' },
  { url: '/plataformas-elevatorias/exteriores/', priority: '0.8', changefreq: 'monthly' },
  // Price pages
  { url: '/equipamentos/elevadores-de-escadas/preco/', priority: '0.9', changefreq: 'monthly' },
  { url: '/equipamentos/elevadores/preco/', priority: '0.9', changefreq: 'monthly' },
  { url: '/equipamentos/plataformas-elevatorias/preco/', priority: '0.9', changefreq: 'monthly' },
  // Solution pages
  { url: '/solucoes-para-subir-escadas/', priority: '0.8', changefreq: 'monthly' },
  { url: '/cadeiras-elevatorias-para-idosos/', priority: '0.8', changefreq: 'monthly' },
  { url: '/solucoes-para-cadeiras-de-rodas/', priority: '0.8', changefreq: 'monthly' },
  { url: '/adaptar-casa-mobilidade-reduzida/', priority: '0.8', changefreq: 'monthly' },
  { url: '/acessibilidade-condominios/', priority: '0.8', changefreq: 'monthly' },
  // Blog
  { url: '/recursos/', priority: '0.8', changefreq: 'weekly' },
];

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
