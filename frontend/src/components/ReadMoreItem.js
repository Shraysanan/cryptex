import React, {Fragment,useEffect} from 'react'

const ReadMoreItem = props => {
    console.log(props.mypost)
    const {mypost} = props;
    var commentsArray
    const {comments} = mypost
    // console.log(mypost.length)
    // useEffect(() => {
    //     this.arr=mypost.comments
    // }, [])
    return(
        <Fragment>
            <h1>{mypost.Heading}</h1>
            <p>{mypost.description}</p>
            <ul>
                {
                // commentsArray.map((comment) => {
                //     console.log(comment.text)
                // })
                }
                {/* {  Object.keys(mypost).forEach(function(Key){
                    // console.log(Key);
                 if(Key == 'comments'){
                    //   console.log(Key)
                    // console.log("array",arr)
                    var arr = [];
                    mypost.comments.map(function(innerkey){
                        console.log(innerkey.text);
                        arr.push(innerkey.text);
                    })
                    console.log(arr);
                    return(
                        <li>{arr[0]}</li>
                    )
                 }
             }) 
             } */}
             {/* {
                arr.map((user) => (
                    <div className="user">{user.text}</div>
                  ))
             } */}
            </ul>
             
            
            <label>Comments:</label>
            <input type="text"></input>
        </Fragment>
    )

}

export default ReadMoreItem
