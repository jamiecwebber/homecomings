import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Background from '../atoms/Background'
import homecomingsBackground from '../../media/homecomings4colours.jpg'

import Popup from '../molecules/Popup'
import PopupImage from '../molecules/PopupImage'


// import PerformerHub from './PerformerHub.js'


import starsBackground from '../../media/blackpixelstars.gif'
import ariePicture from '../../media/arieviola.png'


const Title = styled.h1`
    color: red;
    font-size: 68px;
    margin: 0px;
`

function MainPage () {
    
    console.log(ariePicture);
    return (
        <Background img={homecomingsBackground} >
            <Title>MAIN PAGE</Title>
            {/* <Popup width={300} height={200} left={600} top={150} page={'about'}></Popup>
            <Popup width={350} height={250} left={50} top={250} page={'welcome'}></Popup>
            <Popup width={750} height={600} left={150} top={400} page={'blah'}></Popup> */}
            <PopupImage width={450} height={300} left={15} top={500} page={'arieimage'}>
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
            </PopupImage>
            <PopupImage width={450} height={600} left={600} top={100} page={'homecomingsimage'}>
                <div style={{
                    padding: '0px',
                    margin: '0px',
                    backgroundImage: 'url(' + homecomingsBackground + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    top: '0px',
                    left: '0px',
                    height: '100%',
                    width: '100%',
                    overflow: 'auto'}}></div>
            </PopupImage>

            <Link to='/about'>ABOUT</Link><br/>
            <Link to='/'>back to welcome page</Link>
        </Background>
        
    )
}

export default MainPage