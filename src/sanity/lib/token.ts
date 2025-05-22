import 'server-only'

export const token = process.env.SANITY_API_READ_TOKEN ?? 'update-this'

if (!token) {
  throw new Error('Missing SANITY_API_READ_TOKEN')
}
