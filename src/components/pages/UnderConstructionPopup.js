import React from 'react'
import styled from 'styled-components'

import greySwirls from '../../media/welcome/greyswirls.jpg'

import manDigging from '../../media/welcome/mandigging.png'
import roadSign from '../../media/welcome/roadsign.gif'
import flashingGate from '../../media/welcome/flashinggate.gif'

const Header = styled.div`
    font-family: 'courier', monotype;
    color: Brown;
    font-size: 6vw;
    padding: 5px;
`

const StyledMarquee = styled.marquee`
    font-family: 'courier', monotype;
    color: Black;
    font-size: 4vw;
    margin-top: 15px;
`

const UnderConstructionPopup = () => {

    return (
        <div style={{ height:'100vh', backgroundImage:'url(' + greySwirls + ')'}}>
            <Header>
                <img src={roadSign} alt={"road sign"}></img>- UNDER CONSTRUCTION -<img src={roadSign} alt={"road sign"}></img>
            </Header>
            <StyledMarquee>Thanks for coming by! Our website, like many things, is a work in progress, and we hope that you'll bear with us for whatever bugs, glitches, and life-altering dramatic, catastrophic website crashes you may experience. Please rest assured that your well-being is our first concern and we apologize for any inconvenience.</StyledMarquee>
            <img style={{height:'100px', width:'100px', display:'block', margin:'30px auto'}} src={manDigging} alt={"under construction"}></img>
            <img style={{height:'100px', width:'300px', display:'block', margin:'30px auto'}} src={flashingGate} alt={"flashing construction gate"}></img>
        </ div>
    )
}

export default UnderConstructionPopup