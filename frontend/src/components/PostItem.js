import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


//current user posts
const PostItem = props => {
    console.log(props.mypost)
    const {mypost} = props
    console.log(mypost.length)
    if(mypost.length > 0) {
        return(
            mypost.map((list) => {
                console.log(list._id);
            return(
                <>
                <div className="col-6">
                    <Link to={`/readmore/${list._id}`}>
                        <div className="posts" key={list._id}>
                            <p className="pAuthor"> <EmojiObjectsIcon className="ico" /> {list.author.username} </p>
                            <h3>{list.Heading}</h3>
                            <p className="datep">Posted on {list.date.split("T")[0]} </p>
                            <p className="descr">{list.description}</p>
                            <p> <QuestionAnswerIcon /> {list.comments.length} Comments</p>
                            <p className="LinkRM" >Read More...</p>
                        </div>
                    </Link>
                </div>
                </>
            )
        })
        )
    }else{
        return <h3>no list</h3>
    }
    // return (
    //     <div>
    //         {WatchlistItem(props)}
    //     </div>
    // )
}


export default PostItem
