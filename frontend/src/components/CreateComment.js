import React, {useState, Fragment} from 'react'
import {connect} from 'react-redux'
import {CommentCreated} from '../actions/CommentCreated'
import PropTypes from 'prop-types'
import {useParams, useHistory, Redirect} from 'react-router-dom'

const CreateComment = ({CommentCreated, isAuthenticated}) => {
    const history = useHistory()
    let {id} = useParams()
    let link = `/readmore/${id}`
    const [formData, SetFormData] = useState({
        
        description:''
     });
     const [redirect, setRedirect] = useState({
         redirect:false
     })
 
     const {description} = formData;
     
 
     const onChange = e => SetFormData({...formData, [e.target.name]:e.target.value});
 
     const onSubmit = async e =>{
        e.preventDefault();
        CommentCreated({description, id})
        setTimeout(() => {
            window.location.reload();
            
        },1000);
        // setRedirect(true)
        // if(redirect
        //     return <Redirect to={link}/>
        // }
        // <Redirect to={link}/>
        // history.push(link)
     }
     return (
         <Fragment>
            <form className="form" onSubmit= {e => onSubmit(e)}>
                         <div className="form-group">
                             <label>Comment</label>
                             <input type="text" name="description" value={description} onChange={e => onChange(e)}></input>
 
                             <button type="submit" variant="contained" color="primary"  value="Post">
                                 Post Comment!
                             </button>
                         </div>
                     </form>  
         </Fragment>
     )
}

CreateComment.propTypes = {
    isAuthenticated: PropTypes.bool,
    CommentCreated: PropTypes.func.isRequired
}

const maptstatetoprops = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(maptstatetoprops, {CommentCreated})(CreateComment)
