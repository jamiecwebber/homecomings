import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Background from '../atoms/Background'
import aboutBackground from '../../media/aboutpage/AboutPageBackground.png'
import ccaLogo from '../../media/aboutpage/CCA_RGB_black_e.png'
import rowLogo from '../../media/aboutpage/rowartsfund.png'
import greenTexture from '../../media/greentexture.png'


const FullPage = styled.div`
    background-image: url(${greenTexture});
`

const StyledDiv = styled.div`
    margin: auto;
    width: 81vw;
    height: 50.4vw;
    position: relative;
`

const CenterBlurb = styled.div`
    position: absolute;
    height: 51%;
    width: 51%;
    top: 24%;
    left: 29%;
    text-align: center;
`

const StyledPar = styled.p`
    font-family: 'comic neue', cursive;
    font-weight: bold;
    font-size: 30%;
`

function AboutPage () {
    return (
        <FullPage>
            <StyledDiv>
                <Background img={aboutBackground}>
                    <CenterBlurb>
                        <StyledPar>
                        HOMECOMINGS is a curiosity-drive exploration into our memory of childhood. 
                        </StyledPar>
                        <StyledPar>
                        Website developed by Jamie Christopher Webber<br/>
                        Design by Grace Scheele<br/>
                        Performed by HARP+
                        </StyledPar>
                        <StyledPar>
                        HARP+ is an award-winning electroacoustic ensemble comprised of Dave Klassen (Synthesizer), Grace Scheele (Harp/Electronics), and Arie Verheul van de Ven (Viola/Electronics). 
                        </StyledPar>
                        <StyledPar>
                        We acknowledge the support of the Canada Council for the Arts and the Region of Waterloo Arts Fund.
                        </StyledPar>
                        <Link to='/main'>BACK TO MAIN PAGE</Link>
                        <img style={{position: 'absolute' , bottom: '8%', left: '12%', width: '40%'}} src={ccaLogo} alt="Canada Council for the Arts"></img> <img style={{position: 'absolute',bottom: '4%', right: '15%', width: '12%'}} src={rowLogo} alt="Region of Waterloo Arts Fund"></img>
                    </CenterBlurb>
                </Background>
            </StyledDiv>
        </FullPage>
    )
}

export default AboutPage