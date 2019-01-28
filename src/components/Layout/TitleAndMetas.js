import React from "react"
import Helmet from "react-helmet"
import FavIcon from '../../../favicon.png'
require('typeface-muli')

const HeadScripts = (props) => {
  const { metaTitle, metaDescription, metaKeywords } = props;
  return (
    <>
    <Helmet
      title={metaTitle}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `keywords`, content: metaKeywords },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` },
        { rel: 'icon', type: 'image/png', href: `${FavIcon}` }
      ]}
    >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126709092-1"></script>
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-126709092-1');
          `}
      </script>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <html lang="en" />
    </Helmet>
    </>
  )
}

export default HeadScripts