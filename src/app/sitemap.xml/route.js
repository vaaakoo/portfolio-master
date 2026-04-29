import { NextResponse } from 'next/server'

export async function GET() {
    const baseUrl = 'https://vjanikashvili.dev'
    const lastMod = process.env.NEXT_PUBLIC_LASTMOD || '2026-04-29'

    const routes = [
        { path: '', priority: 1.0 },     // homepage
        { path: 'en', priority: 0.9 },
        { path: 'ka', priority: 0.9 }
    ]

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
        .map(
            ({ path, priority }) => `
  <url>
    <loc>${baseUrl}${path ? `/${path}` : ''}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
        )
        .join('')}
</urlset>`

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}