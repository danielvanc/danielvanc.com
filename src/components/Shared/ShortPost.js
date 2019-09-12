import React from 'react';
import styled from 'styled-components';
import HTMLContent from './Content';
import Links from '../Specifics/About/Links';

const PostWrap = styled.section`
    grid-column: ${props => props.type};
    position: relative;
    padding-bottom: 1em;
    @media screen and (min-width: 48em) {
        padding: 0;
    }
    p {
        font-size: 1rem;
        margin-bottom: 1em;
    }
    ul {
        padding-left: 0;
        position: relative;
        top: auto;
        width: auto;
        @media screen and (min-width: 48em) {
            float: left;
        }
        a {
            margin-top: 0;
        }
    }
`;

const ShortPost = ({type, title, content, linkText, linkURL}) => {
    // const typeVal = type === 'avail' ? '4 / 6' : '6 / -1';
    const typeVal = type === 'hobbies' ? '4 / 7' : '7 / -1';

    return (
        <PostWrap type={typeVal}>
            <h2>{title}</h2>
            {content && <HTMLContent content={content} />}
            <Links items={[{link: linkURL, title: linkText}]} />
        </PostWrap>
    );
};

export default ShortPost;
