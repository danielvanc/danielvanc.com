import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import BlogThumb from 'gatsby-image'
import Media from 'react-media'

const NotesLatest = styled.div`
    grid-column: 2 / 3;
    .heading {
        font-family: var(--font-family-subheadings);
        font-weight: 200 !important;
        letter-spacing: 0.2em;
        margin-bottom: 0.938em;
        padding-top: 1.25em;
        @media screen and (min-width: 48em) {
            padding-top: 0;
        }
        @media screen and (min-width: 64em) {
            margin-bottom: 0;
        }
        &:after {
            border-bottom: 1px solid var(--color-borders);
            content: '';
            position: absolute;
            right: 0;
            left: 150px;
            top: 52%;
        }
    }
`;
const NotesLatestContainer = styled.div`
    padding: 0 1.5em;
    @media screen and (min-width: 48em) {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
        padding: 0;
    }
    @media screen and (min-width: 75em) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
`;
const NoteImage = styled.div`
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
    .img-link {
        display: block;
        -webkit-box-shadow: 10px 9px 10px -6px rgba(2, 2, 2, 0.56);
        -moz-box-shadow: 10px 9px 10px -6px rgba(2, 2, 2, 0.56);
        box-shadow: 10px 9px 10px -6px rgba(2, 2, 2, 0.56);
    }
    p {
        color: var(--link-hover);
        font-weight: 200;
        @media screen and (min-width: 48em) {
            text-align: center;
        }
    }
`;

const Note = styled.article`
    padding: 0 0 1.5em 0;
    @media screen and (min-width: 48em) {
        padding: 0;
    }
    header {
        @media screen and (min-width: 48em) {
            background: var(--color-grey);
            border-radius: 10px;
            display: flex;
            padding: 0.625em 0.938em;
            position: relative;
            /* margin: 0 0.625em; */
            margin: 0 auto;
            top: -25px;
            max-width: 80%;
        }
    }
`;

const NoteHeading = styled.h2`
    font-size: 1.125em;
    font-weight: 400;
    font-size: var(--font-size-medium);
    @media screen and (min-width: 64em) {
        font-size: 1.313em;
    }
    @media screen and (min-width: 90em) {
        font-size: var(--font-size-medium);
    }
`;

const NoPosts = styled.p`
    font-size: var(--font-size-medium);
    grid-column: 1 / -1;
    padding: 0 0 3em 0;
    @media screen and (min-width: 48em) {
        /* font-size: var(--font-size-medium); */
        padding: 3em 0 0 0;
    }
`;

const ListPostsSquare = props => {
    const foundPosts = () => (
      <>
        {props.notes.map( ({ node: note }, i) => (
          
          <Note key={note.id}>
            <NoteImage>
              <Media query="(min-width: 768px)">
                <Link to={`/notes/${note.slug.current}`} className="img-link">
                  <BlogThumb fluid={note.mainImage.asset.fluid} />
                </Link>
              </Media>
              <header>
                <NoteHeading><Link to={`/notes/${note.slug.current}`}>{note.title}</Link></NoteHeading>
              </header>
              <p>{note.publishedAt}</p>
            </NoteImage>
          </Note>
        ))}
      </>
    )

    const noPosts = () => (
        <NoPosts>No other posts have been made, yet.</NoPosts>
    );

    return (
        <>
            <NotesLatest>
                <h3 className="heading">Previously</h3>
                <NotesLatestContainer>
                    {props.total >= 2 ? foundPosts() : noPosts()}
                </NotesLatestContainer>
            </NotesLatest>
        </>
    );
};

export default ListPostsSquare;
