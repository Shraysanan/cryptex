import React, {Fragment,useState} from 'react'
import CreateComment from './CreateComment';
import {CommentCreated} from '../actions/CommentCreated'
import CommentItem from './CommentItem'
import {useParams,useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import "./ReadmoreItem.css"

const ReadMoreItem = (props) => {
    // console.log(props.mypost)
    // console.log(props.comments);
    const {mypost} = props;
    const {author} = props;
    const {date} = props;
//============================================================================================
    let {id} = useParams()
    // let link = `/readmore/${id}`
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
    console.log(author)
    console.log(date)

    return(
        <Fragment>
            <div className="rmpostItem">
                <h1 className="rmTitle">{mypost.Heading}</h1>
                <p className="rmabout"><span className="float-left"> <CreateIcon/> Dicussion intiated by {author.username}</span> <span className="float-right"> <EventNoteIcon/> {date.split("T")[0]}  </span></p>
                <p className="rmContent">{mypost.description}</p>
                <CreateComment/>
                <CommentItem id={id}/>
            </div>
            
        </Fragment>
    )

}


const maptstatetoprops = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(maptstatetoprops, {CommentCreated})(ReadMoreItem)

/* <div>
                <form className="form" onSubmit= {e => onSubmit(e)}>
                         <div className="form-group">
                             <label>Comment</label>
                             <input type="text" name="description" value={description} onChange={e => onChange(e)}></input>
 
                             <button type="submit" variant="contained" color="primary"  value="Post">
                                 Post Comment!
                             </button>
                         </div>
                     </form>  
            </div> */