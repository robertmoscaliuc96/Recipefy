import React, {Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getRecipes } from '../../actions/recipe';
import IdeasSearch from '../Ideas/IdeasSearch';
import IdeasItem from '../Ideas/IdeasItem';


const Ideas= ({getRecipes, recipe:{recipes,loading}}) =>{

    useEffect(() => {
        getRecipes();
      }, [getRecipes]);

      console.log(recipes)

      return loading ?<Spinner/>:(
        <Fragment>
          <h1 className="large text-primary">Search Recipe</h1>
          <IdeasSearch/>
          <div className="posts">

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

