const {
  api: { projectId, dataset },
} = require("./studio/sanity.json");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Home of Daniel Van Cuylenburg - Guitarist | Front-end Developer",
    description: "Website of Daniel Van Cuylenburg",
    siteUrl: "https://www.danielvanc.com/",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-prettier-build",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
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
                  url: `https://www.danielvanc.com/notes/${note.slug.current}`,
                  link: `https://www.danielvanc.com/notes/${note.slug.current}`,
                  guid: `https://www.danielvanc.com/notes/${note.slug.current}`,
                  date: note.publishedAt,
                };
              });
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
                            _rawContent
                            slug {
                                current
                            }
                        }
                    }
                }
                  
                
              }`,
            output: "/rss.xml",
            title: "Latest notes from Daniel Van Cuylenburg",
          },
        ],
      },
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
        name: "danielvanc.com",
        short_name: "danielvanc",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "favicon.png", // This path is relative to the root of the site.
        // cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "react-media",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.PROJECT_ID,
        dataset: process.env.DATA_SET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: "www.danielvanc.com",
        identity: {
          github: "danielvanc",
          twitter: "danielvanc", // no @
        },
        mentions: true,
        pingbacks: true,
        domain: "www.danielvanc.com",
        token: "S4g_n_xnZOFUgpfTyV7oCA",
        // token: process.env.WEBMENTIONS_TOKEN,
      },
    },
  ],
};
