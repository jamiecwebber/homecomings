import React, { useRef, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { AudioContext } from '../../contexts/AudioContext';



import HomecomingsLetters from '../atoms/HomecomingsLetters'

import Background from '../atoms/Background'

import Popup from '../molecules/Popup'
import PopupImage from '../molecules/PopupImage'


// import PerformerHub from './PerformerHub.js'

import starsBackground from '../../media/blackpixelstars.gif'
import ariePicture from '../../media/arieviola.png'

import answeringMachine from '../../media/Homepage/answeringmachine.png'
import radio from '../../media/Homepage/radio.png'
import receiver from '../../media/Homepage/telephone-receiver-02.svg'
import tvScreen from '../../media/Homepage/tv_screen.png'
import tvStatic from '../../media/Homepage/static.jpg'
import spinningStar from '../../media/Homepage/spinningstar.gif'
import rollingStar from '../../media/Homepage/rollingstar.gif'

import FreezeGif from '../atoms/FreezeGif'
import ballerinaPng from '../../media/Homepage/ballerinaPng.png'
import ballerinaGif from '../../media/Homepage/ballerina.gif'
import animatedTop from '../../media/Homepage/animatedtop.gif'
import frozenTop from '../../media/Homepage/frozentop.png'
import trainAnimated from '../../media/Homepage/trainanimatedonce.gif'
import trainFrozen from '../../media/Homepage/trainfrozen.png'
import dinoAnimated from '../../media/Homepage/dinotransparent.gif'
import dinoFrozen from '../../media/Homepage/dino1.png'



const StyledAnsweringMachine = styled.img`
    position: absolute;
    bottom: 5vh;
    right: 7vw;
    width: 14vw;
    height: 14vw;
    transform: rotate(-18deg);

    &:hover {
        transform: rotate(-15deg);
        height: 15vw;
        width: 15vw;
        cursor: pointer;
        z-index: 4;
    }
`
const StyledRadio = styled.img`
    position: absolute;
    top: 2vw;
    right: 7vw;
    height: 16vw;
    width: 16vw;
    transform: rotate(15deg);

    &:hover {
        transform: rotate(10deg);
        height: 19vw;
        width: 19vw;
        right: 8.5vw;
        cursor: pointer;
        z-index: 5;
    }
`

const StyledReceiver = styled.img`
    position: absolute;
    top: -3vw;
    left: 6vw;
    height: 25vw;
    width: 25vw;
    transform: rotate(50deg);

    &:hover {
        top: -6vw;
        left: 3vw;
        height: 30vw;
        width: 30vw;
        transform: rotate(52deg);
    }
`

const StyledTVDiv = styled.div`
    position: absolute;
    bottom: 6vw;
    left: 2vw;
    width: 22vw;
    height: 13vw;
    transform: rotate(12deg);

    &:hover {
        bottom: 6vw;
        left: 2.5vw;
        width: 24vw;
        height: 15vw;
        transform: rotate(8deg);
        cursor: pointer;
    }
`

const StyledTV = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
`

const StyledStatic = styled.img`
    position: absolute;
    bottom: 10%;
    width: 80%;
    height: 80%;
    z-index: 1;
`

const StyledLiveSign = styled.div`
    position: absolute;
    bottom: 95%;
    left: 105%;
    width: 200px;
    height: 75px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: yellow;
    border-radius: 50px;
    z-index:5;
    color: red;
    font-size: 30px;
    font-family: impact;
    
    transform: rotate(-12deg);
`

const Ballerina = styled.div`
    position: absolute;
    height: 6vw;
    width: 6vw;
    left: 35vw;
    top: 8vw;
    transform: rotate(-14deg);
`

const ToyTop = styled.div`
    position: absolute;
    height: 10vw;
    width: 10vw;
    right: 40vw;
    bottom: 48vh;
    z-index: 3;
`

const ToyTrain = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 30vw;
`

const ToyDino = styled.div`
    position: absolute;
    top: 5.5vw;
    left: 57vw;
    height: 9vw;
    width: 9vw;
`

const AboutLink = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    top: 47vh;
    bottom: 47vh;
    right: 5vw;
    font-size: 1.5vw;
    font-family: helvetica;
    background-color: LemonChiffon;
    border: 4px dashed lightgreen;
    border-radius: 20px;
`

const WelcomeLink = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    top: 47vh;
    bottom: 47vh;
    left: 5vw;
    font-size: 1.5vw;
    font-family: helvetica;
    background-color: LemonChiffon;
    border: 4px dashed lightgreen;
    border-radius: 20px;
`


function MainPage () {


    const answeringMachineRef = useRef();
    const radioRef = useRef();
    const tvRef = useRef();

    // useEffect(()=>{
    //     let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    //     width=520,height=520,left=400,top=50`;

    //     answeringMachineRef.current = window.open('answeringmachine','answeringmachine', params);
    //     if (answeringMachineRef.current) {
    //         answeringMachineRef.current.focus()
    //     };
    // }, [])

    const openAnsweringMachine = () => {
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=520,height=520,left=400,top=50`;

        answeringMachineRef.current = window.open('answeringmachine','answeringmachine', params);
        if (answeringMachineRef.current) {
            answeringMachineRef.current.focus()
        };
    }

    const openRadio = () => {
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=600,height=600,left=600,top=90`;

        radioRef.current = window.open('radio','radio', params);
        if (radioRef.current) {
            radioRef.current.focus()
        };
    }

    const openTV = () => {
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=1100,height=640,left=150,top=60`;

        tvRef.current = window.open('tvpopup','tvpopup', params);
        if (tvRef.current) {
            tvRef.current.focus()
        };
    }

    return (
        <div>
            <div style={{top:'0', left:'0', width: '50%', height: '50%', backgroundColor:'#E8EC1F', position:'fixed', zIndex:'-10'}}></div>
            <div style={{top:'0', left:'50%', width: '50%', height: '50%', backgroundColor:'#EA2525', position:'fixed', zIndex:'-10'}}></div>
            <div style={{top:'50%', left:'0', width: '50%', height: '50%', backgroundColor:'#3CDE21', position:'fixed', zIndex:'-10'}}></div>
            <div style={{top:'50%', left:'50%', width: '50%', height: '50%', backgroundColor:'#3545DA', position:'fixed', zIndex:'-10'}}></div>
            
            <Popup width={450} height={600} left={550} top={100} page={'homecomingsimage'}></Popup>
            <Popup width={350} height={250} left={350} top={250} page={'arieimage'}></Popup>
            {/* <PopupImage width={450} height={300} left={15} top={500} page={'arieimage'}>
                <div style={{
                    padding: '0px',
                    margin: '0px',
                    backgroundImage: 'url(' + starsBackground + ')',
                    backgroundSize: 'cover',
                    top: '0px',
                    left: '0px',
                    height: '100%',
                    width: '100%',
                    overflow: 'auto'}}><div style={{backgroundImage: 'url(' + ariePicture + ')', backgroundSize: 'cover', margin: ' 5% 10%', height: '80%', width: '80%', boxSizing: 'border-box'}}></div></div>
            </PopupImage> */}

           

            <Ballerina>
                <FreezeGif frozenGif={ballerinaPng} animatedGif={ballerinaGif} />
            </Ballerina>

            <ToyTop>
                <FreezeGif frozenGif={frozenTop} animatedGif={animatedTop} />
            </ToyTop>

            <ToyDino>
                <FreezeGif frozenGif={dinoFrozen} animatedGif={dinoAnimated} />
            </ToyDino>

            <ToyTrain>
                <FreezeGif frozenGif={trainFrozen} animatedGif={trainAnimated} playOnce={true} />
            </ToyTrain>

            <HomecomingsLetters />

            <StyledReceiver src={receiver} alt={'phone receiver'}></StyledReceiver>

            <StyledRadio onClick={()=>{openRadio()}} src={radio} alt={'radio'}></StyledRadio>

            <StyledTVDiv  onClick={()=>{openTV()}}>
                {/* <StyledLiveSign>
                    <img src={spinningStar} alt={"spinning star"}></img>
                    LIVE
                    <img src={rollingStar} alt={"spinning star"}></img>
                </StyledLiveSign> */}
                <StyledTV src={tvScreen} alt={'tv screen'}></StyledTV>
                <StyledStatic src={tvStatic} alt={'tv static'}></StyledStatic>
            </StyledTVDiv>

            <StyledAnsweringMachine onClick={()=>{openAnsweringMachine()}} src={answeringMachine} alt={'answering machine'}></StyledAnsweringMachine>
            
           
            <AboutLink><Link to='/about'>about this page</Link></AboutLink>
            <WelcomeLink><Link to='/'>back to welcome page</Link></WelcomeLink>
        </div>
        
    )
}

export default MainPage