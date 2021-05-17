import React, {useState, Fragment} from 'react'
import {connect} from 'react-redux'
import {CommentCreated} from '../actions/CommentCreated'
import PropTypes from 'prop-types'
import {useParams, useHistory, Redirect} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import AddCommentIcon from '@material-ui/icons/AddComment';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import "./CreateComment.css"

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

     const keyPress = e => {
        if(e.keyCode == 13){
            onSubmit(e);
            // put the login here
         }
     }

     const useStyles = makeStyles((theme) => ({
        root: {
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
        },
        iconButton: {
          padding: 10,
        },
        divider: {
          height: 28,
          margin: 4,
        },
      }));

     const classes = useStyles();

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
                                <Paper component="form" className={classes.root}>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        <AddCommentIcon />
                                    </IconButton>
                                    <InputBase
                                        multiline
                                        name="description" 
                                        rows={1}
                                        className="commI"
                                        value={description} 
                                        onChange={e => onChange(e)}
                                        variant="outlined"
                                        onKeyDown={e => keyPress(e)}                                        
                                        className={classes.input}
                                        placeholder="Add a comment to this discussion"
                                        inputProps={{ 'aria-label': 'add a comment' }}
                                    />
                                    <Divider className={classes.divider} orientation="vertical" />
                                    <IconButton onClick={e => onSubmit(e)} color="primary" className={classes.iconButton} aria-label="directions">
                                        <SendIcon className="icc">sdasd</SendIcon>
                                    </IconButton>
                                </Paper>
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
