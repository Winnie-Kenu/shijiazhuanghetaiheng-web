import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const client = createClient({
  projectId: 'ivdwksbc',
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: false, // Set to false so edits reflect immediately
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
