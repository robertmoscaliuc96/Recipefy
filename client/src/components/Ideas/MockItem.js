import React, {useState} from 'react'
import image from '../../assets/food.jpg'
import ModalIdeas from './modal/ModalIdeas';

const IdeasItem = () => {

  const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ideas-card">
                <img className="ideas-img" src={image} alt=""/> 
                <div className="ideas-title-card">
                    <h1 className="ideas-title">  Low-Carb Low-CarbvLow-Carb</h1>
                </div>
            <div className="ideas-details">

                <div className="ideas-group">
                    <p className="ideas-totalTime"><i className="far fa-hourglass"></i> 60 min</p>
                    <p className="ideas-dietLabels">Low-Carb</p>

                </div>

                <div className="ideas-group">
                    <p className="ideas-calories">2808 kcal</p>
                    <p className="ideas-calories">2808 FAT</p>
                    <p className="ideas-calories">2808 PROTEIN</p>
                    <p className="ideas-calories">2808 CARBS</p>
                </div>
                <div className="ideas-buttons">

                        <div className="ideas-ing" onClick={()=> setIsOpen(true)} >
                            Ingredients
                    </div>
                    <div className="ideas-url">
                        <a href="http://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html"> Link To Recipe</a>
                    </div>


                </div>
                <ModalIdeas 
                    open={isOpen} 
                    onClose= {()=> setIsOpen(false)}
                />
            </div>
        </div>
    )
}

export default IdeasItem;
