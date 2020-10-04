import React from 'react';
import Background from '../atoms/Background'
import nicelightblue from '../../media/nicelightblue.gif'


import tvScreen from '../../media/Homepage/tv_screen.png'
import styled from 'styled-components'

const StyledTV = styled.img`
    position: absolute;
    width: 895px;
    left: 0;
    top: 0;
    height: 440px;
    z-index: 2;
    pointer-events: none;
`

const YoutubeDiv = styled.div`
    position: absolute;
    z-index: 1;
    height: 315px;
    width: 560px;
    left: 80px;
    top: 50px;
`

const TVContainer = styled.div`
    position: relative;
    margin: 60px auto;
    height: 440px;
    width: 895px;
`

const StyledMarquee = styled.marquee`
    font-family: cursive;
    color: hotpink;
    font-size: 22px;
    margin-top: 15px;
`

const TVPopup = () => {

    return (
        <Background img={nicelightblue}>
            

            <StyledMarquee behavior="scroll" direction="left">Thank you for joining us for HOMECOMINGS! Live performances Saturday at 8pm and Sunday breakfast cereal and morning cartoons edition at 10am!
            </StyledMarquee>


            <TVContainer>
                <StyledTV src={tvScreen} alt={'tv screen'}></StyledTV>
                <YoutubeDiv>
                    <iframe title="Live" width="560" height="315" src="https://www.youtube.com/embed/L6wQayqEJNg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
                </YoutubeDiv>
            </TVContainer>
        </Background>

    )
}

export default TVPopup