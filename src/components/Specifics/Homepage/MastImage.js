import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';
import myImage from '../../../images/mastimage-bg.png'
import Media from 'react-media'

const MastImage = styled.div`
  position: relative;
  @media screen and (min-width: 48em) {
    grid-column: 1 / 3;
	  grid-row: 1 / 5;
  }
  @media screen and (min-width: 64em) {
    align-self: end;
    grid-column: 1 / 2;
    grid-row: 2 / 6;
    padding-top: 30px;
  }
  &:before {
    @media screen and (min-width: 64em) {
      background:  url(${myImage}) top right no-repeat;
      content: '';
      height: 100%;
      top: -200px;
      left: 0;
      right: 14px;
      position:absolute;
    }
  }
  
  .MastImageContainer {
    background: var(--color-dark-grey)!important;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
    /* min-height: 250px; */
    min-height: 250px;
    /* grid-template-rows: repeat(2, minmax(200px, 400px)) */
    grid-template-rows: repeat(2, minmax(200px, 350px))
    position: relative;
    padding: 1.563em 0;
    @media screen and (min-width: 48em) {
      background: var(--color-dark-grey)!important;
      border-top: 25px solid var(--color-dark-grey);
      border-right: 25px solid var(--color-dark-grey);
      border-bottom: 25px solid var(--color-dark-grey);
      grid-column: 1 / 3;
      grid-row: 2 / 5;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: minmax(100px, 2fr) 2fr minmax(100px, 2fr) minmax(300px, 5fr);
      margin: 0 3.125em 0 0;
      padding: 0;
    }
    @media screen and (min-width: 64em) {
      .MastImageContainer {
        border-bottom: 0;
      }
    }
  }
  /* @media screen and (min-width: 90em) {
    .MastImageContainer {
      margin: 0 3.125em 6em 0;
    }
  } */
`
const MastImageItem = styled.div`
  background-position: left center;
  background-repeat: no-repeat;
  background-size:cover;
  width: 100%;
  max-width: 100%;
  z-index:12;
  img {
    width: 100%;
  }
`

const MastImage1 = styled(MastImageItem)`
  background-image: url(${props => props.url});
  background-position: center top;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media screen and (min-width: 48em) {
    background-position: right top;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  @media screen and (min-width: 75em) {
    background-size: 120%;
  }
`
const MastImage2 = styled(MastImageItem)`
  background-image: url(${props => props.url});
  background-position: left center;
  grid-column: 2 / -1;
  grid-row: 1 / 2;
`
const MastImage3 = styled(MastImageItem)`
  background-image: url(${props => props.url});
  background-position: left top;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  `
const MastImage4 = styled(MastImageItem)`
  background-image: url(${props => props.url});
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  @media screen and (min-width: 48em) {
    background-position: top left;
    grid-column: 2 / -1;
    grid-row: 2 / 4;
  }
  @media screen and (min-width: 90em) {
    background-position: center center;
  }
`
const MastImage5 = styled(MastImageItem)`
  background-image: url(${props => props.url});
  background-position: center top;
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`
const MastImage6 = styled(MastImageItem)`
  background-image: url(${props => props.url});
  background-position:  center center;
  grid-column: 2 / -1;
  grid-row: 4 / 5;
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        M_1: file(relativePath: { eq: "images/mast/1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        M_2: file(relativePath: { eq: "images/mast/2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        M_3: file(relativePath: { eq: "images/mast/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        M_4: file(relativePath: { eq: "images/mast/4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        M_5: file(relativePath: { eq: "images/mast/5.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        M_6: file(relativePath: { eq: "images/mast/6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <MastImage>
        <div className="MastImageContainer">
          <MastImage1 url={data.M_1.childImageSharp.fluid.src} />
          <Media query="(min-width: 768px)">
            <MastImage2 url={data.M_2.childImageSharp.fluid.src} />
          </Media>
          <Media query="(min-width: 768px)">
            <MastImage3 url={data.M_3.childImageSharp.fluid.src} />
          </Media>
          <MastImage4 url={data.M_4.childImageSharp.fluid.src} />
          <Media query="(min-width: 768px)">
            <MastImage5 url={data.M_5.childImageSharp.fluid.src} />
          </Media>
          <Media query="(min-width: 768px)">
            <MastImage6 url={data.M_6.childImageSharp.fluid.src} />
          </Media>
        </div>
      </MastImage>
    )}
  />
)