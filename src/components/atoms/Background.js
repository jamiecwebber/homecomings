import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-image: url(${props => props.img});
    background-position: 'center';
    background-size: 100%;
`

export default Background
