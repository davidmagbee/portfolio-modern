import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemaTypes/pageInfo'
import skill from './schemaTypes/skill'
import experience from './schemaTypes/experience'
import project from './schemaTypes/project'
import social from './schemaTypes/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, experience, project, social],
}
