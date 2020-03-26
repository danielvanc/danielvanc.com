import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import TitleAndMetas from '../components/Layout/TitleAndMetas';
import Layout from '../components/Layout';
import SubMast from '../components/Shared/SubMast';
import ListNotes from '../components/Shared/ListNotes';
// import AllCategories from '../components/Shared/ListCategories'


const NotesList = ({ data, pageContext }) => {
  const page = 'sub';
  const { allNotes } = data;

  return (
    <>
      <TitleAndMetas
        metaTitle="Daniel Van Cuylenburg's Notes"
        metaDescription="Site, Life, Web and Tech updates from Web Designer and Front-end Developer, Daniel Van Cuylenburg"
        metaKeywords="Notes, Blog, Blogging, Tech, Web, Life, Writing, News, Posts"
      />
      <Layout pageLayout={page}>
        <SubMast
          title="Notes"
          textContent=""
          layout="standard-centered"
        />
        <ListNotes
            notes={allNotes.edges}
            tot={allNotes.totalCount}
            pageContext={pageContext}
        />

        {/* <AllCategories tags={getTags} /> */}
      </Layout>
    </>
  );
};

NotesList.propTypes = {
    data: PropTypes.shape({
        allNotes: PropTypes.shape({
            edges: PropTypes.array,
            totalCount: PropTypes.number,
        }),
    }),
};
export default NotesList;

export const NotesQuery = graphql`
    query ListNotesQuery($skip: Int!, $limit: Int!) {
        allNotes: allSanityNote(
            sort: {fields: [publishedAt], order: DESC}
            filter: {slug: {current: {ne: null}}}
            skip: $skip
            limit: $limit
        ) {
            totalCount
            edges {
                node {
                    id
                    title
                    publishedAt(formatString: "Do MMMM, YYYY")
                    description
                    slug {
                        _type
                        current
                    }
                    mainImage {
                        asset {
                            fluid(maxHeight: 450) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;