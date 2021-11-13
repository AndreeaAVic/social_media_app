import axios from "axios";

const setTokenHeaderInfo = (token) => {
    // local storage token exists -> add to headers request
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        // clear token from headers request
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setTokenHeaderInfo;