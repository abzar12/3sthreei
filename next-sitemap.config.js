/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://3sthreei.com', // your domain
  generateRobotsTxt: true,        // optional, generates robots.txt
  sitemapSize: 5000,               // optional, limits pages per sitemap
  changefreq: 'daily',             // optional, how often pages change
  priority: 0.7,                   // optional, default priority for pages
}