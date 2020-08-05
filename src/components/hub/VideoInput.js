import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { VideoContext } from '../../contexts/VideoContext.js';

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

    const [refs, setRefs] = useContext(VideoContext);

    const [videoLoaded, setVideoLoaded] = useState(false);

    const vidRef = useRef(null);

    useEffect(()=>{
        if (!refs[display]) {
            setRefs({...refs, [display]:vidRef.current});
        }
    }, [refs, display, setRefs])
    
    useEffect(()=>{
        if (videoSource) {
            // load the video
            setVideoLoaded(true);
            
        } else {
            // display prompt for video
        }
    }, [videoSource])

    const handleToggleVideo = () => {
        if (!vidRef.current.paused) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
    }

    return (
    <StyledInputBox display={display}>
        {videoLoaded ? <StyledVideo ref={vidRef} src={videoSource} onClick={handleToggleVideo} loop muted></StyledVideo> : "No video"}
    </StyledInputBox>
    )
}

export default VideoInput;