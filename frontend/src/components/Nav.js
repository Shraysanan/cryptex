import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {logout} from '../actions/auth'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Nav.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
      color: "white",
  },
}));

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
  const classes = useStyles();



  return (
    <div className={classes.root}>

      <AppBar className="headtrans" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cryptex
          </Typography>
          {!localStorage.userid && (
            <div>
              {/* <Link to="/ShowWatchList">ShowWatchList</Link> */}
              <Link to ="/ShowAllPosts" >Discussions</Link>
              <Link to="/register" className={classes.links} >
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    className={classes.links} 
                    color="inherit"
                >
                    <PersonAddIcon/>
                </IconButton>
              </Link>
              <Link to="/login" className={classes.links} >
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    className={classes.links} 
                    color="inherit"
                >
                    <VpnKeyIcon />
                </IconButton>
              </Link>

            </div>
          )}

            {localStorage.userid && (
            <div>
              <Link to="/ShowWatchList">ShowWatchList</Link>
              <Link to="/newscatcher">newcatcher</Link>
              <Link to="/watchlist">Edit</Link>
              <Link to="/createpost" className={classes.links} >create Post</Link>
              <Link to="/getpost" className={classes.links} >get Post</Link>
              <Link to="/ShowAllPosts">Discussion</Link>

              

                <a href="/" className={classes.links} >
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.links} 
                color="inherit"
                onClick={logout} 
              >
                <ExitToAppIcon/>
              </IconButton></a>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}


Navbar.propTypes = {
    logout: propTypes.func.isRequired, 
    auth: propTypes.object.isRequired,
}

const mapstatetoprop = state =>({
    auth: state.auth
});




export default connect(mapstatetoprop, {logout}) (Navbar)