import React, {useState, Fragment} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {CommentCreated} from '../actions/CommentCreated'
import PropTypes from 'prop-types'


const CreateComment = ({CommentCreated, isAuthenticated}) => {
    const [formData, SetFormData] = useState({
        
        description:''
     });
 
     const {description} = formData;
 
     const onChange = e => SetFormData({...formData, [e.target.name]:e.target.value});
 
     const onSubmit = async e =>{
        e.preventDefault();
         CommentCreated({description});
 
     }
     return (
         <Fragment>
            <form className="form" onSubmit= {e => onSubmit(e)}>
                         <div className="form-group">
                             <label>Body</label>
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

}

const maptstatetoprops = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(maptstatetoprops, {CommentCreated})(CreateComment)
