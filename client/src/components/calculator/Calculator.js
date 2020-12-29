import React, {useState }from 'react';
import './calculator.css'




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
        <div className="calc-result">
                <h1 className="result">Results</h1>
                <p> Full Quantity : {fullQuantity.toFixed(0)} (g) </p>
                <p> Flour : {flour.toFixed(0)} (g) </p>
                <p> Water :{waterRequired.toFixed(0)} (ml)</p>
                <p> Yeast : {yeast.toFixed(1)} (g)</p>
                <p> Salt : {salt.toFixed(1)} (g)</p>
                {sugar===0 ? null : <p> Sugar : {sugar.toFixed(0)} (g)</p>}
                {oil===0 ? null : <p> Olive Oil : {oil.toFixed(0)} (g)</p>}
                
                
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
            yestPercent:"0.015",
            waterMl:"0.60",
            oilPercent:"0.2",
            sugarPercent: "0.1"
        })
    }
    const sicilianDough = () => {
        setVariables({
            saltPercent:"0.0021",
            yestPercent:"0.015",
            waterMl:"0.60",
            oilPercent:"1.5",
            sugarPercent: "0"
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
        <div className="calculator-container">
            <div className="calculator-inner">
                <div className="calculator-text">
                    <div>
                        <h1> Dough Calculator</h1>
                        <p>Find the perfect quantity for you favorite pizza style</p>
                        
                    </div>
                    <div className="calc-result">
                        {display? getDough() : null}
                    </div>
                </div>
                <div className="calculator-box">
                    <form onSubmit={e => {
                    e.preventDefault();
                    setDisplay(true);
                    handleClick({styleDough, numberPizza, water,doughball});
                        }}>
                        <label>Choose a dough style:</label>
                        <div className="form-group calc-form">
                            <i className="fas fa-shopping-basket"></i>
                            <select name="styleDough" value={styleDough}  onChange={e =>onChange(e)} required>
                                <option value="american">American pizza</option>
                                <option value="napoletan">Napoletan pizza</option>
                                <option value="sicilian">Sicilian pizza</option>
                                <option value="custom">Custom</option>
                            </select>

                        </div>

                        <label>Number of pizzas</label>
                        <div className="form-group calc-form">
                            <i className="fas fa-shopping-basket"></i>
                            <input type='number' placeholder='1' onChange={e =>onChange(e)} value={numberPizza} name= "numberPizza" min="1" max="20" required/>
                        </div>

                        <label>Weight of Doughball (g)</label>
                        <div className="form-group calc-form">
                            <i className="fas fa-shopping-basket"></i>
                            <input type='number' placeholder='240' onChange={e =>onChange(e)} value={doughball}  name= "doughball" min="240" max="1350" required/>
                        </div>

                            <label>Amount of water (%)</label>
                        <div className="form-group calc-form">
                            <i className="fas fa-shopping-basket"></i>
                            <input type='number' placeholder='55' onChange={e =>onChange(e)} value={water} min="55" max="75" name= "water" required/>

                        </div>
                            <button type='submit' className='btn btn-dark my-1' value='Submit'  >Calculate</button>

                    </form>

                </div>
                
            </div>
        </div>
    )
}



export default Calculator

