import React from 'react';
import styled from 'styled-components';

import Hblock from '../../media/blocks/Hblock.png';
import Oblock from '../../media/blocks/Oblock.png';
import Mblock from '../../media/blocks/Mblock.png';
import Eblock from '../../media/blocks/Eblock.png';
import Cblock from '../../media/blocks/Cblock.png';
import Iblock from '../../media/blocks/Iblock.png';
import Nblock from '../../media/blocks/Nblock.png';
import Gblock from '../../media/blocks/Gblock.png';
import Sblock from '../../media/blocks/Sblock.png'

const StyledLetter = styled.img`
    position: relative;
    top: ${props=>(props.top + 'vh')};
    height: 5vw;
    width: 5vw;
    transform: rotate(${props=>(props.angle + 'deg')});
    z-index:3;

    &:hover {
        height: 5.3vw;
        width: 5.3vw;
        transform: rotate(${props=>(props.bigAngle + 'deg')});
        z-index: 4;
    }
`
// transform: rotate(${props=>(props.bigAngle + 'deg')});

const Letter = ({top, angle, bigAngle, blockImage, letter}) => {
    return (
        <StyledLetter top={top} angle={angle} bigAngle={bigAngle} src={blockImage} alt={letter}></StyledLetter>
    )
}

const HomecomingsLetters = () => {
    const blocks = [
        {blockImage: Hblock, alt: 'H'},
        {blockImage: Oblock, alt: 'O'},
        {blockImage: Mblock, alt: 'M'},
        {blockImage: Eblock, alt: 'E'},
        {blockImage: Cblock, alt: 'C'},
        {blockImage: Oblock, alt: 'O'},
        {blockImage: Mblock, alt: 'M'},
        {blockImage: Iblock, alt: 'I'},
        {blockImage: Nblock, alt: 'N'},
        {blockImage: Gblock, alt: 'G'},
        {blockImage: Sblock, alt: 'S'}
    ]

    let top = 22;
    return (
        <div>
            {
                blocks.map((block) => {
                    top = top + 4;
                    let angle = Math.random() * 20 - 10;
                    let bigAngle = angle + (Math.random()*20 - 10);
                    let position = (top + (Math.random()*2 - 1))
                    return <Letter top={position} angle={angle} bigAngle={bigAngle} blockImage={block.blockImage} alt={block.alt}></Letter>
                })
            }
        </div>
    )
}

export default HomecomingsLetters