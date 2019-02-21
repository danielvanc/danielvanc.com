const _ = require("lodash")
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /github-buttons/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}


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

async function createNowPage(graphql, actions, reporter) {
  const { createPage, createRedirect, createPageDependency } = actions

  const result = await graphql(`
    {
      allSanityNow(filter: { url: { current: { ne: null } } }) {
        edges {
          node {
            id
            url {
              current
            }
            title
            _createdAt(formatString: "DD.MM.YYYY")
            template_key {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const nowPages = (result.data.allSanityNow || {}).edges || []
  nowPages.forEach((edge, index) => {
    const { id, url = {}, publishedAt } = edge.node
    const path = `/${url.current}`

    reporter.info(`Creating Now page: ${path}`)

    const templateKey = String(edge.node.template_key.title)
    createPage({
      path,
      component: require.resolve(`./src/templates/${templateKey}.js`),
      context: { id },
    })

    createPageDependency({ path, nodeId: id })
  })
}

async function createNotePages(graphql, actions, reporter) {
  const { createPage, createRedirect, createPageDependency } = actions
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

  const result = await graphql(`
    {
      allSanityNote(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
            title
            tags {
              title
            }
            _createdAt(formatString: "DD.MM.YYYY")
            slug {
              current
            }
            template_key {
              title
            }
            content_type {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const notes = (result.data.allSanityNote || {}).edges || []
  notes.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const path = `/notes/${slug.current}`

    reporter.info(`Creating Notes page: ${path}`)

    const templateKey = String(edge.node.template_key.title)
    createPage({
      path,
      component: require.resolve(`./src/templates/${templateKey}.js`),
      context: { id },
    })

    createPageDependency({ path, nodeId: id })
  })
}

async function createLogPages(graphql, actions, reporter) {
  const { createPage, createRedirect, createPageDependency } = actions

  const result = await graphql(`
    {
      allSanityLog(filter: { url: { current: { ne: null } } }) {
        edges {
          node {
            id
            url {
              current
            }
            title
            publishedAt(formatString: "MMM YYYY")
            template_key {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const logs = (result.data.allSanityLog || {}).edges || []
  logs.forEach((edge, index) => {
    const { id, url = {}, publishedAt } = edge.node
    const path = `/log/${url.current}`

    reporter.info(`Creating Log page: ${path}`)

    const templateKey = String(edge.node.template_key.title)
    createPage({
      path,
      component: require.resolve(`./src/templates/${templateKey}.js`),
      context: { id },
    })

    createPageDependency({ path, nodeId: id })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createNotePages(graphql, actions, reporter)
  await createNowPage(graphql, actions, reporter)
  await createLogPages(graphql, actions, reporter)
}