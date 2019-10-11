import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
// import BlogThumb from 'gatsby-image';
// import Media from 'react-media';
import PostButton from '../../Shared/Buttons';

const NoteTitle = styled.h2`
    align-self: center;
    font-family: var(--font-family-subheadings) !important;
    font-weight: 200;
    margin-bottom: 0.2em;
    letter-spacing: 0.2em;
    position: relative;
    text-transform: uppercase;
    font-size: var(--font-size);
    @media screen and (min-width: 48em) {
        font-size: var(--font-size-medium-alt);
        margin-bottom: 0.8em;
    }
    &:after {
        border-bottom: 1px solid var(--color-borders);
        content: '';
        position: absolute;
        right: 0;
        left: 150px;
        top: 52%;
        @media screen and (min-width: 48em) {
            left: 190px;
        }
    }
`;
const LatestNote = styled.aside`
    color: #fff;
    grid-column: 6 / -1;
    grid-row: 2 / 3;
    @media screen and (min-width: 48em) {
        /* max-width: 88%; */
    }
`;
const NoteContentTitle = styled.h3`
    padding-bottom: 0.5em;
    @media screen and (min-width: 75em) {
        font-size: var(--font-size-large);
    }
    a {
        color: white;
        &:hover {
            color: #979797;
            transition: all 0.5s;
        }
    }
`;
const NoteContent = styled.div`
    p {
        font-size: 1rem;
        line-height: 1.7;
        @media screen and (min-width: 48em) {
            font-size: 0.789em;
        }
        @media screen and (min-width: 64em) {
            font-size: 1rem;
        }
    }
`;

const LatestNotePost = props => (
    <>
        <LatestNote>
            <NoteTitle>Latest Note</NoteTitle>
            {props.notes.map(({node: note}) => (
                <React.Fragment key={note.id}>
                    <NoteContent>
                        <NoteContentTitle>
                            <Link to={`/notes/${note.slug.current}`}>
                                {note.title}
                            </Link>
                        </NoteContentTitle>
                        <p>{note.description}</p>
                        <PostButton
                            link={`/notes/${note.slug.current}`}
                            title="Read"
                            blog
                        />
                    </NoteContent>
                    {/* <Media query="(min-width: 768px)">
                    <BlogImage>
                        {note.mainImage.asset ? (
                            <BlogThumb fluid={note.mainImage.asset.fluid} />
                        ) : (
                            ''
                        )}
                    </BlogImage>
                </Media> */}
                </React.Fragment>
            ))}
        </LatestNote>
    </>
);

export default LatestNotePost;
