import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import VideoInputControls from './VideoInputControls.js';
import VideoSourceControls from './VideoSourceControls.js';
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

const VideoInput = ({display}) => {

    const { currentChannel, currentSettings, videos, devices, canvasRefs, setCanvasRefs } = useContext(VideoContext);

    const [isPlaying, setIsPlaying ] = useState(false);

    const [videoSource, setVideoSource] = useState(null);
    const prevVideoSource = useRef(null);

    const vidRef = useRef(null);
    const canvasRef = useRef(null);

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
        if (canvasRef.current.getContext('2d') !== canvasRefs[display]) {
            setCanvasRefs( { ...canvasRefs, [display] : canvasRef.current.getContext('2d') } )
            console.log(`updated canvasRef of ${display}`);
        }
    }, [canvasRefs, setCanvasRefs, display])

    // on loading, create video element but don't add it to the page   VIDEO
    useEffect(()=>{
        vidRef.current = document.createElement('video');
        vidRef.current.loop = true;
        vidRef.current.muted = true;
    },[])

    // handle changing videoSource, not implemented yet  VIDEO
    useEffect(()=>{
        console.log('videosource fired');
        if (videoSource && videoSource !== prevVideoSource.current) {
            if (videoSource.slice(0,8) !== '/static/') {
                console.log('webcam')
                vidRef.current.srcObject = null;
                navigator.mediaDevices.getUserMedia({deviceId: videoSource.deviceId, video:true})
                    .then((mediaStream)=>{
                        vidRef.current.src = null;
                        vidRef.current.srcObject = mediaStream;
                        prevVideoSource.current = videoSource;
                    });
            } else {
                vidRef.current.srcObject = null;
                vidRef.current.src = videoSource;
                console.log('video');
            }
        }
    }, [videoSource, devices, videos])

    // animation loop, controlled by isPlaying
    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');

        let requestId;
        const render = () => {
            context.drawImage(vidRef.current, 0, 0, canvas.width, canvas.height);
            let newImage = context.getImageData(0,0,canvas.width, canvas.height);

            // this is where the next frame is calculated, depending on the current settings
            
            for (let i = 0; i < newImage.data.length; i+=4) {

                if (currentSettings[display].grayscale) {
                    let gray = (newImage.data[i] + newImage.data[i+1] + newImage.data[i+2])/3;
                    newImage.data[i] = gray;
                    newImage.data[i+1] = gray;
                    newImage.data[i+2] = gray;
                };

                newImage.data[i] *= currentSettings[display].showRGB[0];
                newImage.data[i+1] *= currentSettings[display].showRGB[1];
                newImage.data[i+2] *= currentSettings[display].showRGB[2];


                if (currentSettings[display].isBlackTransparent) {
                    let gray = (newImage.data[i] + newImage.data[i+1] + newImage.data[i+2])/3;
                    if (gray <= 20) {
                        newImage.data[i+3] = (gray/20);
                    }
                }
            }

            context.putImageData(newImage, 0, 0);

            requestId = requestAnimationFrame(render);
        };
        
        // might change this for efficiency
        if (currentSettings[display]){
            isPlaying ? render() : cancelAnimationFrame(requestId);
        }

        return () => {
            cancelAnimationFrame(requestId);
        }
    }, [isPlaying, currentChannel, display, currentSettings])

    useEffect(()=>{
        isPlaying ? vidRef.current.play() : vidRef.current.pause();
    }, [isPlaying])

    const handleToggleVideo = () => {
        setIsPlaying(!isPlaying);
    }

    return (
    <StyledInputBox display={display}>
        <VideoSourceControls videoSource={videoSource} setVideoSource={setVideoSource} />
        <StyledCanvas ref={canvasRef} onClick={handleToggleVideo}></StyledCanvas>
        <VideoInputControls display={display} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
    </StyledInputBox>
    )
}

export default VideoInput;