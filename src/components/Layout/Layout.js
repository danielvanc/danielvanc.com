import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
// import PageImage from '../../images/bodybg.png'

const PageContainer = styled.div`
    background: var(--color-grey) no-repeat;
    background-size: cover;
    padding: 20px 0 0 0;
    .contentContainer {
        @media screen and (min-width: 48em) {
            display: grid;
            grid-template-columns: repeat(16, 1fr);
        }
    }

    &.home .contentContainer {
        @media screen and (min-width: 48em) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media screen and (min-width: 64em) {
            grid-template-columns: minmax(200px, 6fr) repeat(8, 1fr);
            grid-template-rows:
                repeat(3, minmax(min-content, max-content)) minmax(
                    min-content,
                    300px
                )
                1fr min-content;
            grid-column-gap: 25px;
        }
        @media screen and (min-width: 90em) {
            grid-template-rows:
                repeat(3, minmax(min-content, max-content)) minmax(
                    min-content,
                    300px
                )
                1fr min-content;
        }
    }
    &.sub .contentContainer {
        @media screen and (min-width: 48em) {
            grid-template-rows: minmax(100px, max-content);
            grid-column-gap: 25px;
        }
        @media screen and (min-width: 64em) {
            grid-template-rows: minmax(200px, max-content);
        }
    }
    &.notes .contentContainer {
        padding: 0 1.5em;
        @media screen and (min-width: 48em) {
            grid-column-gap: 25px;
            padding: 0;
        }
    }
    &.center-squared .contentContainer {
        /* max-width: 85%; */
        @media screen and (min-width: 48em) {
            margin: 0 auto;
            max-width: 1800px;
        }
    }
    &.sub.about .contentContainer {
        @media screen and (min-width: 48em) {
            grid-column-gap: 5px;
        }
    }
`;
const Layout = ({pageLayout, children}) => {
    const layout = pageLayout;
    return (
        <PageContainer className={layout}>
            <Header />
            <div className="contentContainer">{children}</div>
            <Footer />
        </PageContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageLayout: PropTypes.node.isRequired,
};

export default Layout;
