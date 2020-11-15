
import React, {useState }from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import {searchRecipe} from '../../actions/recipe';


const IdeasSearch=() =>{

    const [searchData, setSearchData] = useState({
        search:""
    })
    const {search} = searchData;

    const onChange= e => setSearchData({...searchData, [e.target.name]:e.target.value}); 

    return (
        <div>
            <h1>Search for a recipe</h1>
            <form className='form my-1'>
                <div className="form-group">
                <input type='text' placeholder='Search' onChange={e =>onChange(e)} value={search} name= "search" />
            </div>
            </form>

        </div>
    )
}

export default IdeasSearch
