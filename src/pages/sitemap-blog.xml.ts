import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

const siteUrl = 'https://vidaacessivel.pt';

export const GET: APIRoute = async () => {
  const articles = await getCollection('recursos');
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${articles
  .map(
    (article) => `  <url>
    <loc>${siteUrl}/recursos/${article.slug}/</loc>
    <lastmod>${article.data.updatedDate || article.data.pubDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
  <url>
    <loc>${siteUrl}/recursos/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
