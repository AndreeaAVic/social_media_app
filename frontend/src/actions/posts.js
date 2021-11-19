import axios from 'axios';
import { 
    ADD_POST,
    ERROR_POST,
    GET_POSTS,
    UPDATE_POST,
    DELETE_POST,
    ADD_LIKE,
    UNLIKE
} from './constant';

export const addPost = (formData) => async (dispatch) => {
    const config = {
		headers: {
			'Content-Type': 'application/json',
		},
    };

    try {
        const response = await axios.post('/api/posts', JSON.stringify(formData), config);
        console.log(response.data);
        dispatch({
            type: ADD_POST,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR_POST,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
    }
}

export const getPosts = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/posts');
        dispatch({
            type: GET_POSTS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR_POST,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });        
    }
}

export const updatePost = (postId, formData) => async (dispatch) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.put(`/api/posts/${postId}`, formData, config);
        dispatch({
            type: UPDATE_POST,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR_POST,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
    }
}

export const deletePost = (postId) => async (dispatch) => {
    try {
        await axios.delete(`/api/posts/${postId}`);
        dispatch({
            type: DELETE_POST,
            payload: postId,
        });        
    } catch (error) {
        dispatch({
            type: ERROR_POST,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        }); 
    }
} 

export const addLike = (postId) => async (dispatch) => {
    const config = {
		headers: {
			'Content-Type': 'application/json',
		},
    };

    try {
        const response = await axios.put(`/api/posts/like/${postId}`, config);
        console.log(response.data);
        dispatch({
            type: ADD_LIKE,
            payload: response.data,
        });
        const resp = await axios.get('/api/posts');
        dispatch({
            type: GET_POSTS,
            payload: resp.data,
        });
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors);
    }
}

export const unLike = (postId) => async (dispatch) => {
    const config = {
		headers: {
			'Content-Type': 'application/json',
		},
    };

    try {
        const response = await axios.put(`/api/posts/unlike/${postId}`, config);
        console.log(response.data);
        dispatch({
            type: UNLIKE,
            payload: response.data,
        });
        const resp = await axios.get('/api/posts');
        dispatch({
            type: GET_POSTS,
            payload: resp.data,
        });        
    } catch (error) {
        const errors = error.response.data.errors;
        console.log(errors);
    }
}