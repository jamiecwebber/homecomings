import React from 'react';
import styled from 'styled-components';
import VideoInput from './VideoInput';
import VideoPlayer from './VideoPlayer';

const StyledHub = styled.div`
    margin: auto;
    width: 80vw;
    height: 40vw;
    border: 2px solid black;
    border-radius: 2px;
    display: grid;
    grid-gap: 20px;
    padding: 20px;
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
            <VideoInput display='left' videoSource='cake'/>
            <VideoInput display='bottom' videoSource='dance'/>
            <VideoInput display='right'/>
        </StyledHub>
    )
}

export default PerformerHub;