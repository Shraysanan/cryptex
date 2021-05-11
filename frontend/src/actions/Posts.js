import axios from 'axios'
import {POSTCREATED, GETMYPOST} from './Types'
import setauthtoken from '../utils/setauthtoken'

export const PostCreated = ({Heading, description}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token,
            'userid': localStorage.userid
        }
    }
    if(localStorage.token){
        setauthtoken(localStorage.token)
    }
    if(localStorage.userid){
        axios.defaults.headers.common['userid'] = localStorage.userid;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
    console.log('inside action',localStorage.userid,localStorage.token);
    const post = {post:{Heading,description}};
    const body = JSON.stringify(post);

    try {
        const res = axios.post('http://localhost:5000/discussion/create', body, config)
        console.log('res'+ res);
        dispatch({
            type:POSTCREATED,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }

}

export const MyPost = () => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token,
            'userid': localStorage.userid
        }
    }
    if(localStorage.token){
        setauthtoken(localStorage.token)
    }
    if(localStorage.userid){
        axios.defaults.headers.common['userid'] = localStorage.userid;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }

    try {
        const res = await axios.get('http://localhost:5000/discussion/myposts', config);
        console.log('res' + res);
        dispatch({
            type:GETMYPOST,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}