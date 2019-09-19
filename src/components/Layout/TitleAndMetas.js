import React from 'react';
import Helmet from 'react-helmet';
import FavIcon from '../../../favicon.png';

require('typeface-muli');

const HeadScripts = props => {
    const {
        metaTitle,
        metaDescription,
        metaKeywords,
        postTitle,
        postDescription,
        postImage,
    } = props;
    return (
        <>
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="keywords" content={metaKeywords} />

                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@danielvanc" />
                <meta name="twitter:creator" content="@danielvanc" />
                <meta name="twitter:title" content={postTitle} />
                <meta name="twitter:description" content={postDescription} />
                <meta name="twitter:image" content={postImage ? postImage : ""} />
                 

                 

                
                   

                <html lang="en" />
                
                <link
                    async
                    defer
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                    crossOrigin="anonymous"
                />
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
