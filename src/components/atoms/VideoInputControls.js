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

    const [ localSettings, setLocalSettings ] = useState({});
    const { currentSettings, settingsDispatch } = useContext(VideoContext);
    const prevSettings = useRef();

    const [grayscale, setGrayscale] = useState(false);
    // const [isBlackTransparent, setIsBlackTransparent] = useState(currentSettings[display].isBlackTransparent);
    // const [showRed, setShowRed] = useState(currentSettings[display].showRGB[0] === 1 ? true : false);
    // const [showGreen, setShowGreen] = useState(currentSettings[display].showRGB[1] === 1 ? true : false);
    // const [showBlue, setShowBlue] = useState(currentSettings[display].showRGB[2] === 1 ? true : false);

    // // keep local settings up to date with global settings
    // useEffect(()=>{
    //     console.log(display);
    //     console.log(currentSettings);
    //     console.log(currentSettings[display]);
    //     setLocalSettings(currentSettings[display]);
    // },[currentSettings, setLocalSettings, display]);

    useEffect(()=>{
        if (currentSettings) {
            console.log(currentSettings);
            setLocalSettings(currentSettings[display]);
        }
    }, [setLocalSettings, currentSettings, display])

    // checks for updates to local settings and updates global settings accordingly
    useEffect(()=>{
        settingsDispatch({
            action: "UPDATE_SETTINGS",
            display: display,
            payload: localSettings
        })
    },[display, settingsDispatch, localSettings])

    // function toggleGrayscale() {
    //     setCurrentSettings((prevState)=>{
    //         console.log(`toggling grayscale on ${display}`)
    //         return ( {...prevState,  } )
    //     })
    //     setGrayscale(!grayscale);
    // }

    // function toggleIsBlackTransparent() {
    //     setCurrentSettings((prevState)=>{
    //         let newSettings = videoSettings;
    //         newSettings[currentChannel][display].isBlackTransparent = !isBlackTransparent;
    //         return newSettings;
    //     })
    //     setIsBlackTransparent(!isBlackTransparent);
    // }

    // function toggleRed() {
    //     setCurrentSettings((prevState)=>{
    //         let newSettings = videoSettings;
    //         newSettings[currentChannel][display].showRGB[0] = showRed ? 0 : 1;
    //         return newSettings;
    //     })
    //     setShowRed(!showRed);
    // }

    // function toggleGreen() {
    //     setCurrentSettings((prevState)=>{
    //         let newSettings = videoSettings;
    //         newSettings[currentChannel][display].showRGB[1] = showGreen ? 0 : 1;
    //         return newSettings;
    //     })
    //     setShowGreen(!showGreen);
    // }

    // function toggleBlue() {
    //     setCurrentSettings((prevState)=>{
    //         let newSettings = videoSettings;
    //         newSettings[currentChannel][display].showRGB[2] = showBlue ? 0 : 1;
    //         return newSettings;
    //     })
    //     setShowBlue(!showBlue);
    // }

    

    // function updateSettings() {
    //     setLocalSettings((prev)=> { return { grayscale: !prev.grayscale } })
    // }

    function toggleGrayscale() {
        setLocalSettings({grayscale: !grayscale});
        setGrayscale(!grayscale);
    }

    return (

        <StyledContainer>
            <StyledButtonRow>
                <StyledButton onClick={toggleGrayscale}>
                    {grayscale ? "Don't filter to grayscale" : "Filter to grayscale"}
                </StyledButton>
                {/* <StyledButton onClick={toggleIsBlackTransparent}>{isBlackTransparent ? "Don't make black transparent" : "Make black transparent"}</StyledButton> */}
            </StyledButtonRow>
            {/* <StyledButtonRow>
                <StyledButton onClick={toggleRed}>{showRed ? "hide red" : "show red"}</StyledButton>
                <StyledButton onClick={toggleGreen}>{showGreen ? "hide green" : "show green"}</StyledButton>
                <StyledButton onClick={toggleBlue}>{showBlue ? "hide blue" : "show blue"}</StyledButton>
            </StyledButtonRow> */}
        </StyledContainer>
    )
}

export default VideoInputControls;