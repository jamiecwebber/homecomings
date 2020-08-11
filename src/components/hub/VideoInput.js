import React, { useEffect, useContext, useRef } from 'react';
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

    const vidRef = useRef(null);

    useEffect(()=>{
        if (!refs[display] || refs[display] !== vidRef.current) {
            setRefs({...refs, [display]:vidRef.current});
        }
    }, [refs, display, setRefs, vidRef])

    useEffect(()=>{
        if (!videoSource) {
            navigator.mediaDevices.getUserMedia({video:true, audio:false})
                .then((mediaStream)=>{
                    vidRef.current.srcObject = mediaStream;
                });
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
        <StyledVideo ref={vidRef} src={videoSource} onClick={handleToggleVideo} loop muted></StyledVideo>
    </StyledInputBox>
    )
}

export default VideoInput;