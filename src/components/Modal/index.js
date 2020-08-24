import React from 'react';
import './modal.scss'

const Modal = ({id = "modal", onClose = () => {}, children}) => {

    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };
    
    return (
    <div id = {id} className="modal" onClick={handleOutsideClick}>
        <div className="modal-container">
            <button className="close" onClick={onClose}/>
            <div className="modal-content">{children}</div>
        </div>
    </div>
    )};

export default Modal;