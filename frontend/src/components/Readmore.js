import React from 'react'
import { useEffect, useState } from 'react'
import ReadMoreItem from'./ReadMoreItem'
import axios from 'axios'
import {useParams,useHistory, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


const Readmore = () => {

    let {id} = useParams()

    const [mypost, setmypost] = useState({})
    const [comments, setComment] = useState([])

    const Post = () => {
        console.log('before axios')
        axios.get(`http://localhost:5000/discussion/post/${id}`).then((response) => {
        const res = response.data;
        const comments = response.data.comments;
        setComment(comments)
        console.log(res)
        setmypost(res)
    });
}
    useEffect(() => {
        Post()
    },[])
    
    return (
        <div>
            <ReadMoreItem mypost={mypost} comments={comments} post={Post}/>
           
        </div>
    )

}

export default Readmore
