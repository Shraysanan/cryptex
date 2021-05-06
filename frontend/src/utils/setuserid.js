import axios from 'axios';

const setuserid = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
        // console.log(token)
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setuserid;