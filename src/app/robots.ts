import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.pizzicostanzi.it/sitemap.xml',
    host: 'https://www.pizzicostanzi.it',
  }
}
