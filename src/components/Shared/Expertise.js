import React from 'react';
import {Link} from 'gatsby';
import styled, {keyframes} from 'styled-components';

const ExpertiseWrap = styled.section`
    grid-column: 4 / -1;
    grid-row: 1 / 2;
`;

const ExpertiseInner = styled.div`
    @media screen and (min-width: 80em) {
        display: flex;
        padding: 1em 0 0 0;
    }
`;
const SkillList = styled.ul`
    flex: 4;
    list-style: none;
    li {
        display: flex;
        margin-bottom: 15px;
    }
    h3 {
        font-size: 0.875rem;
        font-weight: 300;
        text-transform: uppercase;
        margin-left: 1em;
        align-self: center;
        width: 90px;
    }
`;

const moveHorizontally = x => keyframes`
    0% {
        width: 0;
    }
    100% {
        width: x;
    }
`;

const SkillBar = styled.span`
    background: #515252;
    display: block;
    height: 30px;
    width: 100%;
    border-radius: 25px;
    flex: 15;
    @media screen and (min-width: 64em) {
        height: 40px;
    }
    &:after {
        border-radius: 25px;
        background: white;
        display: block;
        content: '';
        height: 30px;
        width: 0;
        width: ${props => props.skill};
        animation-name: ${props => moveHorizontally(props.skill)};
        animation-duration: 4s;
        @media screen and (min-width: 64em) {
            height: 40px;
        }
    }
`;

const WriteUp = styled.p`
    color: #bebebe;
    flex: 1;
    padding-right: 3em;
    font-size: 0.875rem;
    max-width: 60%;
    padding-bottom: 2em;
    @media screen and (min-width: 80em) {
        padding-bottom: 0;
        max-width: auto;
    }
`;

const Expertise = ({expertise}) => (
    <ExpertiseWrap>
        <h2>Expertise & levels</h2>
        {expertise.length ? (
            <ExpertiseInner>
                <WriteUp>
                    For a further write-up on tools I use on a daily basis,
                    please head to my{' '}
                    <Link to="/uses" title="What I use">
                        what I use
                    </Link>{' '}
                    page.
                </WriteUp>
                <SkillList>
                    {expertise.map(skill => (
                        <li key={skill.skill.replace(' ', '-').toLowerCase()}>
                            <SkillBar skill={`${(100 * skill.level) / 10}%`} />
                            <h3>{skill.skill}</h3>
                        </li>
                    ))}
                </SkillList>
            </ExpertiseInner>
        ) : (
            <p>No experience levels added</p>
        )}
    </ExpertiseWrap>
);

export default Expertise;
