import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import ModalItem from './modal/ModalItem';
import './posts.css';


const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id,user,name, title, type, ingredients, description, time, date,likes },
  showActions

}) =>  {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='post'>

      <div className="overlay" onClick={()=> setIsOpen(true)}>
        <div className="overlay">
          <div className="post-image" >
            {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={() => deletePost(_id)}
                    type='button'
                    className='btn-post delete'
                  >
                    <i className='fas fa-times' />
                  </button>
                )}
          </div>
          <h4 className="post-name">{name}</h4>

        </div>
      </div>
      
      <div className="post-bottom">
        <div className="title-card">
          <p className='title-card'>{title}</p>
        </div>
        <div className="card-group">
          <p className="type-card"><i className="fas fa-bread-slice"></i> {type}</p>
          <p className='my-1'><i className="fas fa-hourglass-half"> </i> {time}min</p>
        </div>
        <div className="card-group">
          <p className='my-1'><i className="fas fa-mitten"></i> Hard</p>
        </div>

        <div className="actions-card">
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



              <p className='post-date'>
                  <Moment format='YYYY/MM/DD'>{date}</Moment>
              </p>
            </Fragment>
          )}

        </div>
        <ModalItem open={isOpen}
              
              name={name}
              title={title}
              type={type}
              ingredients={ingredients}
              description={description}
              time={time}
              date={date}
              likes={likes}

              onClose= {()=> setIsOpen(false)}>
                Open Modal
            </ModalItem>
      </div>
  </div>
  )

}



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
