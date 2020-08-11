import React, {useState} from 'react';
import styled from 'styled-components';
import VideoInput from '../atoms/VideoInput';
import VideoPlayer from '../atoms/VideoPlayer';
import texture1 from '../../media/texture1.mp4';
import texture2 from '../../media/texture2.mp4';
import texture3 from '../../media/texture3.mp4';

const StyledHub = styled.div`
    margin: auto;
    width: 90vw;
    height: 45vw;
    border: 2px solid black;
    border-radius: 2px;
    display: grid;
    grid-gap: 20px;
    padding: 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas: 
        'controls top .'
        'left top right'
        'left bottom right'
        '. bottom .'
`

const PerformerHub = () => {

    
    // video settings will be an array of settings objects that you can switch through like channels
    // (maybe add a check and don't read off of the canvas if all colours are 0)
    const [videoSettings, setVideoSettings] = useState(
        [{
            'left': {
                grayscale: false,
                showRGB: [1,0,0],
                isBlackTransparent: true,
                canvasRef: null
            },
            'bottom': {
                grayscale: false,
                showRGB: [0,1,0],
                isBlackTransparent: true,
                canvasRef: null
            },
            'right': {
                grayscale: false,
                showRGB: [0,0,1],
                isBlackTransparent: true,
                canvasRef: null
            }
        }]); 

    const [currentChannel, setCurrentChannel] = useState(0);
    
    return (
        <StyledHub>
            <VideoPlayer 
                videoSettings={videoSettings} setVideoSettings={setVideoSettings} 
                currentChannel={currentChannel} setCurrentChannel={setCurrentChannel}/>
            <VideoInput 
                display='left' 
                videoSource={texture1} 
                videoSettings={videoSettings} setVideoSettings={setVideoSettings} 
                currentChannel={currentChannel}/>
            <VideoInput 
                display='bottom' 
                videoSource={texture2} 
                videoSettings={videoSettings} setVideoSettings={setVideoSettings} 
                currentChannel={currentChannel}/>
            <VideoInput 
                display='right' 
                videoSource={texture3} 
                videoSettings={videoSettings} setVideoSettings={setVideoSettings} 
                currentChannel={currentChannel}/>
        </StyledHub>
    )
}

export default PerformerHub;