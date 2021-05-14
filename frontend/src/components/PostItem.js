import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

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
                <div key={list._id}>
                    <h1>{list.Heading}</h1>
                    <p>{list.description}</p>

                </div>
                <Link to="/readmore">Read More</Link>
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
