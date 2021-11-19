import { 
    ADD_LIKE,
    UNLIKE,
    ADD_POST,
    DELETE_POST,
    ERROR_POST,
    GET_POSTS,
    UPDATE_POST,
} from '../actions/constant';

const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: {},
    likes: [],
};

export default function posts (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ADD_POST:
            return { ...state, posts: [payload, ...state.posts], loading: false };
        case GET_POSTS:
            return { ...state, posts: payload, loading: false };
        case UPDATE_POST:
            return { 
                ...state,
                posts: state.posts.map((post) =>
                    post._id === payload._id ? payload : post
                ), 
            };
        case DELETE_POST: 
            return { 
                ...state,
                posts: state.posts.filter((post) => post._id !== payload), 
            };
        case ERROR_POST:
            return { ...state, posts: [...state.posts], loading: false, error: payload };
        case ADD_LIKE:
            return { ...state, likes: payload };
        case UNLIKE:
            return {
                ...state,
                likes: state.likes.filter((like) => like.user !== payload.user),
            };
        default:
            return state;
    }
}