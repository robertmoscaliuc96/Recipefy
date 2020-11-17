import React, {useState,useEffect }from 'react';
import {GetStyle,GetSize,GetFlour,GetWater,GetSalt,GetYeast,GetFermentation} from './Details'



function Calculator() {

    const [calculator, setCalculator] = useState({
        style: "",
        numberPizza: "",
        doughball: "",
        water: "",
    });



    const {style, numberPizza, doughball, water}= calculator;

    const [renderComponent, setRenderComponent] = useState({
        details: ""
    })

    const onChange= e => setCalculator({...calculator, [e.target.name]:e.target.value}); 

    let getDetails;
    useEffect(() => {
        
    switch(renderComponent){
        case "style":
            getDetails = <GetStyle/>
        case "size":
            getDetails = <GetSize/>
        case "flour":
             getDetails = <GetFlour/>
        case "water":
            getDetails = <GetWater/>
        case "salt":
            getDetails = <GetSalt/>
        case "yest":
            getDetails = <GetYeast/>
        case "fermenting":
            getDetails = <GetFermentation/>
    }
    }, [])

    return (
        <div>
            <h1>Pizza Dough Calculator</h1>
            <p>Pizza Style</p>
            <select name="style" value={style} onChange={e =>onChange(e)}>
                <option>Pizza Style</option>
                <option value="napoletan">Napoletan</option>
                <option value="american">American</option>
                <option value="sicilian">Sicilian</option>
                <option value="custom">Custom</option>

          </select>
            <p>Number of pizzas</p>
            <input type='text' placeholder='1' onChange={e =>onChange(e)} value={numberPizza} name= "numberPizza" />
            <p>Weight of Doughball (g)</p>
            <input type='text' placeholder='230' onChange={e =>onChange(e)} value={doughball}  name= "doughball" />
            <p>Amount of water (%)</p>
            <input type='text' placeholder='50' onChange={e =>onChange(e)} value={water} name= "water" />

            <button type='submit' className='btn btn-dark my-1' value='calculate' >Calculate</button>

            <div>
                <button onClick={() => setRenderComponent("style")}>Style</button>
                <button onClick={() => setRenderComponent("size")}>Size</button>
                <button onClick={() => setRenderComponent("flour")}>Flour</button>
                <button onClick={() => setRenderComponent("water")}>Water</button>
                <button onClick={() => setRenderComponent("salt")}>Salt</button>
                <button onClick={() => setRenderComponent("yest")}>Yeast</button>
                <button onClick={() => setRenderComponent("fermenting")}>Fermenting</button>
            </div>
            {getDetails}

        </div>
    )
}



export default Calculator

