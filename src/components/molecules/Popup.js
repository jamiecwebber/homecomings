import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Popup = ({ background, width, height, left, top }) => {
    const popupRef = useRef();

    useEffect(() => { 

        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=${width},height=${height},left=${left},top=${top}`;

        popupRef.current = window.open("about:blank","test", params);
        popupRef.current.focus();
        // return (
        //     // popupRef.current ? popupRef.current.close() : null
        // )
    }, []);
    
    return (
        null
    );

}

export default Popup;