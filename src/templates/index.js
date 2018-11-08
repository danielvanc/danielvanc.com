import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// export default Homepage ( { data }) => {
// export default class IndexPage extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: posts } = data.allMarkdownRemark
//     const post = data.markdownRemark;
//     return (
//       <Layout>
//         <h1>hi { post.frontmatter.title }</h1>
//         <div dangerouslySetInnerHTML={{__html: post.html}}/>
//       </Layout>
//     )
//   }
// }

export default ( { data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1> { post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { title: { eq: "Homepage" } }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`