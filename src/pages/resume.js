import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import TitleAndMetas from '../components/Layout/TitleAndMetas';
import ImageTitleAndDescription from '../components/Shared/ImageTitleAndDescription';
import WorkExperience from '../components/Shared/WorkExperience';
import Expertise from '../components/Shared/Expertise';
import Skills from '../components/Shared/Skills';
import ShortPost from '../components/Shared/ShortPost';

const PageMain = styled.div`
    grid-column: 1 / 16;
    margin: 0 auto;
    max-width: var(--max-container-width);
    @media screen and (min-width: 80em) {
        padding-left: 2%;
    }
    @media screen and (min-width: 87.5em) {
        padding-left: 0;
    }
`;
const ResumeBody = styled.main`
    padding: 3em 2em 5em 2em;
    position: relative;

    @media screen and (min-width: 37.5em) and (max-width: 43em) {
        padding: 7% 2em 5em 2em;
    }
    @media screen and (min-width: 43.063em) and (max-width: 47.938em) {
        padding: 16% 2em 5em 2em;
    }
    @media screen and (min-width: 48em) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-gap: 35px;
        padding: 1em 0 5em 0;
    }
    @media screen and (min-width: 80em) {
        grid-gap: 75px;
        transform: none;
        padding: 1em 0 5em 0;
        width: auto;
    }
`;

const Resume = ({data}) => {
    const page = 'resume';
    const {
        metaTitle,
        metaTags,
        metaDescription,
        image_main: imageMain,
        resume_intro: resumeIntro,
        side_text: sideText,
        profession,
        history,
        experience,
        personal_skills,
        _rawAvailability,
        _rawHobbies,
    } = data.sanityResume;
    return (
        <Layout pageLayout={page}>
            <TitleAndMetas
                metaTitle={metaTitle}
                metaDescription={metaDescription}
                metaKeywords={metaTags}
            />
            <PageMain>
                <ImageTitleAndDescription
                    profileImage={imageMain}
                    intro={resumeIntro}
                    side_text={sideText}
                    profession={profession}
                />
                <ResumeBody>
                    <Expertise expertise={experience} />
                    <Skills skills={personal_skills} />
                    <ShortPost
                        type="hobbies"
                        title="Hobbies &amp; Interests"
                        content={_rawHobbies}
                        linkText="More about me"
                        linkURL="/about"
                    />
                    <ShortPost
                        type="avail"
                        title="Availability"
                        content={_rawAvailability}
                        linkText="Up to now"
                        linkURL="/now"
                    />
                    <WorkExperience history={history} />
                </ResumeBody>
            </PageMain>
        </Layout>
    );
};

export default Resume;

export const query = graphql`
    query ResumeQuery {
        sanityResume {
            metaTitle
            metaTags
            metaDescription
            image_main {
                _key
                _type
                asset {
                    id
                    fluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                    }
                }
            }
            _rawAvailability
            _rawHobbies
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
            resume_intro
            side_text
            profession
            personal_skills {
                skill_desc
                skill_heading
                skill_image {
                    asset {
                        id
                        fluid {
                            base64
                            aspectRatio
                            src
                            srcSet
                            srcWebp
                            srcSetWebp
                            sizes
                        }
                    }
                }
            }
        }
    }
`;
