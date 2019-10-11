import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import styled from 'styled-components';

const ALink = ({link, title, className}) => (
    <Link to={link} title={title} className={className}>
        {title}
    </Link>
);

const BlogButton = styled(ALink)`
    background: transparent;
    border: 1px solid #979797 !important;
    border-radius: 8px;
    clear: both;
    color: white !important;
    font-family: var(--font-family-subheadings);
    /* margin-top: 1.875em; */
    font-size: var(--font-size);
    margin-top: 1.2em;
    padding: 0.4em 0.8em 0.5em 0.8em;
    text-transform: uppercase;

    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;

    &:hover,
    &:focus,
    &:active {
        border: 1px solid var(--color-borders) !important;
        color: #979797 !important;
        transition: all 0.5s;

        -webkit-transform: scale(0.8);
        transform: scale(0.8);
        -webkit-transition-timing-function: cubic-bezier(
            0.47,
            2.02,
            0.31,
            -0.36
        );
        transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    }
`;

ALink.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
};

export default BlogButton;
