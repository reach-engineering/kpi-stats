import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@/sanity/lib/env'

export const client = createClient({
  projectId: projectId ?? '',
  dataset: dataset ?? '',
  apiVersion: apiVersion ?? '2023-10-01', // use current UTC date - see "specifying API version"!
  useCdn: useCdn ?? false // Set to false if statically generating pages, using ISR or tag-based revalidation
})
