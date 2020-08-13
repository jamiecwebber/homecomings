import React, { useState, useEffect, useContext, useRef } from 'react';
import { VideoContext } from '../../contexts/VideoContext.js';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const StyledButton = styled.button`
    border-radius: 3px;
    background: salmon
    ;
`

const VideoInputControls = ( { display } ) => {

    const { currentSettings, settingsDispatch } = useContext(VideoContext);
    const [ localSettings, setLocalSettings ] = useState(currentSettings[display]);
    const prevSettings = useRef();

    const [grayscale, setGrayscale] = useState(false);
    const [isBlackTransparent, setIsBlackTransparent] = useState(false);
    const [showColour, setShowColour] = useState([0,0,0]);

    // // keep local settings up to date with global settings
    // useEffect(()=>{
    //     console.log(display);
    //     console.log(currentSettings);
    //     console.log(currentSettings[display]);
    //     setLocalSettings(currentSettings[display]);
    // },[currentSettings, setLocalSettings, display]);

    useEffect(()=>{
        if (currentSettings[display]) {
            prevSettings.current = currentSettings[display];
            setLocalSettings(currentSettings[display]);
            setGrayscale(currentSettings[display].grayscale);
            setIsBlackTransparent(currentSettings[display].isBlackTransparent);
            setShowColour(currentSettings[display].showRGB)
        }
    }, [setLocalSettings, currentSettings, display])

    // checks for updates to local settings and updates global settings accordingly
    useEffect(()=>{
        if (prevSettings.current !== localSettings) {
            settingsDispatch({
                type: "UPDATE_SETTINGS",
                display: display,
                payload: localSettings
            })
        }
    },[display, settingsDispatch, localSettings])

    function toggleGrayscale() {
        setLocalSettings({...localSettings, grayscale: !grayscale});
        setGrayscale(!grayscale);
    }

    function toggleIsBlackTransparent() {
        setLocalSettings({...localSettings, isBlackTransparent: !isBlackTransparent});
        setIsBlackTransparent(!isBlackTransparent);
    }

    function toggleColour(colour) {
        let newRGB = localSettings.showRGB;
        newRGB[colour] = newRGB[colour] ? 0 : 1;
        setLocalSettings({...localSettings, showRGB: newRGB})
        setShowColour(newRGB);
    }

    return (

        <StyledContainer>
            <StyledButtonRow>
                <StyledButton onClick={toggleGrayscale}>
                    {grayscale ? "Don't filter to grayscale" : "Filter to grayscale"}
                </StyledButton>
                <StyledButton onClick={toggleIsBlackTransparent}>
                    {isBlackTransparent ? "Don't make black transparent" : "Make black transparent"}</StyledButton>
            </StyledButtonRow>
            <StyledButtonRow>
                <StyledButton onClick={()=>toggleColour(0)}>{showColour[0] ? "hide red" : "show red"}</StyledButton>
                <StyledButton onClick={()=>toggleColour(1)}>{showColour[1] ? "hide green" : "show green"}</StyledButton>
                <StyledButton onClick={()=>toggleColour(2)}>{showColour[2] ? "hide blue" : "show blue"}</StyledButton>
            </StyledButtonRow>
        </StyledContainer>
    )
}

export default VideoInputControls;