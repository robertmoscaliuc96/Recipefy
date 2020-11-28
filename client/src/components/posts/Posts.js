import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';
import './posts.css';

import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({getPosts, post:{posts,loading}})=>{

    useEffect(() => {
        getPosts();
      }, [getPosts]);
    

      return loading ?<Spinner/>:(
        <Fragment>
            <section className="recipe-container">
              <div className="recipe-background">
                <div className="index-recipe">
                  <h1 className="large text-primary white">Posts</h1>
                  <p className="lead white">
                     Share your recipe to the community
                  </p>
                  <button className="btn">
                    Add Post
                  </button>
                </div>

              </div>

            <div className="container-recipe">
              <div className="posts">
                {posts.map((post) => (
                  <PostItem key={post._id} post={post} />
                ))}
              </div>

            </div>

            </section>
        </Fragment>
      );
    };
    

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    post: state.post
});

export default connect(mapStateToProps, {getPosts})(Posts);
