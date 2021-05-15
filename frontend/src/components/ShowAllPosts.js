import React, {useEffect, useState} from 'react'
import axios from 'axios'
import AllPostItem from './AllPostItem'
import "./ShowAllPosts.css"


const ShowAllPosts = () => {

    const [posts, setPosts] = useState([])

        
        const allPosts = () => {
            axios.get('http://localhost:5000/discussion/allposts').then((response) => {
                const allposts = response.data
                console.log(allposts)
                setPosts(allposts)
            })
        }

    useEffect(() => {
        allPosts()
    }, [])
    return (
        <>
        <div className="postsPage">
            <div className="title">
                <h2 >Discussions</h2>
            </div>
            <div className="DisPostsList row">
                <AllPostItem posts={posts}/>
            </div>
        </div>
        </>
    )
}

export default ShowAllPosts
