const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const hostname = 'https://www.surajitsen.me'; // Replace with your main domain
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/project', changefreq: 'monthly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/resume', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const stream = new SitemapStream({ hostname });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  writeStream.write(data.toString());
  writeStream.end();
}).catch((err) => {
  console.error('Error generating sitemap:', err);
});

// Create a sitemap index file
const sitemapIndex = new SitemapStream({ hostname });
const indexWriteStream = createWriteStream('./public/sitemap_index.xml');

streamToPromise(Readable.from([
  { url: 'https://www.surajitsen.me/sitemap.xml' },
  { url: 'https://blog.surajitsen.me/sitemap.xml' }
]).pipe(sitemapIndex)).then((data) => {
  indexWriteStream.write(data.toString());
  indexWriteStream.end();
}).catch((err) => {
  console.error('Error generating sitemap index:', err);
});
