import React, { useRef, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { VideoContext } from '../../contexts/VideoContext.js';
import VideoRecorder from './VideoRecorder.js';

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

const VideoPlayer = () => {

    const canvasRef = useRef(null);
    let { canvasRefs } = useContext(VideoContext);

    const [isPlaying, setIsPlaying] = useState(false);

    // for detecting screen resizes, currently deactivated:
    // const [screenSize, setScreenSize] = useState(null);
    // useEffect(() => {
    //     const handleWindowResize = () => setScreenSize(window.innerWidth);
    //     window.addEventListener("resize", handleWindowResize);
    //     return () => window.removeEventListener("resize", handleWindowResize);
    // }, []);

    // on loading, set inner size of canvas context
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

    // the animation loop that renders the canvas
    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');

        let requestId;
        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // get current datas
            // let currentImage = context.getImageData(0, 0, canvas.width, canvas.height);

            // get data from the three video streams
            let leftImage = canvasRefs['left'].getImageData(0,0,canvas.width, canvas.height);
            let bottomImage = canvasRefs['bottom'].getImageData(0,0,canvas.width, canvas.height);
            let rightImage = canvasRefs['right'].getImageData(0,0,canvas.width, canvas.height);

            // calculate the new frame, using the left image to store the data
            for (let i = 0; i < leftImage.data.length; i+=4) {
                    leftImage.data[i] = (leftImage.data[i] + bottomImage.data[i] + rightImage.data[i]);
                    leftImage.data[i+1] = (leftImage.data[i+1] + bottomImage.data[i+1] + rightImage.data[i+1]);
                    leftImage.data[i+2] = (leftImage.data[i+2] + bottomImage.data[i+2] + rightImage.data[i+2]);
                    leftImage.data[i+3] = 256;
                };

            context.putImageData(leftImage, 0, 0);
            requestId = requestAnimationFrame(render);
        };
        
        isPlaying ? render() : cancelAnimationFrame(requestId);

        return () => {
            cancelAnimationFrame(requestId);
        }
    }, [isPlaying, canvasRefs])

    const toggleIsPlaying = () => {
        setIsPlaying(!isPlaying); // this triggers the above effect and starts the animation loop
    }

    return (
        <StyledPlayer>
            <StyledCanvas ref={canvasRef} onClick={toggleIsPlaying}></StyledCanvas>
            <VideoRecorder canvasRef={canvasRef} isPlaying={isPlaying}/>
        </StyledPlayer>
    )
}

export default VideoPlayer