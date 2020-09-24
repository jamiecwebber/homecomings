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
    height: 6vw;
    width: 6vw;
    transform: rotate(${props=>(props.angle + 'deg')})
`

const Letter = ({top, angle, blockImage, letter}) => {
    return (
        <StyledLetter top={top} angle={angle} src={blockImage} alt={letter}></StyledLetter>
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

    let top = 10;
    return (
        <div>
            {
                blocks.map((block) => {
                    top = top + 6;
                    let angle = Math.random() * 20 - 10;
                    return <Letter top={top} angle={angle} blockImage={block.blockImage} alt={block.alt}></Letter>
                })
            }
        </div>
    )
}

export default HomecomingsLetters