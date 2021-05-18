import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {MyPost} from '../actions/Posts'
import PostItem from './PostItem'
import axios from 'axios'
import setauthtoken from '../utils/setauthtoken';
import "./CurrentUserPost.css"
import RateReviewIcon from '@material-ui/icons/RateReview';


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

        <div className="postsPagecu">
            <div className="titlecu">
                <h1 > <RateReviewIcon className="forumI vm"/> My Threads</h1>
            </div>
            <div className="DisPostsList row">
                <PostItem mypost={mypost}/>
            </div>
        </div>
    )

}
CurrentUserPost.propTypes = {
    MyPost: PropTypes.func.isRequired,
}


export default (CurrentUserPost)
