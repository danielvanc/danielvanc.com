import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import TitleAndMetas from '../components/Layout/TitleAndMetas';
import TitleAndSubTitle from '../components/shared/TitleAndSubTitle';
import ImageDescription from '../components/shared/ImageDescription';
import ProfileLinks from '../components/shared/ProfileLinks';
import WorkExperience from '../components/shared/WorkExperience';
import Expertise from '../components/shared/Expertise';
import Skills from '../components/shared/Skills';
import ShortPost from '../components/shared/ShortPost';

const PageMain = styled.div`
    background: #333;
    display: grid;
    grid-column: 2 / 16;
`;
const ResumeHeader = styled.div`
    background: red;
`;
const Experience = styled(WorkExperience)`
    background: blue;
`;
const ResumeMainContent = styled.div`
    background: green;
`;

const Resume = ({data}) => {
    const page = 'sub';
    const {metaTitle, metaTags, metaDescription} = data.sanityResume;
    return (
        <Layout pageLayout={page}>
            <TitleAndMetas
                metaTitle={metaTitle}
                metaDescription={metaDescription}
                metaKeywords={metaTags}
            />
            <PageMain>
                <ResumeHeader>
                    <TitleAndSubTitle />
                    <ImageDescription />
                    <ProfileLinks />
                </ResumeHeader>
                <Experience />
                <ResumeMainContent>
                    <Expertise />
                    <Skills />
                    <ShortPost />
                    <ShortPost />
                </ResumeMainContent>
            </PageMain>
        </Layout>
    );
};

export default Resume;

export const query = graphql`
    query ResumeQuery {
        sanityResume(
            profession: {}
            image_main: {asset: {url: {}}}
            metaTitle: {}
            metaTags: {}
            metaDescription: {}
        ) {
            metaTitle
            metaTags
            metaDescription
            image_main {
                _key
                _type
            }
            Availability {
                sanityChildren {
                    text
                }
            }
            experience {
                level
                skill
            }
            history {
                company
                finished
                job_desc
                role
                started
            }
            resume_intro {
                sanityChildren {
                    text
                }
            }
            side_text
            profession
            personal_skills {
                skill_desc
                skill_heading
                skill_image {
                    asset {
                        id
                    }
                }
            }
        }
    }
`;
