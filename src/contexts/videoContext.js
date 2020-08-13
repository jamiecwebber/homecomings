import React, { useState, useEffect, useRef, useReducer} from "react";
import texture1 from '../media/texture1.mp4';
import texture2 from '../media/texture2.mp4';
import texture3 from '../media/texture3.mp4';

const VideoContext = React.createContext([{}, () => {}]);

const initialSettings = [
    {
    'left':{
        grayscale: false,
        showRGB: [1,1,1],
        isBlackTransparent: false,},
    'bottom':{
        grayscale: false,
        showRGB: [1,1,1],
        isBlackTransparent: false,
    }, 
    'right':{
        grayscale: false,
        showRGB: [1,1,1],
        isBlackTransparent: false,
    }}]


const VideoContextProvider = (props) => {
    const [videos, setVideos] = useState([texture1, texture2, texture3]);
    const [devices, setDevices] = useState([]);

    const [canvasRefs, setCanvasRefs] = useState({});

    const reducer = (state, action) => {
        console.log('hello from reducer');
        switch(action.type) {
            case "UPDATE_SETTINGS": {
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
    const [currentSettings, setCurrentSettings] = useState("blah");
    const [globalSettings, settingsDispatch] = useReducer(reducer, initialSettings);
    const prevChannelRef = useRef(currentChannel);

    useEffect(()=>{
        console.log("setting current settings");
        console.log(globalSettings[currentChannel]);
        setCurrentSettings(globalSettings[currentChannel]);
    }, [globalSettings, currentChannel]);

    useEffect(()=>{
        console.log("context: global settings");
        console.log(globalSettings);
    },[globalSettings])

    useEffect(()=>{
        console.log("context: current settings:");
        console.log(currentSettings);
    }, [currentSettings])

    console.log(`outside of effects:` );
    console.dir(currentSettings);

    // keep current settings up to date with current channel
    // useEffect(()=>{
    //     if (prevChannelRef.current !== currentChannel){
    //         setCurrentSettings(globalSettings[currentChannel]);
    //     }
    // },[globalSettings, currentChannel])

    // makes sure that the currentSettings always correspond to the correct channel
    // useEffect(()=>{
    //     if (currentChannel !== prevChannelRef.current) {
    //         if (currentChannel < globalSettings.length) {
    //             setCurrentSettings(globalSettings[currentChannel]);
    //         } else {
    //             setGlobalSettings((prev)=>{
    //                 prev.push(currentSettings);
    //                 return prev;
    //             })
    //         }
    //         prevChannelRef.current = currentChannel;
    //     }
    // }, [currentChannel, setCurrentSettings, currentSettings, globalSettings])

    // useEffect(()=>{
    //     navigator.mediaDevices.enumerateDevices({video:true, audio:false})
    //         .then((deviceList)=>{
    //             // console.log(deviceList);
    //             setDevices(deviceList)
    //         })
    // },[])

    // update global settings when something in the app changes its settings locally
    // useEffect(()=>{
    //     console.log("global settings update effect fired")
    //     if (prevSettingsRef.current !== currentSettings) {
    //         setGlobalSettings(prevState=>{
    //             let newSettings = prevState;
    //             newSettings[currentChannel] = currentSettings;
    //             console.dir(newSettings[currentChannel]);
    //             console.log(`Global settings were updated on channel ${currentChannel}`);
    //             return newSettings;
    //         })
    //         prevSettingsRef.current = currentSettings;
    //     }
    // }, [currentSettings, currentChannel])

    // update currentSettings when the channel changes
    // function updateDisplaySettings (display, localSettings) {
    //     setCurrentSettings({...currentSettings, [display]:localSettings})
    // }

    return (
        <VideoContext.Provider value={ { 
            videos, setVideos, 
            devices, setDevices, 
            canvasRefs, setCanvasRefs,
            currentSettings, settingsDispatch,
            currentChannel, setCurrentChannel }}>
            {props.children}
        </VideoContext.Provider>
    )
}

export { VideoContext, VideoContextProvider };