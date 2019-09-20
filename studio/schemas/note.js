export default {
    name: 'Note',
    title: 'Notes',
    type: 'document',
    fields: [
        {
            name: 'template_key',
            title: 'Template Key',
            type: 'reference',
            to: {type: 'templateKey'},
        },
        {
            name: 'content_type',
            title: 'Content Type',
            type: 'reference',
            to: {type: 'contentTypes'},
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'mainImageCaption',
            title: 'Image caption',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            to: {type: 'description'},
        },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContent',
            to: {type: 'blockContent'},
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: {type: 'tags'}}],
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: 'socialDescription',
            title: 'Social Description',
            type: 'string',
        },
        {
            name: 'ogImage',
            title: 'OG image',
            type: 'image',
        },
        {
            name: 'twitterImage',
            title: 'Twitter image',
            type: 'image',
        },
        {
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'string',
        },
        {
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'string',
        },
        {
            name: 'metaTags',
            title: 'Meta Tags',
            type: 'string',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const {author} = selection;
            return { ...selection, subtitle: author && `by ${author}`}
        },
    },
};
