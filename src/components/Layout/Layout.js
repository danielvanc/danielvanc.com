import React from 'react';
import PropTypes from 'prop-types';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './header';
import Footer from './footer';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-black: #111111;
    --color-white: #ffffff;
    --color-mint: #91c9b2;
    --color-mint: #6dd5ed;
    --color-pink: #EA638C;
    --color-grey: #2a2b2b;
    --color-page-background: #111111;
    --color-dark-grey: #1D1E1F;
    --color-text-grey: #868787;
    --color-light-grey: #787878;
    --color-text-default: var(--color-white);
    --color-borders: #494949;
    --font-family-headings: 'Muli', sans-serif;
    --font-family-subheadings: 'Muli', sans-serif;
    --font-family-text: 'Muli', Georgia, serif;

    --font-weight: 300;
    --font-weight-headings: 900;
    --font-size-xxx-large: 5.063rem; 
    --font-size-xx-large: 3.438em; 
    --font-size-x-large: 3.375rem;
    --font-size-large: 2.25rem;
    --font-size-medium: 1.5rem;
    --font-size-medium-alt: 1.25rem; /* 20px */
    --font-size: 1rem;
    --font-size-small: .667rem;
    --lineheight-text: 1.5;
    /* --lineheight-text: 1.7; */
    --lineheight-heading: 1.2;
    --spacing: 0.2rem;
    --font-size-nav: 1rem;
    --font-size-nav-large: 1.125rem;
    --link-hover: #9e9e9e;

    --max-container-width: 1300px;

    --grid-gap: 2vw;
    --row-gap: 2vw;
    --spacing-small: .5rem;
  }
* {
  margin: 0;
  padding: 0;
}

 html {
  box-sizing: border-box;
  line-height: var(--lineheight-text); /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  background: var(--color-page-background);
  color: var(--color-text-default);
  font-family: var(--font-family-text);
  font-weight: 300;
  font-size: 1.188rem;
  line-height: var(--lineheight-text);
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
}


a:link,
a:active,
a:visited {
  border-bottom: 1px solid var(--color-borders);
  color: var(--color-mint);
  text-decoration: none;
}
a:hover {
  color: var(--link-hover);
  border-bottom:1px solid transparent;
  transition: border 1s,  color 1s;
}

 h1,
 h2,
 h3,
 h4,
 h5,
 h6 {
   /* font-family: var(--font-family-headings); */
   font-family: var(--font-family-headings);
   font-weight: var(--font-weight-headings);
   line-height: var(--lineheight-heading);
   margin: 0;
  }
  
  h1 a {line-height: 2.8;}
  h1 {
    line-height: 140%;
    font-size: var(--font-size-medium);
    /* font-size: calc(64px + -0.4vw); */
    max-width: 14em;

    @media screen and (min-width: 27.5em) {
      max-width: 17em;
    }

    @media screen and (min-width: 37em) {
      font-size: 1.684em;
    }
    @media screen and (min-width: 48em) {
      font-size: 2.813em; /* 46px */
      max-width: 14em;
    }
    @media screen and (min-width: 61.250em) { /* 980px */ 
      font-size: var(--font-size-x-large);
    }

    @media screen and (min-width: 90em) { /* 1450px*/
      /* font-size: var(--font-size-xx-large); */
    }
  }
  h2 { font-size: 1.3rem; }
  h3 { font-size: 1.2rem; }
  h4 { font-size: 1.2rem; }
  
  
  
  
  @media screen and (min-width: 75em) {
    /* h1 { font-size: var(--font-size-x-large); } */
    h2 { font-size: var(--font-size-large); }
    h3 { font-size: var(--font-size-medium); }
    h4 { font-size: var(--font-size); }
  }
  
h2,
h3 {
  line-height: calc(var(--lineheight-heading) * 1.2);
}
  h3 {
  font-size: var(--font-size-medium);
}

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

button,
input { /* 1 */
  overflow: visible;
}

button,
select { /* 1 */
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}


progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}
template {
  display: none;
}

[hidden] {
  display: none;
}
`;

const PageContainer = styled.div`
    background: var(--color-grey) no-repeat;
    background-size: cover;
    background-image: radial-gradient(
        circle at left top,
        #5f5f5f,
        rgba(50, 51, 63, 0) 12.66%
    );
    padding: 1em 0 0 0;

    @media screen and (min-width: 37em) {
        background-image: radial-gradient(
            circle at left top,
            #5f5f5f,
            rgba(50, 51, 63, 0) 26.66%
        );
    }
    @media screen and (min-width: 48em) {
        padding: 2em 0 0 0;
    }
    .contentContainer {
        @media screen and (min-width: 48em) {
            display: grid;
            grid-template-columns: repeat(16, 1fr);
        }
    }

    &.home .contentContainer {
        max-width: 1250px;
        padding: 0 1.5em 4em 1.5em;
        @media screen and (min-width: 48em) {
            margin: 0 auto;
            grid-template-columns: repeat(8, 1fr);
            grid-auto-rows: repeat(3, 1fr);
            grid-gap: 55px;
            padding: 0 0 8em 0;
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
            <GlobalStyles />
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
