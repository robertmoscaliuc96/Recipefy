import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import './modal.css';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }


export default function ModalItem ({open, children, onClose}){
    if(!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"/>

            <div className="modal">
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>

        </>,
        document.getElementById('portal')
    )
}

