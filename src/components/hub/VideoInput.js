import React from 'react';
import styled from 'styled-components';



const VideoInput = ({display}) => {
    const StyledVideo = styled.div`
        border: 2px solid black;
        border-radius: 2px;
        width: 100%;
        height: 100%;
        margin: auto;
        grid-area: ${display};
    `

    return (
    <StyledVideo>{display}</StyledVideo>
    )
}

export default VideoInput;