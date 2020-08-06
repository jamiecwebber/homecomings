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

    const recordingStreamRef = useRef(null);
    const recordingChunksRef = useRef([]);

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
            // context.clearRect(0, 0, canvas.width, canvas.height);

            // get current data
            let currentImage = context.getImageData(0, 0, canvas.width, canvas.height);

            // get data from the three video streams
            context.drawImage(videoRefs['left'], 0, 0, canvas.width, canvas.height);
            let leftImage = context.getImageData(0,0,canvas.width, canvas.height);

            context.drawImage(videoRefs['bottom'], 0, 0, canvas.width, canvas.height);
            let bottomImage = context.getImageData(0,0,canvas.width, canvas.height);

            context.drawImage(videoRefs['right'], 0, 0, canvas.width, canvas.height);
            let rightImage = context.getImageData(0,0,canvas.width, canvas.height);

            // calculate the new frame, using the left image to store the data

            // takes the average of the three channels for each video and plays them in r/g/b channels
            for (let i = 0; i < leftImage.data.length; i+=4) {
                leftImage.data[i] = 1.5*(leftImage.data[i] + leftImage.data[i+1] + leftImage.data[i+2])/3;
                leftImage.data[i+1] = 1.5*(bottomImage.data[i] + bottomImage.data[i+1] + bottomImage.data[i+2])/3;
                leftImage.data[i+2] = 1.5*(rightImage.data[i] + rightImage.data[i+1] + rightImage.data[i+2])/3;
            };

            // turn off one colour channel of each image
            // for (let i = 0; i < leftImage.data.length; i+=4) {
            //     leftImage.data[i] = (leftImage.data[i] + bottomImage.data[i])/1.5;
            //     leftImage.data[i+1] = (bottomImage.data[i+1] + rightImage.data[i+1])/1.5;
            //     leftImage.data[i+2] = (rightImage.data[i+2] + leftImage.data[i+2])/1.5;
            // };

            // displays the average colour of the three videos 
            // for (let i = 0; i < leftImage.data.length; i+=1) {
            //     leftImage.data[i] = (leftImage.data[i] + bottomImage.data[i] + rightImage.data[i])/3;
            // };



            context.putImageData(leftImage, 0, 0);
            requestId = requestAnimationFrame(render);
        };
        
        playing ? cancelAnimationFrame(requestId) : render();

        return () => {
            cancelAnimationFrame(requestId);
        }
    }, [playing, videoRefs])

    const handleCanvasClick = () => {
        setPlaying(!playing);
        if (playing) {
            recordingChunksRef.current = [];
            const stream = canvasRef.current.captureStream();
            recordingStreamRef.current = new MediaRecorder(stream);
            console.log(recordingStreamRef.current);
            recordingStreamRef.current.ondataavailable = e => recordingChunksRef.current.push(e.data);

            recordingStreamRef.current.start();
            recordingStreamRef.current.onstop = (e) => {
                console.log(recordingChunksRef.current);
                exportVid(new Blob(recordingChunksRef.current, {type: 'video/webm;codecs=vp9'}));
            }
        } else {
            recordingStreamRef.current.stop();
        }
    }

    function exportVid(blob) {
        console.log('in exportVid function');
        const vid = document.createElement('video');
        vid.src = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = 'myvid.webm';
        a.href = vid.src;
        a.click();
    }

    return (
        <StyledPlayer>
            <StyledCanvas ref={canvasRef} onClick={handleCanvasClick}></StyledCanvas>
            <br />
            {recordingChunksRef.current}
        </StyledPlayer>
    )
}

export default VideoPlayer