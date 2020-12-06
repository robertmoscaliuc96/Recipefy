
import React, {useState }from 'react';
import { getRecipes } from '../../actions/recipe';
import { connect } from 'react-redux';
import {setAlert} from '../../actions/alert'
import PropTypes from 'prop-types';


const IdeasSearch=({getRecipes}) =>{

    const [queryData, setQueryData] = useState("")


   
    const onChange = (e) => setQueryData(e.target.value);

    const onSubmit =(e)=>{
        e.preventDefault();
        if(queryData ===""){
            setAlert("Please enter something" , "light");

        }else {
            // pass the text to the main App.js
            console.log(queryData)
            getRecipes(queryData);
            setQueryData("");
        }
    }

    return (
        <div className="search-bar">
            <h1>Search for a recipe</h1>
            <form className='form my-1' onSubmit={onSubmit}>
                <div className="form-group">
                <i className="fas fa-mitten"></i>
                <input type='text' placeholder='Search' onChange={e =>onChange(e)} value={queryData} name= "query" />

                <button className="btn" type="submit">
                Search
                </button>
            </div>
            </form>

        </div>
    )
}

IdeasSearch.propTypes = {
    getRecipes: PropTypes.func.isRequired
}


export default connect(null, {getRecipes}) (IdeasSearch)
