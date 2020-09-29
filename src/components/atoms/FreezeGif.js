import React, { useRef} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.img`
    width: 100%;
    height: 100%;
`


const FreezeGif = ({frozenGif, animatedGif}) => {
    const gifRef = useRef();

    const mouseOn = () => {
        gifRef.current.src = animatedGif;
    }

    const mouseOff = () => {
        gifRef.current.src = frozenGif;
    }

    return (
        <StyledDiv ref={gifRef} src={frozenGif} onMouseEnter={mouseOn} 
        onMouseLeave={mouseOff} />
    );
}

export default FreezeGif;