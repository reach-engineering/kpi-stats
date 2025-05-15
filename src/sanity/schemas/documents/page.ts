import { defineField, defineType } from 'sanity'

import { DocumentGroup, getDocumentGroups } from '../utils/groups'

export const page = defineType({
  groups: getDocumentGroups([DocumentGroup.Content, DocumentGroup.Metadata, DocumentGroup.SEO]),
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'The title of the article',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'content'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 200
      },
      group: 'content'
    })
  ]
})
