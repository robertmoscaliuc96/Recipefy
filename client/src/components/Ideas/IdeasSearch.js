
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
            <div className="frm">
                <form className='form-ideas' onSubmit={onSubmit}>
                    <div className="form-group ">
                        <i className="fas fa-mitten"></i>
                        <input type='text' placeholder='Search' onChange={e =>onChange(e)} value={queryData} name= "query" />
                    </div>
                    <button className="btn-ideas" type="submit">
                    Search
                    </button>
                </form>

            </div>

        </div>
    )
}

IdeasSearch.propTypes = {
    getRecipes: PropTypes.func.isRequired
}


export default connect(null, {getRecipes}) (IdeasSearch)
