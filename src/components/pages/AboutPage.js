import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import aboutBackground from '../../media/timber.jpg'


const Background = styled.div`

    height: 100vh;
    width: 100vw;
    background-image: url(${aboutBackground});
    background-position: 'center';
    background-size: 100%;
`

function AboutPage () {
    return (
        <Background>
            <div>
                <h1>About this project</h1>
                <div>canada council logo</div>
                <div>
                    bunch of pictures of us
                </div>
            </div>
            <Link to='/main'>BACK TO MAIN PAGE</Link>
        </Background>
    )
}

export default AboutPage