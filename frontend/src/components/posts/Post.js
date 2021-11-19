import React, { Fragment, useState } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { updatePost, deletePost, addLike, unLike } from '../../actions/posts';
import { AiOutlineLike, AiOutlineDislike, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { connect } from 'react-redux';

const Post = ({
    auth,
    post: { title, text, _id, date, user, avatar, name, likes },
    updatePost,
    deletePost,
    addLike,
    unLike
}) => {
    const [isEditing, setEditing] = useState(false);
    const [newTitle, setTitle] = useState(title);
    const [newText, setText] = useState(text);

    return (
        <div className="container">
            <div className="post">
                <div className="post-container-left">
                    <img className="round-img" src={avatar} alt="" />
                    <h4>{name}</h4>
                </div>
                <div>
                    {isEditing ? (
                        <Fragment>
                            <form 
                                className='form-post'
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    updatePost(_id, { title: newTitle, text: newText } );
                                    setEditing(!isEditing);
                                }}
                            >
                                <input
                                    type='text'
                                    placeholder='Post title'
                                    name='title'
                                    value={newTitle}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required 
                                />
                                <textarea
                                    name='text'
                                    cols='30'
                                    rows='3'
                                    placeholder='Description'
                                    value={newText}
                                    onChange={(e) => setText(e.target.value)}
                                    required 
                                />
                                <input 
                                    className='text-color'
                                    type='submit'
                                    value='Update post' 
                                />
                            </form>
                        </Fragment>
                    ) : (
                        <div>
                            <h4 className="text-primary">{newTitle}</h4>
                            <p className="text-color">{newText}</p>
                            <p className="post-date">Posted on <Moment format="YYYY/MM/DD HH:mm">{date}</Moment></p>
                        </div>
                    )}
                    {auth.isAuthenticated && !auth.loading && (
                        <div>
                            <button 
                                type='button' 
                                className='bg-primary'
                                onClick={() => {
                                    addLike(_id);
                                }}
                            >
                                <AiOutlineLike />
                                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                            </button>
                            <button 
                                type='button' 
                                className='bg-primary'
                                onClick={() => {
                                    unLike(_id);
                                }}
                            >
                                <AiOutlineDislike />
                            </button>
                            {user === auth.user?._id && (
                                <Fragment>
                                    <button
                                        className='bg-primary'
                                        onClick={(e) => setEditing(!isEditing)}
                                        type="button" 
                                    >
                                        <AiFillEdit />
                                        Edit
                                    </button>
                                    <button
                                        className='bg-primary' 
                                        onClick={() => deletePost(_id)}
                                        type="button"
                                    >
                                        <AiFillDelete />
                                        Delete
                                    </button>
                                </Fragment>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Post.propTypes = {
    auth: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    updatePost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    addLike: PropTypes.func.isRequired,
    unLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { updatePost, deletePost, addLike, unLike })(Post);
