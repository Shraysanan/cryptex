import React, {Fragment,useEffect, useState} from 'react'
import CreateComment from './CreateComment';
import {CommentCreated} from '../actions/CommentCreated'
import CommentItem from './CommentItem'
import {useParams,useHistory, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const ReadMoreItem = (props) => {
    // console.log(props.mypost)
    // console.log(props.comments);
    const {mypost} = props;
    const {comments} = props;
    const {post} = props;
//============================================================================================
    const history = useHistory()
    let {id} = useParams()
    let link = `/readmore/${id}`
    // const [formData, SetFormData] = useState({
        
    //     description:''
    //  });
    //  const [redirect, setRedirect] = useState({
    //      redirect:false
    //  })
 
    //  const {description} = formData;
     
 
    //  const onChange = e => SetFormData({...formData, [e.target.name]:e.target.value});
 
    //  const onSubmit = async e =>{
    //     e.preventDefault();
    //     CommentCreated({description, id});
    //     post();
    //     console.log("comments",mypost.comments)
    //  }
//=================================================================================================
    // useEffect(() => {
    //     // console.log("comments",mypost.comments)
    //     post();
    // }, [])
    return(
        <Fragment>
            <h1>{mypost.Heading}</h1>
            <p>{mypost.description}</p>
            <CreateComment/>
            <CommentItem id={id}/>
            {/* <ul>
                {comments.map((comment) => {
                    return(
                        <li>{ comment.text}</li>
                    )
                })}
            </ul>  */}
            {/* <small>{mypost.data}</small> */}
            
        </Fragment>
    )

}


const maptstatetoprops = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(maptstatetoprops, {CommentCreated})(ReadMoreItem)

{/* <div>
                <form className="form" onSubmit= {e => onSubmit(e)}>
                         <div className="form-group">
                             <label>Comment</label>
                             <input type="text" name="description" value={description} onChange={e => onChange(e)}></input>
 
                             <button type="submit" variant="contained" color="primary"  value="Post">
                                 Post Comment!
                             </button>
                         </div>
                     </form>  
            </div> */}