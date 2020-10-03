import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    padding: 0px;
    background-image: url(${props => props.img});
    background-size: ${props=> props.pattern || 'cover'};
    top: 0px;
    left: 0px;
    height: 100%;
    overflow: auto;
    cursor: url(${props => props.cursor}),auto;
`

export default Background
