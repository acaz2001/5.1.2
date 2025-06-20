import { type SchemaTypeDefinition } from 'sanity'
import { Products } from './products'
import category from './category'
import { blog } from './blog'
import categoryBlogs from './categoryBlogs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products, category, blog, categoryBlogs],
}
