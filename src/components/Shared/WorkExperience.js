import React, {Fragment} from 'react';
import styled from 'styled-components';

const Experience = styled.section`
    grid-column: 1 / 4;
    grid-row: 1 / 5;

    @media screen and (min-width: 768px) {
        padding: 55% 0 0 10%;
    }
    @media screen and (min-width: 1024px) {
        padding: 65% 0 0 10%;
    }
    @media screen and (min-width: 1280px) {
        padding: 4em 0 0 0;
    }
    h2 {
    }
    h3 {
        margin-bottom: 1em;
        font-weight: 400;
        line-height: 120%;
        strong {
            color: var(--color-mint);
            font-size: 0.813rem;
            font-weight: 400;
            text-transform: uppercase;
        }
    }
    h4 {
        font-weight: 300;
    }
    p {
        color: #bebebe;
    }
`;

const WorkPlace = styled.dl`
    margin: 1em 0 0 0;
    dd {
        border-bottom: 5px solid #393939;
        display: block;
        margin: 0 0 15px 0;
        padding: 0 0 20px;
        &:last-of-type {
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }
    strong {
        display: block;
    }
`;

const WorkExperience = ({history}) => (
    <Experience>
        <h2>Experience</h2>
        {history.length ? (
            <WorkPlace>
                {history.map(work => (
                    <Fragment
                        key={work.company.replace(' ', '-').toLowerCase()}
                    >
                        <dt>
                            <h3>
                                {work.company}
                                <strong>
                                    {work.started} - {work.finished}
                                </strong>
                            </h3>
                        </dt>
                        <dd>
                            <h4>{work.role}</h4>
                            <p>{work.job_desc}</p>
                        </dd>
                    </Fragment>
                ))}
            </WorkPlace>
        ) : (
            <p>No experience added</p>
        )}
    </Experience>
);

export default WorkExperience;
