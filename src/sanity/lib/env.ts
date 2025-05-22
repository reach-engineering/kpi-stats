import { StudioEnvironment } from '@/sanity/models/studio'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }
  
  return v
}

export const useCdn = false

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'testing',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'testing',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)
export const studioEnvironment = (process.env.NEXT_PUBLIC_SANITY_ENVIRONMENT ||
  'production') as StudioEnvironment

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-15'

/**
 * Used to configure edit intent links, for Presentation Mode, as well as to configure where the Studio is mounted in the router.
 */
export const studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3333'

/**
 * URL for preview functionality, defaults to localhost:3000 if not set
 */
export const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
