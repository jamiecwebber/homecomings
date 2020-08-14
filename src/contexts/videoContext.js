import React, { useState, useEffect, useRef, useReducer} from "react";
import texture1 from '../media/texture1.mp4';
import texture2 from '../media/texture2.mp4';
import texture3 from '../media/texture3.mp4';

const VideoContext = React.createContext([{}, () => {}]);

const initialSettings = [
    {
    'left':{
        grayscale: false,
        showRGB: [1,0,0],
        isBlackTransparent: false,
        playing: false
    },
    'bottom':{
        grayscale: false,
        showRGB: [0,1,0],
        isBlackTransparent: false,
        playing: false
    }, 
    'right':{
        grayscale: false,
        showRGB: [0,0,1],
        isBlackTransparent: false,
        playing: false
    }}]


const VideoContextProvider = (props) => {
    const [videos, setVideos] = useState([texture1, texture2, texture3]);
    const [devices, setDevices] = useState([]);

    const [canvasRefs, setCanvasRefs] = useState({});

    const reducer = (state, action) => {
        switch(action.type) {
            case "UPDATE_SETTINGS": {
                console.log("updating settings");
                return {
                    [currentChannel] : {
                        ...state[currentChannel],
                        [action.display] : action.payload }
                };
            }
            default: return state;
        }
    }

    // variables for managing video settings
    const [currentChannel, setCurrentChannel] = useState(0);
    const [currentSettings, setCurrentSettings] = useState({});
    const [globalSettings, settingsDispatch] = useReducer(reducer, initialSettings);

    // whenever the global settings or the channel changes, update current settings;
    useEffect(()=>{
        setCurrentSettings(globalSettings[currentChannel]);
    }, [globalSettings, currentChannel]);

    const getDevices = async () => {
        await navigator.mediaDevices.getUserMedia({video:true, audio:false});
        let deviceList = await navigator.mediaDevices.enumerateDevices();
        setDevices(deviceList.filter((device)=>{return (device.kind === "videoinput")}));
    }

    useEffect(()=>{
        getDevices();
    },[])

    return (
        <VideoContext.Provider value={ { 
            videos, setVideos, 
            devices, getDevices, 
            canvasRefs, setCanvasRefs,
            currentSettings, settingsDispatch,
            currentChannel, setCurrentChannel }}>
            {props.children}
        </VideoContext.Provider>
    )
}

export { VideoContext, VideoContextProvider };