import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

const Post = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts').then((response) => {
            setPosts(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <div className="container">
            {posts.map((post) => (
                <div key={post._id} className="post">
                    <h4 className="text-primary">{post.name}</h4>
                    <p className="text-color">{post.text}</p>
                    <AiOutlineLike className="icons" />
                    <AiOutlineDislike className="icons" />
                </div>
            ))}
        </div>
    );
};

export default Post;
