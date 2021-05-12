import React from 'react'

const AllPostItem = props => {
    console.log(props.posts)
    const {posts} = props
    console.log(posts.length)
    if(posts.length > 0) {
        return(
            posts.map((list) => {
                console.log(list._id);
            return(
                <div key={list._id}>
                    <h1>{list.Heading}</h1>
                    <p>{list.description}</p>
                </div>
            )
        })
        )
    }else{
        return <h3>no list</h3>
    }
}

export default AllPostItem
