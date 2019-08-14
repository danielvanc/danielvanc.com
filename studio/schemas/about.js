export default {
  name: 'About',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'professionIntro',
      title: 'Profession Intro',
      type: 'blockContent',
      to: { type: 'blockContent' }
    },
    {
      name: 'body',
      title: 'Personal life background',
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
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        title: "About" && `Overview page by ${author}`
      })
    }
  }
}
