import React from 'react';
import styled from 'styled-components';

const VideoPlayer = () => {

    const StyledPlayer = styled.div`
        width: 100%;
        height: 100%;
        border: 2px solid red;
        border-radius: 2px;
        margin: 0px auto;
        grid-area: top;
    `

    return (
        <StyledPlayer>Hey hey</StyledPlayer>
    )
}

export default VideoPlayer