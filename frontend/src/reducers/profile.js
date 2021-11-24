import { 
    GET_ALL_PROFILES, 
    ERROR_PROFILES,
    GET_PROFILE,
    CLEAR_PROFILE,     
} from '../actions/constant';

const initialState = {
    profile: null,
	profiles: [],
    repos: [],
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILE:
            return { ...state, profile: payload, loading: false };
        case GET_ALL_PROFILES:
            return { ...state, profiles: payload, loading: false };
        case ERROR_PROFILES:
            return { ...state, error: payload, profile: null, loading: false };
        case CLEAR_PROFILE:
            return { ...state, profile: null, loading: false };
        default:
            return state;
    }
}