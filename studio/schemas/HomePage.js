export default {
  name: 'Home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'template_key',
      title: 'Template Key',
      type: 'reference',
      to: { type: 'templateKey' }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'shortBlockContent',
      to: { type: 'shortBlockContent' }
    },
    {
      name: 'followUp',
      title: 'Follow Up',
      type: 'shortBlockContent',
      to: { type: 'shortBlockContent' }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      to: { type: 'blockContent' }
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string'
    },
    {
      name: 'metaTags',
      title: 'Meta Tags',
      type: 'string'
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
