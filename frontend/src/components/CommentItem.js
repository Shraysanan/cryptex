import React, {useState, useEffect} from 'react'
import axios from 'axios'
const CommentItem = (props) => {
    const {id} = props
    const config = {
     headers : {
        'postid' :id 
    }
}
    const [comment, setComment] = useState([])
    useEffect(() => {
        console.log('conifg',config)
        const res = axios.get('http://localhost:5000/comment/getcomments', config).then((response) => {
            console.log(response.data)
            setComment(response.data)
        })
    }, [])
    return (
        comment.map((comm) => {
            return <li>{comm.text}</li>
        })
        
    )
}

export default CommentItem
