import React, {useState} from 'react'
import ModalIdeas from './modal/ModalIdeas';

const IdeasItem = ({label, image, totalTime, url, calories,dietLabels,ingredients,digest}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [fat, setFat] = useState(digest[0]);
    const [protein, setProtein] = useState(digest[1]);
    const [carbs, setCarbs] = useState(digest[2]);


    return (
        <div className="ideas-card">
                <img className="ideas-img" src={image} alt=""/> 
                <div className="ideas-title-card">
                    <h1 className="ideas-title">{label}</h1>
                </div>
            <div className="ideas-details">


                <div className="ideas-group">
                    <p className="ideas-totalTime"><i className="far fa-hourglass"></i> {totalTime ===0 ? "20" : totalTime} min</p>
                    <p className="ideas-dietLabels">{
                        dietLabels.length ===0 ? "Blanaced" : dietLabels
                        }</p>

                </div>

                <div className="ideas-group">
                    <p className="ideas-calories">{calories.toFixed(0)} kcal</p>
                    <p className="ideas-calories">{fat.total.toFixed(0)} fat</p>
                    <p className="ideas-calories">{protein.total.toFixed(0)} protein</p>
                    <p className="ideas-calories">{carbs.total.toFixed(0)} carbs</p>
                </div>
                <div className="ideas-buttons">

                        <div className="ideas-ing" onClick={()=> setIsOpen(true)} ingredients={ingredients}>
                            Ingredients
                    </div>
                    <div className="ideas-url">
                        <a href={url}> Link To Recipe</a>
                    </div>


                </div>
                <ModalIdeas 
                    ingredients={ingredients}
                    open={isOpen} 
                    onClose= {()=> setIsOpen(false)}
                />
            </div>
        </div>
    )
}

export default IdeasItem;
