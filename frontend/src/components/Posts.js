import React, {Fragment, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {PostCreated} from '../actions/Posts'
import PropTypes from 'prop-types'
import axios from 'axios'
import "./Posts.css"
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { useHistory } from 'react-router';



const useStyles = makeStyles((theme) => ({
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 16,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor : '#f7f7f77a',
    borderRadius: 16,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Posts = ({PostCreated, isAuthenticated}) => {

  const history = useHistory()

    const [formData, SetFormData] = useState({
        Heading:'',
        description:''
     });
     
     const {Heading, description} = formData;
     
     const onChange = e => SetFormData({...formData, [e.target.name]:e.target.value});
     
     const onSubmit = async e =>{
        e.preventDefault();
         PostCreated({Heading, description});
         setTimeout(() => {
          history.push('/ShowAllPosts');
         }, 2000);
        
     }  

  const classes = useStyles();

  return (
    <Grid container component="main" className="root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} >
          <img className="postsImg" src="media/nov.gif" alt="" />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <NoteAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Post
          </Typography>
          <form className={classes.form}  onSubmit= {e => onSubmit(e)} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Heading"
              name="Heading"
              autoFocus
              onChange={e => onChange(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="password"
              multiline
              rows={10}
              onChange={e => onChange(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create Post
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

Posts.propTypes = {
    setAlert: PropTypes.func.isRequired,
    PostCreated: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapstatetoprop = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapstatetoprop, {PostCreated}) (Posts)