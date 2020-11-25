import React, {useState, useEffect }from 'react';




function Calculator() {

    const [calculator, setCalculator] = useState({
        styleDough: "",
        numberPizza: "",
        doughball: "",
        water: "",
    });

    const [variables, setVariables] = useState({
        saltPercent:"",
        yestPercent:"",
        waterMl:"",
        oilPercent:"",
        sugarPercent: ""

    })

    const [display, setDisplay] = useState(false);

    const {styleDough, numberPizza, doughball, water}= calculator;
    const {saltPercent, yestPercent, waterMl, oilPercent,sugarPercent}= variables;

    const onChange= e => {
        setCalculator({...calculator, [e.target.name]:e.target.value})
    }; 


    const getDough = () => {

        var fullQuantity = numberPizza * doughball;
        var flour = fullQuantity * 0.5945;
        var salt = flour * saltPercent;
        var yeast = flour * yestPercent;
        var waterRequired = flour * waterMl;
        var oil= flour * oilPercent;
        var sugar = flour * sugarPercent;

        return (
        <div>
                <h1> fullQuantity : {fullQuantity} </h1>
                <h1> Flour : {flour} </h1>
                <h1> Water :{waterRequired} </h1>
                <h1> Yeast : {yeast}</h1>
                <h1> Salt : {salt}</h1>
                <h1> Sugar : {sugar}</h1>
                <h1> Olive Oil : {oil}</h1>
        </div>            
            )
    };

    const napoletanDough = () => {
        setVariables({
            saltPercent:"0.03",
            yestPercent:"0.002",
            waterMl:"0.65",
            oilPercent:"0",
            sugarPercent: "0"
        })
    }
    const americanDough = () => {
        setVariables({
            saltPercent:"0.02",
            yestPercent:"0.01.5",
            waterMlPercent:"0.60",
            oilPercent:"0.2",
            sugarPercent: "0.1"
        })
    }
    const sicilianDough = () => {
        setVariables({
            saltPercent:"0.0021",
            yestPercent:"0.015",
            waterMlPercent:"60",
            oilPercent:"1.5",
            sugarPercent: "0"
        })
    }
    const burgerDough = () => {
        setVariables({
            saltPercent:"0.002",
            yestPercent:"0.004",
            waterMlPercent:"400",
            oilPercent:"2",
            sugarPercent: "1"
        })
    }



    const handleClick = ({styleDough}) => {

        if(styleDough==="napoletan"){
            napoletanDough();
        }else if(styleDough==="american"){
            americanDough();
        }else if(styleDough==="sicilian"){
            sicilianDough();
        }


        console.log(variables)

    }

    return (
        <div>
            <h1> Dough Calculator</h1>
            <p>Dough Style</p>
            <form onSubmit={e => {
            e.preventDefault();
            setDisplay(true);
            handleClick({styleDough, numberPizza, water,doughball});
          }}>
                <label>Choose a dough style:</label>
                <select name="styleDough" value={styleDough}  onChange={e =>onChange(e)} required>
                    <option value="american">American pizza</option>
                    <option value="napoletan">Napoletan pizza</option>
                    <option value="sicilian">Sicilian pizza</option>
                    <option value="custom">Custom</option>
                </select>
                    <label>Number of pizzas</label>
                    <input type='number' placeholder='1' onChange={e =>onChange(e)} value={numberPizza} name= "numberPizza" min="1" max="20" required/>
                    <label>Weight of Doughball (g)</label>
                    <input type='number' placeholder='230' onChange={e =>onChange(e)} value={doughball}  name= "doughball" min="230" max="350" required/>
                    <label>Amount of water (%)</label>
                    <input type='number' placeholder='55' onChange={e =>onChange(e)} value={water} min="55" max="75" name= "water" required/>

                    <button type='submit' className='btn btn-dark my-1' value='Submit'  >Calculate</button>
            </form>
            {display? getDough() : null}
        </div>
    )
}



export default Calculator

