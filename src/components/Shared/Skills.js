import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
    grid-column: 4 / -1;
    grid-row: 2 / 3;
    padding: 3em 0;
    @media screen and (min-width: 768px) {
        padding: 0;
    }
`;

const SkillsContainer = styled.div`
    @media screen and (min-width: 1280px) {
        display: flex;
    }
    p {
        color: #bebebe;
        flex: 2;
        padding-right: 2em;
        font-size: 0.875rem;
    }
`;

const SkillsGrid = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex: 8;
    margin-top: 2em;
    /* @media screen and (max-width: 599px) {
        margin-right: auto;
        margin-left: auto;
        max-width: 70%;
    }
    @media screen and (max-width: 470px) {
        margin-right: auto;
        margin-left: auto;
        max-width: 90%;
    }
    @media screen and (max-width: 370px) {
        margin-right: auto;
        margin-left: auto;
        max-width: 100%;
    } */
    @media screen and (min-width: 1280px) {
        margin-top: 0;
    }
    img {
        /* flex: 5;
        margin-left: 1em; */
        /* min-width: 50px; */
        /* flex: 1; */
        max-width: 100px;
        @media screen and (min-width: 1280px) {
            max-width: 125px;
        }
    }
    picture {
        img {
            transition: transform 0.8s ease-in-out;
        }
        &:hover {
            img {
                transform: rotate(360deg);
            }
        }
    }
    li {
        display: flex;
        img {
            margin-left: 1em;
        }
        @media screen and (max-width: 1023px) {
            &:nth-child(even) {
                img {
                    order: 1;
                    margin: 0 1em 0 0;
                }
                h3 {
                    order: 2;
                }
            }
        }
        @media screen and (min-width: 600px) and (max-width: 767px) {
            width: 50%;
            &:nth-child(1) {
                img {
                    padding-right: 1em;
                }
            }

            &:nth-child(2) {
                h3 {
                    order: 1;
                }
                picture {
                    order: 2;
                    margin-left: 1em;
                }
            }
            &:nth-child(3) {
                img {
                    /* order: 1; */
                    margin-right: 1em;
                }
                h3 {
                    order: 2;
                }
            }
            &:nth-child(4) {
                img {
                    margin-left: 1em;
                }
            }
        }

        @media screen and (min-width: 1024px) {
            width: 50%;
            &:nth-child(1) {
                img {
                    padding-right: 1em;
                }
            }
            &:nth-child(3),
            &:nth-child(4) {
                img {
                    order: 1;
                    margin-right: 1em;
                }
                h3 {
                    order: 2;
                }
            }
        }
        @media screen and (min-width: 1280px) {
            flex: 5;
            width: auto;
            &:nth-child(2) {
                margin-left: 2em;
            }
            &:nth-child(3),
            &:nth-child(4) {
                img {
                    order: 1;
                    margin-right: 1em;
                }
                h3 {
                    order: 2;
                }
            }
        }
    }
    h3 {
        /* flex: 5; */
        font-size: 0.813rem;
        align-self: center;
        text-transform: uppercase;
        span {
            display: block;
            font-size: 14px;
            font-weight: 300;
            text-transform: none;
        }
    }
`;

const Skills = ({skills}) => (
    <SkillsSection>
        <h2>Personal Skills</h2>
        <SkillsContainer>
            <p>
                Additional skills acquired that sit outside of typical dev work.
            </p>
            {skills.length ? (
                <SkillsGrid>
                    {skills.map(skill => (
                        <li
                            key={skill.skill_heading
                                .replace('', '-')
                                .toLowerCase()}
                        >
                            <h3>
                                {skill.skill_heading}
                                <span>{skill.skill_desc}</span>
                            </h3>
                            <picture>
                                <source
                                    type="image/webp"
                                    srcSet={
                                        skill.skill_image.asset.fluid.srcSetWebp
                                    }
                                    sizes={skill.skill_image.asset.fluid.sizes}
                                />
                                <source
                                    srcSet={
                                        skill.skill_image.asset.fluid.srcSet
                                    }
                                    sizes={skill.skill_image.asset.fluid.sizes}
                                />
                                <img
                                    sizes={skill.skill_image.asset.fluid.sizes}
                                    src={skill.skill_image.asset.fluid.srcSet}
                                    alt=""
                                    loading="lazy"
                                />
                            </picture>
                        </li>
                    ))}
                </SkillsGrid>
            ) : (
                <p>No Personal Skills added</p>
            )}
        </SkillsContainer>
    </SkillsSection>
);

export default Skills;
