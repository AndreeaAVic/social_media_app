import React, { useEffect } from 'react';
import Post from './Post';
import PostInput from './PostInput';
import PropTypes from 'prop-types';
import { getPosts } from '../../actions/posts';
import { loadUser } from '../../actions/auth';
import { connect } from 'react-redux';

const Posts = ({ auth, getPosts, loadUser, posts: { posts, loading } }) => {
    useEffect(() => {
        if (auth.isAuthenticated) loadUser();
        getPosts();
    }, [auth.isAuthenticated]);

    return (
        <div className='container'>
            <PostInput />
            <div>
                {posts.map((post) => (
                    <Post key={post._id} post={post} /> 
                ))}
            </div>
        </div>
    );
};

Posts.protoTypes = {
    auth: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    loadUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    posts: state.posts,
});

export default connect(mapStateToProps, { getPosts, loadUser })(Posts);
