import React, {Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipes } from '../../actions/recipe';
import IdeasSearch from '../Ideas/IdeasSearch';
import IdeasItem from '../Ideas/IdeasItem';

import './ideas.css';


const Ideas= ({getRecipes, recipe:{recipes,loading}}) =>{
    
    useEffect(() => {
        getRecipes();
      }, []); 

      console.log(recipes)

      return loading ?<Spinner/>:(
        <Fragment>
          <div className="ideas-container">
              <div className="ideas-inner">
                  <div className="ideas-text">
                    <h1 className="large text-primary">Search for new</h1>
                    <h1 className="large text-primary">recipes</h1>
                    <h2 className="medium text-primary">You can search for any type of recipes</h2>
                  </div>
                  <div className="ideas-ill">

                  </div>
              </div>
              <IdeasSearch/>
              <div className="ideas">
                  {recipes.map(recipe => (
                  <IdeasItem key={recipe.recipe.calories} 
                  label={recipe.recipe.label} 
                  image={recipe.recipe.image} 
                  totalTime={recipe.recipe.totalTime} 
                  url={recipe.recipe.url} 
                  calories={recipe.recipe.calories} 
                  dietLabels={recipe.recipe.dietLabels} 
                  ingredients={recipe.recipe.ingredients}
                  digest={recipe.recipe.digest}
                  />
                  ))}
              </div>
            </div>
          
        </Fragment>
      );
    };

Ideas.propTypes = {
    getRecipes: PropTypes.func.isRequired,
    recipe: PropTypes.object.isRequired,
}
const mapStateToProps = state =>({
    recipe: state.recipe
});


export default connect(mapStateToProps, {getRecipes})(Ideas);




/* 
              <div className="ideas">
                  {recipes.map(recipe => (
                  <IdeasItem key={recipe.recipe.calories} 
                  label={recipe.recipe.label} 
                  image={recipe.recipe.image} 
                  totalTime={recipe.recipe.totalTime} 
                  url={recipe.recipe.url} 
                  calories={recipe.recipe.calories} 
                  dietLabels={recipe.recipe.dietLabels} 
                  ingredients={recipe.recipe.ingredients}
                  />
                  ))}

              </div>

*/

/* if(recipes){
    recipes.map(recipe => (
        <IdeasItem key={recipe.recipe.calories} 
        label={recipe.recipe.label} 
        image={recipe.recipe.image} 
        totalTime={recipe.recipe.totalTime} 
        url={recipe.recipe.url} 
        calories={recipe.recipe.calories} 
        dietLabels={recipe.recipe.dietLabels} 
        ingredients={recipe.recipe.ingredients}
        />
    ))

  }else{
      <Spinner/>
  } */