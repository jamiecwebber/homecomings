import React, { useRef, useEffect, useState } from 'react';
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

    const canvasRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const requestId = useRef(null);

    useEffect(() => {
        console.log(canvasRef.current);

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
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        let requestId;
        let i = 0;
        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(
                canvas.width / 2,
                canvas.height / 2,
                (canvas.width / 2) * Math.abs(Math.cos(i)),
                0,
                2 * Math.PI
            );
            context.fill();
            i += 0.05;
            requestId = requestAnimationFrame(render);
        };
        
        playing ? cancelAnimationFrame(requestId) : render();

        return () => {
            cancelAnimationFrame(requestId);
        }
    }, [playing])

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