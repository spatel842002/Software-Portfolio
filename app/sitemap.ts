import { siteMeta } from '../data/site';
import { projects } from '../data/projects';

export default function sitemap() {
  const baseUrl = siteMeta.siteUrl;
  return [
    { url: baseUrl + '/', lastModified: new Date().toISOString() },
    { url: baseUrl + '/projects', lastModified: new Date().toISOString() },
    ...projects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}`, lastModified: new Date().toISOString() })),
    { url: baseUrl + '/experience', lastModified: new Date().toISOString() },
    { url: baseUrl + '/systems', lastModified: new Date().toISOString() },
    { url: baseUrl + '/skills', lastModified: new Date().toISOString() },
    { url: baseUrl + '/resume', lastModified: new Date().toISOString() },
    { url: baseUrl + '/contact', lastModified: new Date().toISOString() }
  ];
}
