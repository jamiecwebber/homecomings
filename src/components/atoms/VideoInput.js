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

const StyledCanvas = styled.canvas`
    height: 60%;
    width: 60%;
    border: 1px solid black;
`

const VideoInput = ({display, videoSource}) => {

    const [refs, setRefs] = useContext(VideoContext);

    const [isPlaying, setIsPlaying ] = useState(false);

    const vidRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{
        vidRef.current = document.createElement('video');
        vidRef.current.loop = true;
        vidRef.current.muted = true;
    },[])

    useEffect(()=>{
        if (!refs[display] || refs[display] !== canvasRef.current) {
            setRefs({...refs, [display]:canvasRef.current});
        }
    }, [refs, display, setRefs, canvasRef])

    useEffect(()=>{
        if (!videoSource) {
            navigator.mediaDevices.getUserMedia({video:true, audio:false})
                .then((mediaStream)=>{
                    vidRef.current.srcObject = mediaStream;
                });
        }
        vidRef.current.src = videoSource;
    }, [videoSource])

    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');

        let requestId;
        const render = () => {
            context.drawImage(vidRef.current, 0, 0, canvas.width, canvas.height);
           
            requestId = requestAnimationFrame(render);
        };
        
        isPlaying ? render() : cancelAnimationFrame(requestId);

        return () => {
            cancelAnimationFrame(requestId);
        }
    }, [isPlaying])

    const handleToggleVideo = () => {
        isPlaying ? vidRef.current.pause() : vidRef.current.play();
        setIsPlaying(!isPlaying);
    }

    return (
    <StyledInputBox display={display}>
        <StyledCanvas ref={canvasRef} onClick={handleToggleVideo}></StyledCanvas>
    </StyledInputBox>
    )
}

export default VideoInput;