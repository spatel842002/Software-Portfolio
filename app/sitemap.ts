import { siteMeta } from '../data/site';

export default function sitemap() {
  const baseUrl = siteMeta.siteUrl;
  return [
    { url: baseUrl + '/', lastModified: new Date().toISOString() },
    { url: baseUrl + '/projects', lastModified: new Date().toISOString() },
    { url: baseUrl + '/experience', lastModified: new Date().toISOString() }
  ];
}
