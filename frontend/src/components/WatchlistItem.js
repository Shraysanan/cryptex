import React from 'react'


const WatchlistItem = props => {
    console.log(props.watchlist)
    const {watchlist} = props
    console.log(watchlist.length)
    if(watchlist.length > 0) {
        return(
            watchlist.map((list) => {
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


export default WatchlistItem
