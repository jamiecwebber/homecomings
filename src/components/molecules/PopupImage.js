import React, { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const PopupImage = ({ width, height, left, top, pageName, children }) => {
    const popupRef = useRef();
    const popupContainerRef = useRef(document.createElement('div'));

    useLayoutEffect(() => { 
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=${width},height=${height},left=${left},top=${top}`;

        popupRef.current = window.open(pageName,pageName, params);
        if (popupRef.current) {
            popupRef.current.document.body.appendChild(popupContainerRef.current);
            popupRef.current.focus()
        };
    }, [width, height, top, left, pageName, children]);
    
    return (
        createPortal(children , popupContainerRef.current)
    );

}

export default PopupImage;