import axios from 'axios'
import {COMMENTCREATED, GETMYCOMMENT, GETMYPOST} from './Types'
import setauthtoken from '../utils/setauthtoken'

export const CommentCreated = ({ description,  id}) => async dispatch => {
    
    console.log(id)
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.token,
            'userid': localStorage.userid,
            'postid': id
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
    const comment = {text:description};
    const body = JSON.stringify(comment);

    try {
        const res = axios.post('http://localhost:5000/comment/create', body, config).then((response) => {console.log(response)})
        
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