import React from 'react';
import styled from 'styled-components';
import BaseBlockContent from '@sanity/block-content-to-react';

const MastStandFirst = styled(BaseBlockContent)``;

const serializers = {
    types: {
        block(props) {
            switch (props.node.style) {
                case 'text':
                    return <p>{props.children}</p>;

                default:
                    return <p>{props.children}</p>;
            }
        },
    },
};

const StandFirst = ({pageSubTitle}) => (
    <MastStandFirst blocks={pageSubTitle} serializers={serializers} />
);

export default StandFirst;
