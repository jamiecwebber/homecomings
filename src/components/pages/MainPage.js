import React from 'react'
import { Link } from 'react-router-dom'
import homecomingsBackground from '../../media/homecomings4colours.jpg'
import styled from 'styled-components';

const Background = styled.div`

    height: 100vh;
    width: 100vw;
    background-image: url(${homecomingsBackground});
    background-position: 'center';
    background-size: 100%;
`

const Title = styled.h1`
    color: green;
    font-size: 68px;
`

function MainPage () {
    return (
        <Background>
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