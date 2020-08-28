import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-image: url(${props => props.img});
    min-height: 100vh;
    width: 100%;
`

export default Background
