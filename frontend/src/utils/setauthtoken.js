import axios from 'axios';

const setauthtoken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
        // console.log(token)
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setauthtoken;