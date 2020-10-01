import React from 'react'
import styled from 'styled-components'

import greenRipples from '../../media/welcome/greenripples.jpg'

import manDigging from '../../media/welcome/mandigging.png'
import roadSign from '../../media/welcome/roadsign.gif'
import flashingGate from '../../media/welcome/flashinggate.gif'

const Header = styled.div`
    font-family: 'courier', monotype;
    color: Brown;
    font-size: 6vw;
    padding: 5px;
`

const UnderConstructionPopup = () => {

    return (
        <div style={{ height:'100vh', backgroundImage:'url(' + greenRipples + ')'}}>
            <Header>
                <img src={roadSign} alt={"road sign"}></img>- UNDER CONSTRUCTION -<img src={roadSign} alt={"road sign"}></img>
            </Header>
            <img style={{height:'100px', width:'100px', display:'block', margin:'30px auto'}} src={manDigging} alt={"under construction"}></img>
            <img style={{height:'100px', width:'300px', display:'block', margin:'30px auto'}} src={flashingGate} alt={"flashing construction gate"}></img>
        </ div>
    )
}

export default UnderConstructionPopup