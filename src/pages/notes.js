import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      {/* <h2>{ data.allMarkdownRemark.totalCount }</h2> */}
      {data.allMarkdownRemark.edges.map(({node}) => (
        <h2><Link to={node.fields.slug}>{node.frontmatter.title}</Link> - {node.frontmatter.date}</h2>
      ))}
    </Layout>
  )
}

export const query = graphql `
  query {
    allMarkdownRemark(sort: { 
      fields:[frontmatter___date], order: DESC },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }})
    {
      totalCount
      edges{
        node {
          id
          frontmatter {
            title
            date(formatString: "DD, MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`