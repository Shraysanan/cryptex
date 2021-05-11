import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {MyPost} from '../actions/Posts'
import PostItem from './PostItem'
import axios from 'axios'
import setauthtoken from '../utils/setauthtoken';


const CurrentUserPost = () => {

    const [mypost, setmypost] = useState([])
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
    

            const MyPost = () => {
                axios.get('http://localhost:5000/discussion/myposts', config).then((response) => {
                const currentPost = response.data;
                console.log(currentPost)
                setmypost(currentPost)
            });
            // console.log('res' ,res);

            } 

    useEffect(() => {
        MyPost()
    }, [])
    
    return (
        <div>
            <PostItem mypost={mypost}/>
        </div>
    )

}
CurrentUserPost.propTypes = {
    MyPost: PropTypes.func.isRequired,
}


export default (CurrentUserPost)
