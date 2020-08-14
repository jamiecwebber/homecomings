import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { VideoContext } from '../../contexts/VideoContext.js'

const ColourButton = styled.button`
    width: 35px;
    height: 35px;
    border-radius: 3px;
    font-weight: bold;
    color: ${ props => props.uncheckedColour };
    border: 2px solid ${ props => props.uncheckedColour };
    background: ${ props => props.checked ? props.checkedColour : props.uncheckedColour };
`

const VideoSourceControls = ({videoSource, setVideoSource}) => {

    const { devices, videos } = useContext(VideoContext);

    useEffect(()=>{
        if (devices.length > 0) {
            setVideoSource(devices[0].deviceId);
        }
    },[devices, setVideoSource])

    const handleInputChange = (event) => {
        event.preventDefault();
        setVideoSource(event.target.value);
    }

    return (
        <div>
            INPUT SOURCE
            <select onChange={handleInputChange}>
                { devices.map((device)=><option value={device.deviceId}>{device.label || device.kind}</option>) }
                <option disabled="disabled">-----</option>
                { videos.map((video)=><option value={video}>{video}</option> )}
            </select>
        </div>
    )
}

export default VideoSourceControls;