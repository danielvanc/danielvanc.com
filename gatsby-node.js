const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')


exports.onCreateNode = ({ node, getNode, actions }) => {
   if (node.internal.type === `MarkdownRemark`) {
     const fileNode = getNode(node.parent)
     const { createNodeField } = actions
    //  console.log(`\n`, fileNode.relativePath)
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
   }
}

exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions
  return new Promise( (resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
        createPage({
          path: node.fields.slug,
          component:path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
          context: {
            slug: node.fields.slug,
          }
        })
      })
      // console.log(JSON.stringify(result, null, 41))

      resolve()
    })
  })
}