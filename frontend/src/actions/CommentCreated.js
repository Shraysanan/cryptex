import axios from 'axios'
import {COMMENTCREATED, GETMYCOMMENT, GETMYPOST} from './Types'
import setauthtoken from '../utils/setauthtoken'

export const CommentCreated = ({ description}) => async dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token,
            'userid': localStorage.userid,
            'postid': localStorage.postid
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
    if(localStorage.postid){
        axios.defaults.headers.common['postid'] = localStorage.postid;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
    console.log('inside action',localStorage.userid,localStorage.token, localStorage.postid);
    const post = {Comment:{description}};
    const body = JSON.stringify(post);

    try {
        const res = axios.post('http://localhost:5000/discussion/create', body, config)
        console.log('res'+ res);
        dispatch({
            type:COMMENTCREATED,
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