import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import './modal.css';

export default function ModalItem ({open, children, onClose, ingredients}){ 
    
    if(!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"/>
            <div className="modal-ideas">
                <div onClick={onClose} className="btn-modal-ideas"><i className="fas fa-times"></i></div>
                <div className="modal-ingredients-box">
                    <h1>Ingredients</h1>
                    <ul>
                        {ingredients.map(ingredient =>(
                            <li className="modal-ingredients">{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </>,
        document.getElementById('portal')
    )
}

