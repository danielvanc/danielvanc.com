import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import styled from 'styled-components';
import BlogThumb from 'gatsby-image';
import Media from 'react-media';
import PostButton from '../../Shared/Buttons';

const NotesLatest = styled.section`
    padding: 1.5em 0 0 0;

    @media screen and (min-width: 48em) {
        grid-column: 1 / -1;
        grid-row: 2 / 4;
        margin: 0 auto;
        max-width: 870px;
    }
`;
const NotesBlank = styled.div`
    background: var(--color-grey);
    grid-row: 3 / 4;
    grid-column: 1 / -1;
`;
const NotesLatestHeading = styled.h2`
    font-weight: 900;
    margin: 0;
    padding: 0;
    position: relative;
    @media screen and (min-width: 48em) {
        font-size: var(--font-size-large);
    }
    @media screen and (min-width: 64em) {
        font-size: var(--font-size-x-large);
    }
    @media screen and (min-width: 75em) {
    }
    @media screen and (min-width: 90em) {
        font-size: var(--font-size-xx-large);
    }
`;
const LatestIcon = styled.span`
    display: block;
    font-size: 1rem;
    font-weight: 200;
    padding-bottom: 0.938em;
    text-transform: uppercase;
    @media screen and (min-width: 48em) {
        background: white;
        border-radius: 50%;
        /* border: 1px solid var(--color-dark-grey); */
        color: var(--color-dark-grey) !important;
        font-family: var(--font-family-subheadings);
        font-weight: 400;
        padding: 27px 10px 24px 10px;
        position: absolute;
        top: -40px;
        right: -45px;
    }
`;

const BlogImage = styled.div`
    /* background: var(--color-dark-grey); */
    background: #4a4a4a;
`;

const LatestBlock = ({note}) => (
    <>
        <NotesLatest>
            {note.map(({node: n}) => (
                <BlogImage key={n.id}>
                    <BlogThumb fluid={n.mainImage.asset.fluid} />
                    <NotesLatestHeading>
                        {/* <LatestIcon>Latest</LatestIcon> */}
                        <Link to={`/notes/${n.slug.current}`}>{n.title}</Link>
                    </NotesLatestHeading>
                    <PostButton
                        link={`/notes/${n.slug.current}`}
                        title="Read"
                        blog
                    />
                </BlogImage>
            ))}
            <NotesBlank />
        </NotesLatest>
    </>
);

LatestBlock.propTypes = {
    note: PropTypes.shape({
        allMarkdownRemake: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};
export default LatestBlock;
