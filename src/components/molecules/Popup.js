import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Popup = ({ background, sizeX, sizeY, coordX, coordY }) => {
    const popupRef = useRef();

    useEffect(() => { 

        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=0,height=0,left=-1000,top=-1000`;

        popupRef.current = window.open("about:blank","test", params);

        return (
            popupRef.current ? popupRef.current.close() : null
        )
    }, []);
    
    return (
        null
    );

}

export default Popup;