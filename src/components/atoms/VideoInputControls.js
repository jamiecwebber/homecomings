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
    justify-content: center;
`

const ColourButton = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 3px;
    font-weight: bold;
    color: ${ props => props.uncheckedColour };
    border: 2px solid ${ props => props.uncheckedColour };
    background: ${ props => props.checked ? props.checkedColour : props.uncheckedColour };
`

const VideoInputControls = ( { display, isPlaying, setIsPlaying } ) => {

    const { currentSettings, settingsDispatch } = useContext(VideoContext);
    const [ localSettings, setLocalSettings ] = useState(currentSettings[display]);
    const prevSettings = useRef();

    const [grayscale, setGrayscale] = useState(false);
    const [isBlackTransparent, setIsBlackTransparent] = useState(false);
    const [showColour, setShowColour] = useState([0,0,0]);

    // // keep local settings up to date with global settings
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
        if (prevSettings.current !== localSettings) { // not sure this is right
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

    function togglePlaying() {
        setIsPlaying(!isPlaying);
    }

    return (

        <StyledContainer>
            <StyledButtonRow>
                <ColourButton checked={showColour[0] ? true : false} checkedColour="lightcoral" uncheckedColour="darkred" onClick={()=>toggleColour(0)}>✓</ColourButton>
                <ColourButton checked={showColour[1] ? true : false} checkedColour="lightgreen" uncheckedColour="darkgreen" onClick={()=>toggleColour(1)}>✓</ColourButton>
                <ColourButton checked={showColour[2] ? true : false} checkedColour="cyan" uncheckedColour="darkblue" onClick={()=>toggleColour(2)}>✓</ColourButton>
            </StyledButtonRow>
            <StyledButtonRow>
                <ColourButton checked={isPlaying} checkedColour="limegreen" uncheckedColour="forestgreen" onClick={togglePlaying}>✓</ColourButton>
                <ColourButton checked={grayscale} checkedColour="ivory" uncheckedColour="gray" onClick={toggleGrayscale}>✓</ColourButton>
                <ColourButton checked={isBlackTransparent} checkedColour="white" uncheckedColour="black" onClick={toggleIsBlackTransparent}>✓</ColourButton>
            </StyledButtonRow>
        </StyledContainer>
    )
}

export default VideoInputControls;