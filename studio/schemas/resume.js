export default {
    name: 'Resume',
    title: 'Resume Page',
    type: 'document',
    fields: [
        {
            name: 'profession',
            title: 'Profession',
            type: 'string',
        },
        {
            name: 'image_main',
            title: 'Image of me',
            type: 'image',
        },
        {
            name: 'resume_intro',
            title: 'Resume Introduction',
            type: 'string',
        },
        {
            name: 'side_text',
            title: 'Side text next to image',
            type: 'string',
        },
        {
            type: 'array',
            title: 'Employment History',
            name: 'history',
            of: [
                {
                    title: 'Employment',
                    type: 'employment',
                },
            ],
        },
        {
            type: 'array',
            title: 'Experience Levels',
            name: 'experience',
            of: [
                {
                    title: 'Levels',
                    type: 'experience',
                },
            ],
        },
        {
            type: 'array',
            title: 'Personal Skills',
            name: 'personal_skills',
            of: [
                {
                    title: 'Skills',
                    type: 'personal_skills',
                },
            ],
        },
        {
            name: 'hobbies',
            title: 'Hobbies and Interests',
            type: 'blockContent',
            to: {type: 'blockContent'},
        },
        {
            name: 'Availability',
            title: 'availability',
            type: 'blockContent',
            to: {type: 'blockContent'},
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
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
        },
        prepare(selection) {
            const {author} = selection;
            return { ...selection, title: 'About' && `Resume Index page`,};
        },
    },
};
