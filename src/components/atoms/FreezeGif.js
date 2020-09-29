import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.img`
    width: 100%;
    height: 100%;
`

const FreezeGif = ({frozenGif, animatedGif, playOnce}) => {
    const gifRef = useRef();
    const [reset, setReset] = useState(true);

    const mouseOn = () => {
        if (reset) {
            gifRef.current.src = animatedGif;
        }
    }

    const mouseOff = () => {
        if (playOnce) {
            setReset(false);
        } else {
            gifRef.current.src = frozenGif;
        }
    }

    return (
        <StyledDiv ref={gifRef} src={frozenGif} onMouseEnter={mouseOn} 
        onMouseLeave={mouseOff} />
    );
}

export default FreezeGif;