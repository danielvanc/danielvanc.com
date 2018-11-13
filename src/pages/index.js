import React from "react"
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import BlogThumb from "gatsby-image"
import HeadScripts from "../components/headScripts"
import Layout from "../components/layout"

const MastIntro = styled.div`
  grid-area: intro;
`
const MastText = styled.div`
  grid-area: intro-text;
`
const MastStandFirst = styled.div`
  grid-area: standfirst;
`
const MastTextFinish = styled.div`
  grid-area: intro-text-finish;
`
const MastImage = styled.div`
  grid-area: graphics;
`
const BlogIntro = styled.div`
  grid-area: blog-intro;
`
const BlogDescription = styled.div`
  grid-area: blog-text;
`
const BlogImage = styled.div`
  grid-area: blog-img;
`

export default ({ data }) => {
  const { edges: posts } = data.intro
  let pageMeta = {};

  posts.forEach(function ({ node: post }) {
    Object.assign(pageMeta, { "metaTitle": post.frontmatter.metaTitle });
    Object.assign(pageMeta, { "metaKeywords": post.frontmatter.metaKeywords });
    Object.assign(pageMeta, { "metaDescription": post.frontmatter.metaDescription });
    Object.assign(pageMeta, { "pageTitle": post.frontmatter.title });
    Object.assign(pageMeta, { "pageSubTitle": post.frontmatter.subtitle });
    Object.assign(pageMeta, { "pageDescription": post.html });
  });

  const { edges: notes } = data.latestPost

  return (
    <>
      <HeadScripts {...pageMeta} />
      <Layout>
        <MastIntro>
          <h1>{pageMeta.pageTitle}</h1>
        </MastIntro>
        <MastText dangerouslySetInnerHTML={{ __html: pageMeta.pageDescription }} />
        <MastImage>Mast image</MastImage>
        <MastStandFirst>{pageMeta.pageSubTitle}</MastStandFirst>
        <MastTextFinish>Welcome to my website! I’m a consumer focused, business minded, digital creative,  with 2 decades of experience (15 years professionally) </MastTextFinish>
        <BlogIntro>Latest on the blog</BlogIntro>
        {notes.map(({ node: note }) => (
          <React.Fragment key={note.id}>
            <BlogDescription>
              <h2> <Link to={note.fields.slug}>{note.frontmatter.title}</Link></h2>
              <p>{note.frontmatter.description}</p>
            </BlogDescription>
            <BlogImage><BlogThumb sizes={note.frontmatter.image.childImageSharp.sizes} /> </BlogImage>
            {/* </div> */}
          </React.Fragment>
        ))}
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    intro:allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "index" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            templateKey
            subtitle
            metaTitle
            metaDescription
            metaKeywords
          }
        }
      }
    }

    latestPost:allMarkdownRemark(
      limit: 1
      filter: {
        frontmatter: { page_type: { eq: "notes" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`