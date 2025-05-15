'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from '@/sanity/lib/env'
import { schema } from '@/sanity/schemas/schemaTypes'
import { structure } from '@/sanity/structure/structure'
import { visionTool } from '@sanity/vision'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

export default defineConfig({
  title: 'KPI Stats',
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion })
  ]
})
