import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlogThumb from 'gatsby-image';
import Media from 'react-media';

const Notes = styled.div`
    grid-column: 3 / 15;
    grid-row: 3 / 4;
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
    margin: 0 8%;
    padding-bottom: 4em;

    @media screen and (min-width: 48em) {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 870px;
    }
`;

const Note = styled.article`
    @media screen and (min-width: 48em) {
        flex-basis: 46%;
        text-align: center;
    }
    padding: 0 0 1.5em 0;
    @media screen and (min-width: 48em) {
        padding: 0 0 3em 0;
    }
    header {
        @media screen and (min-width: 48em) {
            background: var(--color-grey);
            border-radius: 5px;
            display: flex;
            padding: 0.625em 0.938em 0.4em 0.938em;
            position: relative;
            margin: 0 auto;
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

const NoteImage = styled.div`}
    img {
        border-radius: 5px;
        width: 100%;
        max-width: 100%;
    }
    .img-link {
        display: block;
        -webkit-box-shadow: 10px 9px 10px -6px rgba(2, 2, 2, 0.56);
        -moz-box-shadow: 10px 9px 10px -6px rgba(2, 2, 2, 0.56);
        box-shadow: 10px 9px 10px -6px rgba(2, 2, 2, 0.56);
        transition: all 0.8s ease-in-out;
        &:hover {
            transform: scale(1.2);
            transition: all 0.8s ease-in-out;
        }
    }
    p {
        color: var(--link-hover);
        font-weight: 200;
        @media screen and (min-width: 48em) {
            position: relative;
        }
    }
`;

const NoPosts = styled.p`
    font-size: var(--font-size-medium);
    grid-column: 1 / -1;
    padding: 0 0 3em 0;
    @media screen and (min-width: 48em) {
        padding: 3em 0 0 0;
    }
`;

const ListNotes = ({notes, tot}) => {
    const foundPosts = () => (
        <>
            {notes.map(({node: note}, i) => (
                <Note key={note.id}>
                    <NoteImage>
                        <Media query="(min-width: 768px)">
                            <Link
                                to={`/notes/${note.slug.current}`}
                                className="img-link"
                            >
                                <BlogThumb fluid={note.mainImage.asset.fluid} />
                            </Link>
                        </Media>
                        <header>
                            <NoteHeading>
                                <Link to={`/notes/${note.slug.current}`}>
                                    {note.title}
                                </Link>
                            </NoteHeading>
                        </header>
                        <p>{note.publishedAt}</p>
                    </NoteImage>
                </Note>
            ))}
        </>
    );

    const noPosts = () => (
        <NoPosts>No other posts have been made, yet.</NoPosts>
    );

    return (
        <>
            <Notes>
                <NotesLatestContainer>
                    {tot >= 2 ? foundPosts() : noPosts()}
                </NotesLatestContainer>
            </Notes>
        </>
    );
};

export default ListNotes;

ListNotes.propTypes = {
    notes: PropTypes.array,
    tot: PropTypes.number,
};
