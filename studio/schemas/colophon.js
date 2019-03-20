export default {
  name: 'Colophon',
  title: 'Colophon Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string'
    },
    {
      name: 'content',
      title: 'Content',
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
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        // subtitle: subTitle
        subtitle: author && `by ${author}`
      })
    }
  }
}
