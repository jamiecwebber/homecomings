import React, {useState, useEffect} from "react";
import texture1 from '../media/texture1.mp4';
import texture2 from '../media/texture2.mp4';
import texture3 from '../media/texture3.mp4';

const VideoContext = React.createContext([{}, () => {}]);

const VideoContextProvider = (props) => {
    const [videos, setVideos] = useState([texture1, texture2, texture3]);
    const [devices, setDevices] = useState([]);

    useEffect(()=>{
        navigator.mediaDevices.enumerateDevices({video:true, audio:false})
            .then((deviceList)=>{
                console.log(deviceList);
                setDevices(deviceList)
            })
    },[])

    return (
        <VideoContext.Provider value={ { videos, setVideos, devices, setDevices }}>
            {props.children}
        </VideoContext.Provider>
    )
}

export { VideoContext, VideoContextProvider };