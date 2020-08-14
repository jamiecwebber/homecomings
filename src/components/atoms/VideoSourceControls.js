import React, { useContext } from 'react';
import VideoContext from '../contexts/VideoContext'

const VideoSourceControls = () => {

    const { devices, videos } = useContext(VideoContext);

    return (
        <div>
            INPUT SOURCE
            <select>
                {}
            </select>
        </div>
    )
}

export default VideoSourceControls;