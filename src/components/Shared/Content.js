import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import BaseBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";
import Links from "../Specifics/About/Links";

const client = sanityClient({
  projectId: "dlox5499", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const PostBody = styled.div`
  ul,
  ol {
    margin: 0 0 2.563em 1.3em;
  }
  p {
    margin-bottom: 1.563em;
    max-width: 45em;
    @media screen and (min-width: 75em) {
      font-size: 1.188rem;
    }
  }
  li {
    @media screen and (min-width: 75em) {
      font-size: 1.188rem;
    }
  }
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
  }
  img {
    /* width: 100%; */
    max-width: 100%;
  }
`;
// const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

// const serializers = {
//   marks: {
//     internalLink: ({ mark, children }) => {
//       const { slug = {} } = mark;
//       const href = `/${slug.current}`;
//       return <a href={href}>{children}</a>;
//     },
//   },
// };

// const serializers = {
//   ...
//   link: ({mark, children}) => {
//       // Read https://css-tricks.com/use-target_blank/
//       const { blank, href } = mark
//       return blank ?
//         <a href={href} target="_blank" rel="noopener">{children}</a>
//         : <Link to={href}>{children}</Link>
//     }
//   ...
// }

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <h1>{props.children}</h1>;

        case "h2":
          return <h2>{props.children}</h2>;

        case "h3":
          return <h3>{props.children}</h3>;

        case "h4":
          return <h4>{props.children}</h4>;

        case "text":
          return <p>{props.children}</p>;

        default:
          return <p>{props.children}</p>;
      }
    },
    image: ({ node: { asset } }) => <img src={urlFor(asset)} alt="" />,
  },
  marks: {
    internalLink: ({
      mark: {
        pageRef: { current },
      },
      children,
    }) => {
      const href = `/${current}`;
      return <Link to={href}>{children}</Link>;
    },
  },
};

export const Content = ({ content, className }) => <p>{content}</p>;

const HTMLContent = ({ content, className, isAbout = false }) => (
  <PostBody className={className}>
    <BaseBlockContent blocks={content} serializers={serializers} />
    {isAbout ? (
      <Links
        items={[
          { link: "/resume", title: "My Resume" },
          { link: "/now", title: "Up-to Now" },
          { link: "/uses", title: "What I Use" },
        ]}
      />
    ) : null}
  </PostBody>
);

HTMLContent.propTypes = {
  // content: PropTypes.node,
  className: PropTypes.string,
};

export default HTMLContent;
