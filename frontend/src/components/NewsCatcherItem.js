import React from 'react'

const NewsCatcherItem = props => {
    console.log(props.newsItem)
    const {newsItem} = props
    console.log(newsItem.length)
    if(newsItem.length > 0) {
        return(
            newsItem.map((list) => {
                console.log(list);
            return(
                <div key={list._id}>
                    <p>{list}</p>
                </div>
            )
        })
        )
    }else{
        return <h3>no list</h3>
    }
}

export default NewsCatcherItem