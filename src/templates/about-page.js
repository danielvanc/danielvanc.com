import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import TitleAndMetas from "../components/Layout/TitleAndMetas"

export default ( { data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <TitleAndMetas title="About page" description="About Description" keywords = "About Keywords" />
      <h1> { post.frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }  }) {
      html
      frontmatter {
        title
      }
    }
  }
`