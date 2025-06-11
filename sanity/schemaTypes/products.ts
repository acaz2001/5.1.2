import {defineType, defineField} from 'sanity'

export const Products = defineType({
  name: 'Product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'details',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'price',
      title: 'Price (RSD)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),

    defineField({
      name: 'salePrice',
      title: 'Sale Price (RSD)',
      type: 'number',
    }),

    defineField({
      name: 'inStock',
      title: 'Stock Quantity',
      type: 'number',
      initialValue: 0,
    }),

    defineField({
      name: 'isActive',
      title: 'Visible on Site',
      type: 'boolean',
      initialValue: true,
    }),

    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Variant Name' },
            { name: 'color', type: 'string', title: 'Color' },
            { name: 'size', type: 'string', title: 'Size' },
            { name: 'price', type: 'number', title: 'Price Override' },
            { name: 'stock', type: 'number', title: 'Stock' },
            {
              name: 'image',
              type: 'image',
              title: 'Variant Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
      ],
    }),
  ],
})





