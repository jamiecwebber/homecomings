import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
// import { VideoContext } from '../../contexts/VideoContext.js';

const StyledInputBox = styled.div`
    border: 2px solid black;
    border-radius: 2px;
    margin: auto;
    height: 100%;
    width: 100%;
    grid-area: ${props => props.display};
`

const StyledCanvas = styled.canvas`
    height: 90%;
    width: 90%;
    border: 1px solid black;
`

const getPixelRatio = context => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
    
    return (window.devicePixelRatio || 1) / backingStore;
};

const VideoInput = ({display, videoSource, videoSettings, setVideoSettings, currentChannel}) => {

    // const [refs, setRefs] = useContext(VideoContext);

    const [isPlaying, setIsPlaying ] = useState(false);

    const vidRef = useRef(null);
    const canvasRef = useRef(null);

    // on loading, create video element but don't add it to the page   VIDEO
    useEffect(()=>{
        vidRef.current = document.createElement('video');
        vidRef.current.loop = true;
        vidRef.current.muted = true;
    },[])

    // on loading, set inner size of canvas context  CANVAS
    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');

        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
    }, []);

    // on loading, add the canvasRef to the videoSettings and make sure it stays up to date
    useEffect(()=>{
        if (videoSettings[currentChannel][display].canvasRef !== canvasRef) {
            setVideoSettings(()=>{
                let newSettings = videoSettings;
                newSettings[currentChannel][display].canvasRef = canvasRef;
                return newSettings;
            })
        }
    }, [canvasRef, display, currentChannel, videoSettings, setVideoSettings])

    // handle changing videoSource, not implemented yet  VIDEO
    useEffect(()=>{
        if (!videoSource) {
            navigator.mediaDevices.getUserMedia({video:true, audio:false})
                .then((mediaStream)=>{
                    vidRef.current.srcObject = mediaStream;
                });
        }
        vidRef.current.src = videoSource;
    }, [videoSource])

    // animation loop, controlled by isPlaying
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