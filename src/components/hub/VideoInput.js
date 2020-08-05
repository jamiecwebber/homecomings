import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import VideoContext from '../../contexts/videoContext.js';

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

const VideoInput = ({display, videoSource}) => {

    const videoContext = useContext(VideoContext);

    const [videoLoaded, setVideoLoaded] = useState(false);

    const vidRef = useRef(null);

    useEffect(()=>{
        if (videoSource) {
            // load the video
            setVideoLoaded(true);
        } else {
            // display prompt for video
        }
    }, [videoSource, videoContext])

    const handleToggleVideo = () => {
        if (!vidRef.current.paused) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }

    return (
    <StyledInputBox display={display}>
        {videoLoaded ? <StyledVideo ref={vidRef} id={display} src={videoSource} onClick={handleToggleVideo} loop muted></StyledVideo> : "No video"}
    </StyledInputBox>
    )
}

export default VideoInput;