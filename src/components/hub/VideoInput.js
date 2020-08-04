import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledInputBox = styled.div`
border: 2px solid black;
border-radius: 2px;
margin: auto;
height: 100%;
width: 100%;
grid-area: ${props => props.display};
`

const StyledVideo = styled.video`
    height: 60%;
    width: 60%;
    border: 1px solid black;
`

const VideoInput = (props) => {

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
    <StyledInputBox display={props.display}>
        {videoLoaded ? <StyledVideo src={props.videoSource} loop='true' mute='true' autoplay='true'></StyledVideo> : "No video"}
    </StyledInputBox>
    )
}

export default VideoInput;