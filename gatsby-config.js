module.exports = {
  siteMetadata: {
    title: 'Home of Daniel Van Cuylenburg - Guitarist | Web Designer | Front-end Developer'
  },
  plugins: [
    // 'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-meta-redirect',
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
        //icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'react-media',
    'gatsby-plugin-sharp', {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              quality: 80
            }
          }
        ]
      }
    }
  ],
}