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
    font-size: 1vw;
`

const A = styled.a`
    color: black;

    &:hover {
        color: ${props => props.color};
        background-color: ${props => props.background};
        padding: 4px;
    }
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
                        Website developed by <A color="#40E0D0" background="Purple" href="https://soundcloud.com/jamiechristopherwebber/" target="_blank">Jamie Christopher Webber</A><br/>
                        Design by <A color="#ADFF2F" background="#FF69B4" href="http://www.gracescheele.com" target='_blank'>Grace Scheele</A><br/>
                        Performed by HARP+
                        </StyledPar>
                        <StyledPar>
                        <A color="blue" background="#7FFF00" href="http://www.harpplus.com" target='_blank'>HARP+</A> is an award-winning electroacoustic ensemble comprised of Dave Klassen (Synthesizer), Grace Scheele (Harp/Electronics), and <A color="#FFD700" background="#DB7093" href="https://soundcloud.com/arievandeven" target="_blank">Arie Verheul van de Ven</A> (Viola/Electronics). 
                        </StyledPar>
                        <StyledPar>
                        We acknowledge the support of the <A color="#8A2BE2" background="#7FFFD4" href="https://www.canadacouncil.ca" target="_blank">Canada Council for the Arts</A> and the <A color="#87CEEB" background="#DA70D6" href="https://artsfund.ca/" target="_blank">Region of Waterloo Arts Fund</A>.
                        </StyledPar>
                        <StyledPar><A color="#FF00FF" background="#00FF00"><Link  to='/main'>BACK TO MAIN PAGE</Link></A></StyledPar>
                        <img style={{position: 'absolute' , bottom: '8%', left: '12%', width: '40%'}} src={ccaLogo} alt="Canada Council for the Arts"></img> <img style={{position: 'absolute',bottom: '4%', right: '15%', width: '12%'}} src={rowLogo} alt="Region of Waterloo Arts Fund"></img>
                    </CenterBlurb>
                </Background>
            </StyledDiv>
        </FullPage>
    )
}

export default AboutPage