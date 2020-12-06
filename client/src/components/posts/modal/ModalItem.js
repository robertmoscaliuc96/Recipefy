import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import './modal.css';




export default function ModalItem ({open, children, onClose, name, title, type, ingredients, description, time, review, date,likes}){ 
    
    if(!open) return null

    return ReactDom.createPortal(
        <>
            <div className="modal-overlay"/>

            <div className="modal">

            <div className="layer">
                    <div className="modal-gradient">
                            <div className="image-food">
                            <h3 className="name"> {name}</h3>


                    </div>
                </div>

                <div className="title-description">
                <button onClick={onClose} className="btn-close"><i className="fas fa-times"></i></button>

                    <p className="title">{title}</p>

                    <h3 className="description"> {description}</h3>
                </div>
            </div>

            <div className="layer">

                <div className="time-type">
                <h3> {type}</h3>
                <h3> {time}</h3>
                <h3> {date}</h3>
                <h3> {likes}</h3>
                    
                </div>
    
                <div className="ingredients">
                    <h3> {ingredients}</h3>
    
                </div>
            

            </div>



            </div>

        </>,
        document.getElementById('portal')
    )
}

