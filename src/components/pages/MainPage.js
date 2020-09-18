import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Background from '../atoms/Background'
import homecomingsBackground from '../../media/homecomings4colours.jpg'

import Popup from '../molecules/Popup'
import blueWavesBackground from '../../media/bluewaves.gif'


const Title = styled.h1`
    color: red;
    font-size: 68px;
    margin: 0px;
`

function MainPage () {
    return (
        <Background img={homecomingsBackground} >
            <Title>MAIN PAGE</Title>
            {/* <NewWindow name='blah1' features={{'width':200,'height':200}} >
                <h1>HOMECOMINGS</h1>
            </NewWindow>
            <NewWindow name='blah2' features={{'width':230,'height':230}} >
                <h1>HOMECOMINGS</h1>
            </NewWindow> */}
            <Popup width={300} height={200} left={600} top={150} page={'about'}></Popup>
            <Popup width={350} height={250} left={50} top={250} page={'welcome'}></Popup>
            <Popup width={750} height={600} left={150} top={400} page={'blah'}></Popup>

            <Link to='/about'>ABOUT</Link><br/>
            <Link to='/'>back to welcome page</Link>
        </Background>
        
    )
}

export default MainPage