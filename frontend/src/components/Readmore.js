import React from 'react'
import { useEffect, useState } from 'react'
import ReadMoreItem from'./ReadMoreItem'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Readmore = () => {

    let {id} = useParams()

    const [mypost, setmypost] = useState({})

    const Post = () => {
        console.log('before axios')
        axios.get(`http://localhost:5000/discussion/post/${id}`).then((response) => {
        const res = response.data;
        console.log(res)
        setmypost(res)
    });
}
    useEffect(() => {
        Post()
    },[])
    
    return (
        <div>
            <ReadMoreItem mypost={mypost}/>
            {/* <h1>hello</h1> */}
        </div>
    )

}

export default Readmore
