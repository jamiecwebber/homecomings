import React, {useState, useEffect} from 'react'
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

const VideoInputControls = ( { videoSettings, setVideoSettings, display, currentChannel } ) => {

    const [grayscale, setGrayscale] = useState(videoSettings[currentChannel][display].grayscale);
    const [isBlackTransparent, setIsBlackTransparent] = useState(videoSettings[currentChannel][display].isBlackTransparent);
    const [showRed, setShowRed] = useState(videoSettings[currentChannel][display].showRGB[0] === 1 ? true : false);
    const [showGreen, setShowGreen] = useState(videoSettings[currentChannel][display].showRGB[1] === 1 ? true : false);
    const [showBlue, setShowBlue] = useState(videoSettings[currentChannel][display].showRGB[2] === 1 ? true : false);

    function toggleGrayscale() {
        setVideoSettings(()=>{
            let newSettings = videoSettings;
            newSettings[currentChannel][display].grayscale = !grayscale;
            return newSettings;
        })
        setGrayscale(!grayscale);
    }

    function toggleIsBlackTransparent() {
        setVideoSettings(()=>{
            let newSettings = videoSettings;
            newSettings[currentChannel][display].isBlackTransparent = !isBlackTransparent;
            return newSettings;
        })
        setIsBlackTransparent(!isBlackTransparent);
    }

    function toggleRed() {
        setVideoSettings(()=>{
            let newSettings = videoSettings;
            newSettings[currentChannel][display].showRGB[0] = showRed ? 0 : 1;
            return newSettings;
        })
        setShowRed(!showRed);
    }

    function toggleGreen() {
        setVideoSettings(()=>{
            let newSettings = videoSettings;
            newSettings[currentChannel][display].showRGB[1] = showGreen ? 0 : 1;
            return newSettings;
        })
        setShowGreen(!showGreen);
    }

    function toggleBlue() {
        setVideoSettings(()=>{
            let newSettings = videoSettings;
            newSettings[currentChannel][display].showRGB[2] = showBlue ? 0 : 1;
            return newSettings;
        })
        setShowBlue(!showBlue);
    }

    return (
        <StyledContainer>
            <StyledButtonRow>
                <StyledButton onClick={toggleGrayscale}>{grayscale ? "Don't filter to grayscale" : "Filter to grayscale"}</StyledButton>
                <StyledButton onClick={toggleIsBlackTransparent}>{isBlackTransparent ? "Don't make black transparent" : "Make black transparent"}</StyledButton>
            </StyledButtonRow>
            <StyledButtonRow>
                <StyledButton onClick={toggleRed}>{showRed ? "hide red" : "show red"}</StyledButton>
                <StyledButton onClick={toggleGreen}>{showGreen ? "hide green" : "show green"}</StyledButton>
                <StyledButton onClick={toggleBlue}>{showBlue ? "hide blue" : "show blue"}</StyledButton>
            </StyledButtonRow>
        </StyledContainer>
    )
}

export default VideoInputControls;