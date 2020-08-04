import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VideoInput = (props) => {

    const StyledVideo = styled.div`
        border: 2px solid black;
        border-radius: 2px;
        width: 100%;
        height: 100%;
        margin: auto;
        grid-area: ${props.display};
    `
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(()=>{
        if (props.videoSource) {
            // load the video
            setVideoLoaded(true);
        } else {
            // display prompt for video
        }
    }, [props.videoSource])


    return (
    <StyledVideo>
        {props.display}<br/>
        {videoLoaded.toString()}
    </StyledVideo>
    )
}

export default VideoInput;