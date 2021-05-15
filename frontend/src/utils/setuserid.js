import axios from 'axios';

const setuserid = userid => {
    if(userid){
        axios.defaults.headers.common['userid'] = userid;
        // console.log(token)
    }else{
        delete axios.defaults.headers.common['userid'];
    }
}

export default setuserid;