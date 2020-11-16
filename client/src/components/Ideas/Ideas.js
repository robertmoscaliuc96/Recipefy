import React, {Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipes } from '../../actions/recipe';
import IdeasSearch from '../Ideas/IdeasSearch';
import IdeasItem from '../Ideas/IdeasItem';


const Ideas= ({getRecipes, recipe:{recipes,loading}}) =>{
    

    const [data, setData] = useState();

    useEffect(() => {
        getRecipes();
      }, []);
      console.log(recipes);
      

      return loading ?<Spinner/>:(
        <Fragment>
          <h1 className="large text-primary">Search Recipes</h1>
          <IdeasSearch/>
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