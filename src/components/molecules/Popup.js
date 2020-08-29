import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Popup = ({ width, height, left, top, children }) => {
    const popupRef = useRef();
    const popupContainer = useRef();

    useEffect(() => { 

        popupContainer.current = document.createElement('div');
        console.log(popupContainer.current);
        console.log(children);

        ReactDOM.createPortal(children, popupContainer.current);

        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=${width},height=${height},left=${left},top=${top}`;

        popupRef.current = window.open("about:blank","test", params);
        popupRef.current.focus();
        popupRef.current.document.body.appendChild(popupContainer.current);
        // popupRef.current.document.body.appendChild('<h1>appended</h1>');
        // popupRef.current.document.body.appendChild(popupContainer.current);
        // return (
        //     popupRef.current ? popupRef.current.close() : null
        // )
    }, [width, height, top, left, children]);
    
    return (
        null
    );

}

export default Popup;