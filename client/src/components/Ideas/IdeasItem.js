import React from 'react'

const IdeasItem = ({label, image, totalTime, url, calories,dietLabels,ingredients}) => {

    return (
        <div>
            <h1> {label}</h1>
            <img src={image} alt=""/> 
            <p>{calories}</p>
            <p> {dietLabels}</p>
            <p> {totalTime}</p>
            <p> {url}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li >{ingredient.text}</li>
                ))}
            </ol>

        </div>
    )
}

export default IdeasItem;
