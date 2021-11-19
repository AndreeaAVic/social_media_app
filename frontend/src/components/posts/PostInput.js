import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { addPost } from '../../actions/posts';
import { connect } from 'react-redux';

const PostInput = ({ auth, addPost }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    return (
        <Fragment>
            {auth.isAuthenticated && !auth.isLoading && ( 
                <div className='post-container'>
                    <form 
                        className='form-post'
                        onSubmit={(e) => {
                            e.preventDefault();
                            addPost({ title, text });
                            setTitle('');
                            setText('');
                        }}
                    >
                            <input
                                type='text'
                                placeholder='Post title'
                                name='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required 
                            />
                            <textarea
                                name='text'
                                cols='30'
                                rows='5'
                                placeholder='Description'
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                required 
                            />
                            <input 
                                className='text-color'
                                type='submit'
                                value='Post' 
                            />
                    </form>
                </div>
            )}
        </Fragment> 
    )
}

PostInput.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { addPost })(PostInput);