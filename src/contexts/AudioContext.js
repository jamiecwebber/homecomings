import React, { useRef } from 'react'

const AudioContext = React.createContext([{}, () => {}]);

const AudioContextProvider = (props) => {
    const audioContextRef = useRef(new window.AudioContext());
    console.log(audioContextRef.current);

    return (
        <AudioContext.Provider value={ { audioContextRef }}>
            {props.children}
        </AudioContext.Provider>
    )
}

export { AudioContext, AudioContextProvider }