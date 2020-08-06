import React from 'react';
import styled from 'styled-components';
import VideoInput from './VideoInput';
import VideoPlayer from './VideoPlayer';
import cakeVideo from '../../media/cake.mp4';
import danceVideo from '../../media/dance.mp4';
import minionsVideo from '../../media/minions.mp4';

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
            <VideoInput display='left' videoSource={cakeVideo}/>
            <VideoInput display='bottom' videoSource={danceVideo}/>
            <VideoInput display='right' videoSource={minionsVideo}/>
        </StyledHub>
    )
}

export default PerformerHub;