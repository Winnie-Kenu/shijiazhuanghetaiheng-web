import { client } from './sanity';

export async function getHomePageData() {
  const query = `*[_type == "homePage"][0]`;
  return await client.fetch(query);
}

export async function getSiteSettings() {
  const query = `*[_type == "siteSettings"][0]`;
  return await client.fetch(query);
}

export async function getDoctors() {
  const query = `*[_type == "doctor"]`;
  return await client.fetch(query);
}

export async function getDoctorBySlug(slug: string) {
  const query = `*[_type == "doctor" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}
