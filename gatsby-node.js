const { createFilePath } = require('gatsby-source-filesystem');
const path = require("path");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /github-buttons/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const { createNodeField } = actions;
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

async function createNowPage(graphql, actions, reporter) {
  const { createPage } = actions;

  const result = await graphql(`
        {
            allSanityNow(filter: {url: {current: {ne: null}}}) {
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
    `);

  if (result.errors) throw result.errors;

  const nowPages = (result.data.allSanityNow || {}).edges || [];
  nowPages.forEach((edge, index) => {
    const { id, url = {}, publishedAt } = edge.node;
    const path = `/${url.current}`;
    const templateKey = String(edge.node.template_key.title);
    createPage({
      path,
      component: require.resolve(`./src/templates/${templateKey}.js`),
      context: { id },
    });
  });
}



async function createLogPages(graphql, actions, reporter) {
  const { createPage } = actions;

  const result = await graphql(`
        {
            allSanityLog(filter: {url: {current: {ne: null}}}) {
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
    `);

  if (result.errors) throw result.errors;

  const logs = (result.data.allSanityLog || {}).edges || [];
  logs.forEach((edge, index) => {
    const { id, url = {}, publishedAt } = edge.node;
    const path = `/log/${url.current}`;
    const templateKey = String(edge.node.template_key.title);
    createPage({
      path,
      component: require.resolve(`./src/templates/${templateKey}.js`),
      context: { id },
    });
  });
}

async function createNotePages(graphql, actions, reporter) {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: `/notes/tags`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/notes`,
  });
  createRedirect({
    fromPath: `/notes/tags/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/notes`,
  });

  const result = await graphql(`
      {
          allSanityNote(filter: {slug: {current: {ne: null}}}) {
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
  `);
  
  const notes = result.data.allSanityNote.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(notes.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/notes/' : `/notes/${i + 1}`,
      component: path.resolve("./src/templates/notes-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  notes.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node;
    const notePath = `/notes/${slug.current}`;
    const templateKey = String(edge.node.template_key.title);
    createPage({
      path: notePath,
      component: require.resolve(`./src/templates/${templateKey}.js`),
      context: {
        id,
        permalink: `https://www.danielvanc.com${path}`,
      },
    });
  });
}


exports.createPages = async ({ graphql, actions, reporter }) => {
  await createNotePages(graphql, actions, reporter);
  await createNowPage(graphql, actions, reporter);
  await createLogPages(graphql, actions, reporter);
};
