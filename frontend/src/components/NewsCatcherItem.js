import React from 'react'

const NewsCatcherItem = props => {
    console.log(props.responseData)
    const {responseData} = props
    console.log(responseData.length)
    if(responseData.length > 0) {
        return(
            responseData.map((list) => {
                console.log(list);
            return(
                <div key={list._id}>
                    <p>{list.summary}</p>

                </div>
            )
        })
        )
    }else{
        return <h3>no list</h3>
    }
}

export default NewsCatcherItem