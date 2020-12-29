import React, { Fragment } from 'react'
import Moment from 'react-moment';
import ReactDom from 'react-dom'
import './modal.css';




export default function ModalItem ({open, children, onClose, name, title, type, ingredients, description, time,date,likes}){ 
    
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

                <div className="title-description-box">
                    <button onClick={onClose} className="btn-close"><i className="fas fa-times"></i></button>
                    <div className="title-description">
                        <p className="title">{title}</p>
                        <h3 className="description"> {description}</h3>  
                    </div>
                </div>
            </div>

            <div className="layer">
                <div className="time-type">
                <h3>Type : {type}</h3>
                <h3>Time to prepare : {time}min</h3>

                <div className="btn-div modal-btn-div">
                <button
                    type='button'
                    className='btn-post modal-btn'
                >
                    <i className='fas fa-thumbs-up' />{' '}
                    <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
                <p className='post-date'>
                    <Moment format='YYYY/MM/DD'>{date}</Moment>
                </p>
            </div>
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

