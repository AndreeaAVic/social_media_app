import { 
    GET_PROFILES, 
    ERROR_PROFILES,     
} from '../actions/constant';

const initialState = {
	profiles: [],
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PROFILES:
            return { ...state, profiles: payload, loading: false };
        case ERROR_PROFILES:
            return { ...state, profiles: [...state.profiles], loading: false, error: payload };
        default:
            return state;
    }
}