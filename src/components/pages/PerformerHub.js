import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import VideoInput from '../atoms/VideoInput';
import VideoPlayer from '../atoms/VideoPlayer';
// import { VideoContext } from '../../contexts/VideoContext';

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

    // const { videos } = useContext(VideoContext)
    
    return (
        <StyledHub>
            <VideoPlayer />
            <VideoInput display='left'  />
            <VideoInput display='bottom' />
            <VideoInput display='right' />
        </StyledHub>
    )
}

export default PerformerHub;