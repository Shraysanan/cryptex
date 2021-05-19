import axios from 'axios';

const setuserid = userid => {
    if(userid){
        axios.defaults.headers.common['userid'] = userid;
    }else{
        delete axios.defaults.headers.common['userid'];
    }
}

export default setuserid;