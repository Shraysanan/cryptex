import React from 'react'
import {Link} from 'react-router-dom'

const AllPostItem = props => {
    console.log(props.posts)
    const {posts} = props
    console.log(posts.length)
    if(posts.length > 0) {
        return(
            posts.map((list) => {
                console.log(list._id);
            return(
                <>
                <div key={list._id}>
                    <h1>{list.Heading}</h1>
                    <p>{list.description}</p>
                </div>
                <Link to={`/readmore/${list._id}`}>Read More</Link>

                </>
            )
        })
        )
    }else{
        return <h3>nothing of interest here </h3>
    }
}

export default AllPostItem
