export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/register'],
      },
    ],
    sitemap: 'https://omytech.co.ke/sitemap.xml',
  };
}
