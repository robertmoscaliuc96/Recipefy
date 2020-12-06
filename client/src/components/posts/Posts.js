import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPosts } from '../../actions/post';
import './posts.css';

import PostItem from './PostItem';
import PostForm from './PostForm';
import ModalForm from './modal/ModalForm';

const Posts = ({getPosts, post:{posts,loading}})=>{

    useEffect(() => {
        getPosts();
      }, [getPosts]);

      const [isOpen, setIsOpen] = useState(false);
    
      return loading ?<Spinner/>:(
        <Fragment>
            <section className="recipe-container">
              <div className="recipe-background">
                <div className="index-recipe">

                  <div className="post-text">
                    <h1 className="large text-primary white">Posts</h1>
                    <p className="lead white">
                      Share your recipe to the community
                    </p>
                    <div className="btn-add-post" onClick={()=> setIsOpen(true)}>
                      Add Post
                    </div>
                  </div>
                  <ModalForm open={isOpen} onClose= {()=> setIsOpen(false)}/>


                  <div className="post-illustration">

                  </div>

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
