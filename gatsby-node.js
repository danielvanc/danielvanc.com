const _ = require("lodash")
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
   if (node.internal.type === `MarkdownRemark`) {
     const fileNode = getNode(node.parent)
     const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
   }
}

// createRedirect({ fromPath: '/tags', toPath: '/notes', isPermanent: true });

exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/notes/tags`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/notes`,
  })
  createRedirect({
    fromPath: `/notes/tags/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/notes`,
  })

  return new Promise( (resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                tags
                contentType
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
        const nodeId = node.id
        const templatePath = String(node.frontmatter.templateKey) === 'index' || String(node.frontmatter.templateKey) === 'log' ? `src/pages/${String(node.frontmatter.templateKey)}.js`  : `src/templates/${String(node.frontmatter.templateKey)}.js`
        const tagTemplate = path.resolve("src/templates/tags.js")
        const logTemplate = path.resolve("src/templates/logs.js")

        createPage({
          path: node.fields.slug,
          component:path.resolve(templatePath),
          context: {
            slug: node.fields.slug,
            id: nodeId
          }
        })
        
        // Tag pages:
        let tags = []
        if (node.frontmatter.tags) {
          tags = tags.concat(node.frontmatter.tags)
        }
        tags = _.uniq(tags)
        
        tags.forEach(tag => {
          createPage({
            path: `/notes/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })

        // Log pages:
        let logs = []
        if (node.frontmatter.templateKey === 'log') {
          logs = logs.concat(node.fields.slug)
        }
        
        logs.forEach(log => {
          createPage({
            path: `/log/${_.kebabCase(log)}/`,
            component: logTemplate,
            context: {
              log,
              slug: node.fields.slug
            },
          })
        })

      })
      // console.log(JSON.stringify(result, null, 41))

      resolve()
    })
  })
}