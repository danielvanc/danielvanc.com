import React from 'react';
import styled from 'styled-components';
import ProfileLinks from './ProfileLinks';
import TitleAndSubtitle from './TitleAndSubTitle';

const ResumeHeader = styled.div`
    @media screen and (min-width: 1280px) {
        display: flex;
        flex: 2;
    }
`;

const ImageText = styled.div`
    margin-top: 2em;
    overflow: hidden;
    @media screen and (min-width: 600px) {
        margin-top: 5em;
        overflow: visible;
    }
    @media screen and (min-width: 600px) and (max-width: 767px) {
        margin-top: 3em;
    }
    @media screen and (min-width: 1280px) {
        flex: 5;
        order: 2;
    }
    img {
        display: block;
        margin: 0 auto;
        position: relative;
        min-width: 130%;
        left: -25%;
        transform: translateX(5%);
        @media screen and (min-width: 600px) {
            float: left;
            /* transform: translate(-50%, -20%);
            shape-outside: circle(53.11% at 1.33% 30.03%); */
            transform: translate(-45%, -20%);
            left: auto;
            shape-outside: circle(57.11% at 1.33% 30.03%);
            margin: auto;
            max-width: 100%;
            min-width: auto;
        }
        @media screen and (min-width: 600px) and (max-width: 767px) {
            max-width: 76%;
        }
        @media screen and (min-width: 768px) {
            shape-outside: circle(57.11% at 8.33% 40.03%);
            margin-bottom: -25%;
        }
        @media screen and (min-width: 1024px) {
            shape-outside: circle(56.11% at 11.33% 43.03%);
            max-width: 70%;
        }
        @media screen and (min-width: 1280px) {
            shape-outside: circle(53.11% at 44.33% 40.03%);
            margin: -5em 80px 0 0;
            max-width: 50%;
            transform: none;
        }
    }
`;

const ResumeIntroduction = styled.p`
    margin: 1em auto 0 auto;
    max-width: 90%;
    text-align: center;
    @media screen and (min-width: 600px) {
        margin: 0 1.5em 0 0;
        max-width: 100%;
        text-align: left;
    }
    @media screen and (min-width: 1280px) {
        flex: 2;
        margin-right: 7em;
        order: 4;
    }
`;

const SideText = styled.p`
    margin: 1.5em auto;
    max-width: 90%;
    text-align: center;
    @media screen and (min-width: 600px) {
        margin: 1.5em 2em 1.5em 0;
        max-width: 100%;
        text-align: left;
    }
    @media screen and (min-width: 1280px) {
        flex: 1;
        order: 1;
        align-self: flex-end;
        margin: 0;
        padding: 0 1em 3em 0;
    }
`;

const ImageTitleAndDescription = ({
    profession,
    profileImage,
    intro: resumeIntro,
    side_text: sideText,
}) => (
    <>
        <TitleAndSubtitle profession={profession} intro={resumeIntro} />
        <ResumeHeader>
            <ImageText>
                {profileImage && (
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={profileImage.asset.fluid.srcSetWebp}
                            sizes={profileImage.asset.fluid.sizes}
                        />
                        <source
                            srcSet={profileImage.asset.fluid.srcSet}
                            sizes={profileImage.asset.fluid.sizes}
                        />
                        <img
                            sizes={profileImage.asset.fluid.sizes}
                            src={profileImage.asset.fluid.srcSet}
                            alt=""
                            loading="lazy"
                        />
                    </picture>
                )}
                <ResumeIntroduction>{resumeIntro}</ResumeIntroduction>
            </ImageText>
            <SideText>{sideText}</SideText>
            <ProfileLinks />
        </ResumeHeader>
    </>
);

export default ImageTitleAndDescription;
