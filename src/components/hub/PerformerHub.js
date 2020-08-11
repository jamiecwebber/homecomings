import React from 'react';
import styled from 'styled-components';
import VideoInput from '../atoms/VideoInput';
import VideoPlayer from '../atoms/VideoPlayer';
import texture1 from '../../media/texture1.mp4';
import texture2 from '../../media/texture2.mp4';
import texture3 from '../../media/texture3.mp4';

const StyledHub = styled.div`
    margin: auto;
    width: 80vw;
    height: 40vw;
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
    return (
        <StyledHub>
            <VideoPlayer />
            <VideoInput display='left' videoSource={texture1}/>
            <VideoInput display='bottom' videoSource={texture2}/>
            <VideoInput display='right' videoSource={texture3}/>
        </StyledHub>
    )
}

export default PerformerHub;