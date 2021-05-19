import React from 'react'
import { useEffect, useState } from 'react'
import ReadMoreItem from'./ReadMoreItem'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import "./Readmore.css"


const Readmore = () => {

    let {id} = useParams()

    const [mypost, setmypost] = useState({})
    const [author, setAuthor] = useState({})
    const [comments, setComment] = useState([])
    const [date, setDate] = useState('')

    const Post = () => {
        console.log('before axios')
        axios.get(`http://localhost:5000/discussion/post/${id}`).then((response) => {
        const res = response.data;
        const comments = response.data.comments;
        setComment(comments)
        setAuthor(res.author)
        setDate(res.date)
        console.log(res)
        setmypost(res)
    });
}
    useEffect(() => {
        Post()
    },[])
    
    return (
        <div className="rmpost">
            <ReadMoreItem mypost={mypost} comments={comments} post={Post}  author={author} date={date} />
            
        </div>
    )

}

export default Readmore
