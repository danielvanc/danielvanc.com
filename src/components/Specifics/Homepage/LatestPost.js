import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import BlogThumb from 'gatsby-image'
import Media from 'react-media'
import PostButton from '../../Shared/Buttons'

const BlogIntro = styled.div`
  background: var(--color-dark-grey);
  grid-column: 1 / -1;
  grid-row: 6 / 7;
  z-index: 1;
  padding: 2em 0;
  text-align: center;
  @media screen and (min-width: 48em) {
    display: grid;
    grid-column: 1 / -1;
    min-height:130px;
    grid-column-gap: 25px;
    padding: 0;
    text-align: left;
  }
  @media screen and (min-width: 64em) {
    grid-template-columns: minmax(200px, 6fr) repeat(8, 1fr);
    grid-row: 5 / 6;
    min-height: 200px;
  }
  p {
    align-self: center;
    font-family: var(--font-family-subheadings)!important;
    font-weight: 200;
    grid-column: 2 / 9;
    letter-spacing: 0.2em;
    position: relative;
    text-transform: uppercase;
    @media screen and (min-width: 48em) {
      font-size: var(--font-size-medium);
    }
    &:after {
      @media screen and (min-width: 48em) {
        border-bottom: 1px solid var(--color-borders);
        content: '';
        position: absolute;
        right: 0;
        left: 230px;
        top: 52%;
      }
    }
  }
`
const BlogMain = styled.section`
  background: var(--color-dark-grey);
  color: #fff;
  padding: 0 1.5em 2em 1.5em;
  @media screen and (min-width: 48em) {
    display:grid;
    grid-gap: 25px;
	  grid-row: 7 / 8;
    grid-template-columns: 1fr 5fr 3fr 1fr;
    grid-column: 1 / -1;
    padding:0 0 6.250em 0;
  }
  @media screen and (min-width: 64em) {
    grid-column: 1 / -1;
	  grid-row: 6 / 7;
    grid-template-columns: minmax(200px, 6fr) repeat(8, 1fr);
    padding:0 0 6.250em 5em;
  }
  @media screen and (min-width: 75em) {
    padding:6.250em 0 6.250em 15em;
  }
`
const BlogContentTitle = styled.h3`
  padding-bottom: 0.625em;
  @media screen and (min-width: 75em) {
    font-size: var(--font-size-large);
  }
  @media screen and (min-width: 90.625em) {
    font-size: var(--font-size-x-large);
  }
`
const BlogContent = styled.div`
  padding-bottom: 1em;
  @media screen and (min-width: 48em) {
    align-self: center;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    padding-bottom: 1em;
    p:first-child {
      padding-right: 1em;
    }
  }
  @media screen and (min-width: 64em) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  .wrap {
    margin-bottom: 1.875em;
    @media screen and (min-width: 75em) {
      column-count: 2;
    }
    @media screen and (min-width: 90em) {
      margin-bottom: 2.500em;
    }
  }
`
const BlogImage = styled.div`
  @media screen and (min-width: 48em) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
  @media screen and (min-width: 64em) {
    grid-column: 4 / 9;
    grid-row: 1 / 2;
    padding: 20px 0;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
`

const LatestBlogPost = (props) => {
  return (
    <>
    <BlogIntro><p>Latest Note</p></BlogIntro>
      <BlogMain>
        {props.notes.map(({ node: note }) => (
          <React.Fragment key={note.id}>
            <BlogContent>
              <BlogContentTitle>
                <Link to={note.fields.slug}>{note.frontmatter.title}</Link>
              </BlogContentTitle>
              <div className="wrap">
                <p dangerouslySetInnerHTML={{ __html: note.frontmatter.description }} />
              </div>
              <PostButton
                link={note.fields.slug}
                title="Read"
                blog
              />
            </BlogContent>
            <Media query="(min-width: 768px)">
              <BlogImage>
                <BlogThumb sizes={note.frontmatter.image.childImageSharp.sizes} />
              </BlogImage>
            </Media>
          </React.Fragment>
        ))}
      </BlogMain>
    </>
  )
}

export default LatestBlogPost;