import { SchemaTypeDefinition } from 'sanity'

import { page } from './documents/page'

const documents: SchemaTypeDefinition[] = [page]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents]
}
