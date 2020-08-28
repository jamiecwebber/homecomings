import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


import Background from '../atoms/Background'
import aboutBackground from '../../media/timber.jpg'

function AboutPage () {
    return (
        <Background img={aboutBackground}>
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