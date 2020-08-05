import React from 'react';
import styled from 'styled-components';
import { VideoContext } from '../../contexts/VideoContext.js';

const StyledPlayer = styled.div`
        width: 100%;
        height: 100%;
        border: 2px solid red;
        border-radius: 2px;
        margin: 0px auto;
        grid-area: top;
    `

const VideoPlayer = () => {

    return (
        <StyledPlayer></StyledPlayer>
    )
}

export default VideoPlayer