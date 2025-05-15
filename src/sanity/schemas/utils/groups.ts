import { FieldGroupDefinition } from 'sanity'

export enum DocumentGroup {
  'Content' = 'content',
  'Metadata' = 'metadata',
  'SEO' = 'seo'
}

export const DOCUMENT_GROUPS: FieldGroupDefinition[] = [
  { name: DocumentGroup.Content, default: true },
  { name: DocumentGroup.Metadata },
  { name: DocumentGroup.SEO }
]

export function getDocumentGroups(group: DocumentGroup[]): FieldGroupDefinition[] {
  return group
    .map((group) => DOCUMENT_GROUPS.find((g) => g.name === group))
    .filter(Boolean) as FieldGroupDefinition[]
}
