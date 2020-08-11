import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    border-radius: 3px;
    background: salmon
    ;
`

const VideoRecorder = ({ canvasRef, isPlaying }) => {

    const [isRecordArmed, setIsRecordArmed] = useState(true);
    const [isRecording, setIsRecording] = useState(false);
    const [isDownloadReady, setIsDownloadReady] = useState(false);

    const recordingStreamRef = useRef(null);
    const recordingChunksRef = useRef([]);
    const pendingDownloadRef = useRef([]);

    const handleButtonPress = () => {
        // if (isRecording) toggleRecording();
        setIsRecordArmed(!isRecordArmed);
    }

    useEffect(() => {
        if (isPlaying) {
            setIsRecording(isRecordArmed);
        } else {
            setIsRecording(false);
        }
    }, [isPlaying, isRecordArmed])

    useEffect(() => {
        if (isRecording) {
            recordingChunksRef.current = [];
            const stream = canvasRef.current.captureStream();
            recordingStreamRef.current = new MediaRecorder(stream);
            recordingStreamRef.current.ondataavailable = e => recordingChunksRef.current.push(e.data);

            recordingStreamRef.current.start();
            recordingStreamRef.current.onstop = (e) => {
                pendingDownloadRef.current = recordingChunksRef.current;
                setIsDownloadReady(true);
            }
        } else {
            if (recordingStreamRef.current) {
                recordingStreamRef.current.stop();
            }
        };

        return (() => {
            if (recordingStreamRef.current) {
                recordingStreamRef.current.stop();
            }
        })
    }, [isRecording, canvasRef])

    // could edit this to allow saving several previous recordings
    function handleDownloadButtonClick() {
        exportVid(new Blob(pendingDownloadRef.current, {type: 'video/webm;codecs=vp9'}));
        setIsDownloadReady(false);
    }

    function exportVid(blob) {
        const vid = document.createElement('video');
        vid.src = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = 'myvid.webm';
        a.href = vid.src;
        a.click();
        vid.remove();
        a.remove();
    }

    return (
        <div>
        <StyledButton onClick={handleButtonPress} >{
            isRecordArmed ? 
                ( isRecording ? "Stop Recording" : "Turn off Recording" ) 
                : "Turn On Recording" } </StyledButton>
        { isDownloadReady ? <StyledButton onClick={handleDownloadButtonClick}>Download webm</StyledButton> : "" }
        </div>
    )
}

export default VideoRecorder