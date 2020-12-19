import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import './modal.css';

export default function ModalItem ({open, children, onClose, ingredients}){ 
    
    if(!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"/>
            <div className="modal-ideas">
                <button onClick={onClose} className="btn-modal-ideas"><i className="fas fa-times"></i></button>
                <div>
                    <ol>
                        {ingredients.map(ingredient =>(
                            <li >{ingredient.text}</li>
                        ))}
                    </ol>
                </div>
            </div>

        </>,
        document.getElementById('portal')
    )
}

