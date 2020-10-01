import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import Background from '../atoms/Background'

import { AudioContext } from '../../contexts/AudioContext';

import answeringMachine from '../../media/Homepage/answeringmachine.png'
import message1 from '../../media/Homepage/answering_machine_1.mp3'
import message2 from '../../media/Homepage/answering_machine_2.mp3'
import message3 from '../../media/Homepage/answering_machine_3.mp3'
import message4 from '../../media/Homepage/answering_machine_4.mp3'
import message5 from '../../media/Homepage/answering_machine_5.mp3'
import message6 from '../../media/Homepage/answering_machine_6.mp3'


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
    }
`

const AnsweringMachine = () => {
    const [trackNumber, setTrackNumber] = useState(0);
    const tracks = [message1, message2, message3, message4, message5, message6];
    
    const { audioContextRef } = useContext(AudioContext);
    const bufferRef = useRef();
    const bufferSourceRef = useRef();

    const audioContext = audioContextRef.current;

    // useEffect(() => {
    //     source.buffer = audioBuffer;
    // }, [])

    async function playRecording() {
        console.log('click');
        console.log(trackNumber);
        await window.fetch(tracks[trackNumber])
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                bufferRef.current = audioBuffer;
            });
        
        if (bufferSourceRef.current) {
            console.log("currently playing");
            bufferSourceRef.current.stop();
        }
        bufferSourceRef.current = audioContext.createBufferSource();
        bufferSourceRef.current.buffer = bufferRef.current;
        bufferSourceRef.current.connect(audioContext.destination);
        bufferSourceRef.current.start();
    }

    function prevRecording() {
        if (bufferSourceRef.current) {
            console.log("currently playing");
            bufferSourceRef.current.stop();
        }
        console.log('click');
        setTrackNumber(((trackNumber + 6 - 1) % 6));
    }

    function nextRecording() {
        if (bufferSourceRef.current) {
            console.log("currently playing");
            bufferSourceRef.current.stop();
        }
        console.log('click');
        setTrackNumber(((trackNumber + 1) % 6));
    }
    
    return (
        <Background img={blueSwirl}>
            <StyledDiv>
                <StyledButton top={345} left={268} onClick={playRecording}></StyledButton>
                <StyledButton top={345} left={314} onClick={prevRecording}></StyledButton>
                <StyledButton top={345} left={361} onClick={nextRecording}></StyledButton>
                <StyledImg src={answeringMachine} alt={'ring ring! Something went wrong'}>
                </StyledImg>
            </StyledDiv>
        </Background>
    )
}

export default AnsweringMachine