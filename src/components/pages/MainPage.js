import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Background from '../atoms/Background'
import homecomingsBackground from '../../media/homecomings4colours.jpg'

const Title = styled.h1`
    color: green;
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
            <Link to='/about'>ABOUT</Link><br/>
            <Link to='/'>back to welcome page</Link>
        </Background>
        
    )
}

export default MainPage