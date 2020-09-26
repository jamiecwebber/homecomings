import React, { useState } from 'react';
import styled from 'styled-components';
import Background from '../atoms/Background'

import answeringMachine from '../../media/Homepage/answeringmachine.png'
import blueSwirl from '../../media/blueswirl.jpg'

const StyledDiv = styled.div`
    width: 425px;
    height: 425px;
    margin: 35px auto;
    background-image: url(${blueSwirl});
    position: relative;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`

const StyledButton = styled.div`
    height: 34px;
    width: 21px;
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    &:hover {
        background-color: rgba(150,0,0,0.3);
        cursor: pointer;
    }
    &:active {
        background-color: rgba(50,0,0,0.3);
        cursor: grabbing;
    }
`

const AnsweringMachine = () => {
    const [trackNumber, setTrackNumber] = useState(0);

    
    return (
        <Background img={blueSwirl}>
            <StyledDiv>
                <StyledButton top={345} left={268}></StyledButton>
                <StyledButton top={345} left={314}></StyledButton>
                <StyledButton top={345} left={361}></StyledButton>
                <StyledImg src={answeringMachine} alt={'ring ring! Something went wrong'}>
                </StyledImg>
            </StyledDiv>
        </Background>
    )
}

export default AnsweringMachine;