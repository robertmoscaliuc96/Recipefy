import React, {useState,useEffect }from 'react';




function Calculator() {

    const [calculator, setCalculator] = useState({
        styleDough: "",
        numberPizza: "",
        doughball: "",
        water: "",
    });

    const [variables, setVariables] = useState({
        salt:"",
        yest:"",
        waterMl:"",
        oil:"",
        sugar: ""

    })

    const {styleDough, numberPizza, doughball, water}= calculator;

    const onChange= e => {
        setCalculator({...calculator, [e.target.name]:e.target.value})
    }; 


    let getDough;
    const handleClick = ({styleDough, numberPizza, water,doughball}) => {
        
        console.log({styleDough,water,doughball,numberPizza})

        if(styleDough==="napoletan"){
          return setVariables({
                salt:"3",
                yest:"0.4",
                waterMl:"400",
                oil:"2",
                sugar: "1"
            })
        }
        console.log(variables)

    }

    const calcFunction = () => {
        
    }

    return (
        <div>
            <h1> Dough Calculator</h1>
            <p>Dough Style</p>
            <form onSubmit={e => {
            e.preventDefault();
            handleClick({styleDough, numberPizza, water,doughball})
            
            
          }}>
                <label>Choose a car:</label>
                <select name="styleDough" value={styleDough}  onChange={e =>onChange(e)} required>
                    <option value="american">American pizza</option>
                    <option value="napoletan">Napoletan pizza</option>
                    <option value="sicilian">Sicilian pizza</option>
                    <option value="custom">Custom</option>
                </select>
                    <label>Number of pizzas</label>
                    <input type='number' placeholder='1' onChange={e =>onChange(e)} value={numberPizza} name= "numberPizza" min="1" max="20" required/>
                    <label>Weight of Doughball (g)</label>
                    <input type='number' placeholder='220' onChange={e =>onChange(e)} value={doughball}  name= "doughball" min="220" max="350" required/>
                    <label>Amount of water (%)</label>
                    <input type='number' placeholder='50' onChange={e =>onChange(e)} value={water} min="50" max="75" name= "water" required/>

                    <button type='submit' className='btn btn-dark my-1' value='Submit'  >Calculate</button>
            </form>
            {getDough}

        </div>
    )
}



export default Calculator

