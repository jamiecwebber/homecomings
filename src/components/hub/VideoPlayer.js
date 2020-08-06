import React, { useRef, useEffect, useState, useContext } from 'react';
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

    const [ videoRefs ] = useContext(VideoContext);

    const canvasRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    // const [screenSize, setScreenSize] = useState(null);
    
    // useEffect(() => {
    //     const handleWindowResize = () => setScreenSize(window.innerWidth);
    //     window.addEventListener("resize", handleWindowResize);
    //     return () => window.removeEventListener("resize", handleWindowResize);
    // }, []);

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
        // canvas.style.width = `${width}px`;
        // canvas.style.height = `${height}px`;
    // }, [screenSize])
    }, []);

    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');

        let requestId;
        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.drawImage(videoRefs['left'], 0, 0, canvas.width, canvas.height);

            // let frame = videoRefs['left'].getImageData(0,0,canvas.width, canvas.height);
            // canvasRef.current.putImageData(frame, 0, 0);


            

            requestId = requestAnimationFrame(render);
        };
        
        playing ? cancelAnimationFrame(requestId) : render();

        return () => {
            cancelAnimationFrame(requestId);
        }
    }, [playing, videoRefs])

    const handleCanvasClick = () => {
        setPlaying(!playing);
    }

    return (
        <StyledPlayer>
            <StyledCanvas ref={canvasRef} onClick={handleCanvasClick}></StyledCanvas>
        </StyledPlayer>
    )
}

export default VideoPlayer