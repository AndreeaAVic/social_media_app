import { 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    USER_LOADED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT
} from "../actions/constant";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    token: '',
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            // put the token in local storage
            localStorage.setItem('token', payload.token);
            return { ...state, ...payload, isAuthenticated: true, loading: false };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
        case AUTH_ERROR:
            // remove token from local storage
            localStorage.removeItem('token');
            return { ...state, token: null, isAuthenticated: false, loading: false };
        case USER_LOADED:
            return { ...state, user: payload, isAuthenticated: true, loading: false };
        default:
            return state;
    }
}