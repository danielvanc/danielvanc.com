const {
    api: {projectId, dataset},
} = require('./studio/sanity.json');

require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: 'Home of Daniel Van Cuylenburg - Guitarist | Front-end Developer',
        description: "Website of Daniel Van Cuylenburg",
        siteUrl: "https://www.danielvanc.com"
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-meta-redirect',
      {
        resolve: 'gatsby-plugin-feed',
        options: {
          query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
          feeds: [
            {
              serialize: ({ query: { allNotes } }) => {
                return allNotes.edges.map(({ node: note }) => {
                  return {
                    title: note.title,
                    description: note.description,
                    siteUrl: `/notes/${note.slug.current}`,
                    date: note.publishedAt
                  }
                })
              },
              query: `
              {
                allNotes: allSanityNote(
                    sort: {fields: [publishedAt], order: DESC}
                    filter: {slug: {current: {ne: null}}}
                ) {
                    totalCount
                    edges {
                        node {
                            id
                            title
                            publishedAt
                            description
                            slug {
                                current
                            }
                        }
                    }
                }
                  
                
              }`,
              output: "/rss.xml",
              title: "Latest notes from Daniel Van Cuylenburg"
            }
          ]
        }
      },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'danielvanc-v1-manifest',
                short_name: 'danielvanc',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'favicon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-offline',
        'gatsby-plugin-styled-components',
        'gatsby-transformer-sharp',
        'react-media',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 590,
                            quality: 80,
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.PROJECT_ID,
                dataset: process.env.DATA_SET,
                token: process.env.SANITY_TOKEN,
                watchMode: true,
                overlayDrafts: true,
            },
        },
        // {
        //     resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        //     options: {
        //         production: true,
        //         disable: !process.env.ANALYZE_BUNDLE_SIZE,
        //         generateStatsFile: true,
        //         analyzerMode: 'static',
        //     },
        // },
    ],
};
