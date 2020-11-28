import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import food from '../../assets/food.jpg'


const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id,user,name, title, type, ingredients, description, time, review, date,likes },
  showActions
}) => (


  <div className='post bg-white p-1 my-1'>
    <div className="post-image">
        <h4>{name}</h4>
    </div>
    <div>
      <p className='title'>{title}</p>
      <p className='my-1'>{description}</p>
      <p className='my-1'>{type}</p>
      <p className='my-1'><i class="fas fa-clipboard-list"> </i>{ingredients}</p>
      <p className='my-1'><i className="fas fa-hourglass-half"> </i>  {time}</p>


      {showActions && (
        <Fragment>

        <div className="btn-div">
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn-post'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn-post'
          >
            <i className='fas fa-thumbs-down' />
          </button>
        </div>


          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {review.length > 0 && (
              <span className='comment-count'>{review.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn-post btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
          <p className='post-date'>
              <Moment format='YYYY/MM/DD'>{date}</Moment>
          </p>
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost }
)(PostItem);
