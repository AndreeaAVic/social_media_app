import axios from 'axios';
import { 
    GET_PROFILES, 
    ERROR_PROFILES, 
} from './constant';

export const getAllProfiles = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/profile');
        console.log(response.data);
        dispatch({
            type: GET_PROFILES,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ERROR_PROFILES,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
    }
}