import React, {useState} from "react";

const VideoContext = React.createContext([{}, () => {}]);

const VideoContextProvider = (props) => {
    const [refs, setRefs] = useState({});
    return (
        <VideoContext.Provider value={[refs, setRefs]}>
            {props.children}
        </VideoContext.Provider>
    )
}

export { VideoContext, VideoContextProvider };