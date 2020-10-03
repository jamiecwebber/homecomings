import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import  styled  from 'styled-components'


import Background from '../atoms/Background'
import stopBackground from '../../media/stopbackground.png'
import cursor from '../../media/Homepage/my-mouse-pointer.cur'
import flashingCursor from '../../media/Homepage/FlashingCursor1.ani'
import greyBackground from '../../media/greybackground.jpg'

import Popup from '../molecules/Popup'


const StyledHeader = styled.h1`
    margin: 0px auto;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);   
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: table;
`
// text-shadow: 0px 0px 3px rgba(150,150,150,1);

const StyledTextBox = styled.div`
    font-family: "Comic Sans MS", cursive, sans-serif;
    color: darkslateblue;
    margin: 15px auto;
    max-width: 800px;
    
`

const StyledDiv = styled.div`
    z-index: 2;
    background-image: url(${greyBackground});
    margin: 10% 20%;
    padding: 15px;
    width: 60%;
    
    font-size: 1.15em;
`

const StyledButton = styled.button`
    cursor: url(${cursor}),auto;
    background-color: ${props => props.colour};
    color: lightgray;
    font-size: 1.2em;
    padding: 3px;

    &:hover {
        cursor: url(${flashingCursor}),auto;
        background-color: ${props => props.hoverColor};
    }
`

const WelcomePage = ({permissionGranted, setPermissionGranted}) => {

    const requestPermission = async () => {
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
            width=600,height=500,left=200,top=300`;
        let popup = window.open("underconstruction","underconstruction", params);

        if (popup) {
            setPermissionGranted(true);
        } 
    }

    return (
        
        <Background img={stopBackground} cursor={cursor}>
            
            <StyledDiv>  
                <StyledHeader>Welcome to Homecomings</StyledHeader>
                <StyledHeader>An art thing by harp+</StyledHeader>
                <StyledTextBox>This website uses all sorts of classic, super-outdated and ill-advised web design, and well, in this day and age you can't
                    just go around arbitrarily opening a random number of popups whenever you would like to.
                </StyledTextBox>
                <StyledTextBox>If you're willing to go along with this for some reason, please click below and your browser will prompt you for permissions for popups, cookies, etc., and then after that we can harass you with whatever horrific web design decisions we may desire.
                </StyledTextBox>
                <StyledTextBox>Please also disable any pop-up blockers or other extensions you think might get in the way. We promise that there is no malicious code or anything on this site, all we are is a bunch of humble musicians. Our intention is to annoy, not to actually cause any damage.
                </StyledTextBox>
                <StyledTextBox>Hey at least you can't claim we weren't above-board with this
                </StyledTextBox>
                {permissionGranted ? <StyledButton colour={'goldenrod'} hoverColor={'crimson'} ><Link to="/main">All set? Let's go!</Link></StyledButton> : <StyledButton colour={'green'} hoverColor={'hotpink'} onClick={requestPermission}>Yea that's cool</StyledButton> }
            
            </StyledDiv>
        </ Background>
        
    )
}

export default WelcomePage