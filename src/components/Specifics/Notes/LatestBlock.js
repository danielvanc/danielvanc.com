import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import BlogThumb from 'gatsby-image';
import Media from 'react-media';
import PostButton from '../../Shared/Buttons';

const NotesLatest = styled.section`
    background: var(--color-dark-grey);
    padding: 0 1.5em 3em 1.5em;
    @media screen and (min-width: 48em) {
        padding: 0;
    }
    @media screen and (min-width: 48em) {
        grid-column: 1 / -1;
        grid-row: 2 / 4;
        display: grid;
        grid-template-columns: repeat(18, 1fr);
    }
`;
const NotesBlank = styled.div`
    background: var(--color-grey);
    grid-row: 3 / 4;
    grid-column: 1 / -1;
`;
const NotesLatestHeading = styled.h2`
    font-weight: 900;
    grid-column: 2 / 17;
    grid-row: 1 / 2;
    padding: 1.875em 0 1em 0;
    position: relative;
    @media screen and (min-width: 48em) {
        font-size: var(--font-size-large);
        padding: 1.875em 0;
    }
    @media screen and (min-width: 64em) {
        padding: 0.938em 0;
        font-size: var(--font-size-x-large);
        grid-column: 5 / 16;
    }
    @media screen and (min-width: 75em) {
        grid-column: 6 / 15;
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
const NotesLatestContent = styled.div`
    grid-column: 11 / 18;
    grid-row: 2 / 3;
    @media screen and (min-width: 48em) {
        padding-bottom: 2.5em;
    }
    @media screen and (min-width: 64em) {
        padding: 1.563em 0;
        /* padding:4.688em 0; */
    }
    @media screen and (min-width: 75em) {
        padding: 4.688em 0;
    }
    @media screen and (min-width: 90em) {
        grid-column: 11 / 16;
    }
    p {
        margin-bottom: 1.563em;
        @media screen and (min-width: 64em) {
            font-size: 1.125em;
        }
        @media screen and (min-width: 93.75em) {
            font-size: var(--font-size-medium-alt);
        }
    }
`;
const BlogImage = styled.div`
    grid-column: 1 / 10;
    grid-row: 2 / 4;
    align-self: end;
    @media screen and (min-width: 48em) {
        /* padding-bottom: 2.500em; */
    }
    @media screen and (min-width: 90em) {
        grid-column: 2 / 10;
    }
    img {
        /* width: 90% !important;
        max-width: 90% !important; */
        align-self: end;
    }
`;

const LatestBlock = props => (
    <>
        <NotesLatest>
            {props.note.map(({node: n}) => (
                <React.Fragment key={n.id}>
                    <NotesLatestHeading>
                        <LatestIcon>Latest</LatestIcon>
                        <Link to={`/notes/${n.slug.current}`}>{n.title}</Link>
                    </NotesLatestHeading>
                    <NotesLatestContent>
                        <p>{n.description}</p>
                        <PostButton
                            link={`/notes/${n.slug.current}`}
                            title="Read"
                            blog
                        />
                    </NotesLatestContent>
                    <Media query="(min-width: 768px)">
                        <BlogImage>
                            <BlogThumb fluid={n.mainImage.asset.fluid} />
                        </BlogImage>
                    </Media>
                </React.Fragment>
            ))}
            <NotesBlank />
        </NotesLatest>
    </>
);

export default LatestBlock;
