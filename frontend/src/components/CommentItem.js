import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./CommentItem.css"

const CommentItem = (props) => {
    const {id} = props
    const config = {
     headers : {
        'postid' :id 
    }
}
    const [comment, setComment] = useState([])
    useEffect(() => {
        
        axios.get('http://localhost:5000/comment/getcomments', config).then((response) => {
            console.log(response.data)
            setComment(response.data)
        })
    }, [])
    return (
        comment.map((comm) => {
            return (
                 
                 
                 <div className="Comm" key={comm._id}>
                     <div className="aboutComm">
                        <span className="nameComm"> {comm.author.username} says ... </span>
                        <span className="datecomm"> {comm.date.split("T")[0]} </span>
                     </div>
                     
                     {comm.text}</div>
                 
                 
                 )
        })
        
    )
}

export default CommentItem
