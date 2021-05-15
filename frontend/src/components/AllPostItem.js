import React from 'react'
import {Link} from 'react-router-dom'
import "./AllPostItem.css"
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const AllPostItem = props => {
    console.log(props.posts)
    const {posts} = props
    console.log(posts.length)
    if(posts.length > 0) {
        return(
            posts.map((list) => {
                console.log(list._id);
            return list.description && (
                <>
                <div className="col-6">
                    <div className="posts" key={list._id}>
                        <p className="pAuthor"> <EmojiObjectsIcon className="ico" /> {list.author.username} </p>
                        <h3>{list.Heading}</h3>
                        <p className="datep">Posted on {list.date.split("T")[0]} </p>
                        <p className="descr">{list.description}</p>
                        <p> <QuestionAnswerIcon /> {list.comments.length} Comments</p>
                        <Link to={`/readmore/${list._id}`}>Read More</Link>
                    </div>
                </div>
                </>
            )
        })
        )
    }else{
        return <h3>nothing of interest here </h3>
    }
}

export default AllPostItem
