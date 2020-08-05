import React, { useRef, useEffect, useState } from 'react';
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

const StyledCanvas = styled.canvas`
    width: 90%;
    height: 90%;
    margin: auto;
    border: 1px solid blue;
`

const VideoPlayer = () => {

    const canvasRef = useRef(null);

    useEffect(() => {
        console.log(canvasRef.current);
    })

    return (
        <StyledPlayer>
            <StyledCanvas ref={canvasRef}></StyledCanvas>
        </StyledPlayer>
    )
}

export default VideoPlayer