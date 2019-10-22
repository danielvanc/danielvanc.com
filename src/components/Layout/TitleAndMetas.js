import React from 'react';
import Helmet from 'react-helmet';
import FavIcon from '../../../favicon.png';
// import ogImage from './default-og-graphic.jpg';

require('typeface-muli');

const HeadScripts = props => {
    const {
        metaTitle,
        metaDescription,
        metaKeywords,
        postTitle,
        postDescription,
        postImage,
        ogImage,
    } = props;
    return (
        <>
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />

                <meta property="og:title" content={metaTitle} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content={metaDescription} />
                <meta
                    property="og:image"
                    content={ogImage || 'og-card-default.jpg'}
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@danielvanc" />
                <meta name="twitter:creator" content="@danielvanc" />
                <meta name="twitter:title" content={postTitle} />
                <meta name="twitter:description" content={postDescription} />
                <meta
                    name="twitter:image"
                    content={postImage || 'og-card-default.jpg'}
                />

                <html lang="en" />
                <link rel="icon" href={FavIcon} type="image/png" />
                <link rel="shortcut icon" href={FavIcon} type="image/png" />
                {/* Global site tag (gtag.js) - Google Analytics  */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-126709092-1"
                />
                <script>
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-126709092-1');
          `}
                </script>
            </Helmet>
        </>
    );
};

export default HeadScripts;
