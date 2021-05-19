import React from 'react';
import { makeStyles,withStyles, useTheme  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ForumIcon from '@material-ui/icons/Forum';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {logout} from '../actions/auth'
import Button from '@material-ui/core/Button';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RateReviewIcon from '@material-ui/icons/RateReview';
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
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const drawerWidth = 240;

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.black,
      },
    },
  },
}))(MenuItem);

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className={classes.root}>

      <AppBar className="headtrans" position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
           <a className="titm" href="/"> Cryptex</a>
          </Typography>
          {!localStorage.userid && (
            <div>
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
              <span className="lgscr">
                <Link to="/CoinSummary">
                  <Button
                    variant="contained"
                    color="primary"
                    className="Navbutton"
                    startIcon={<AssessmentIcon />}
                  >
                  My Watchlist
                  </Button>
                </Link>
                <Link to="/newscatcher">
                  <Button
                    variant="contained"
                    color="primary"
                    className="Navbutton"
                    startIcon={<ChromeReaderModeIcon />}
                  >
                    News Updates
                  </Button>
                </Link>
                <Link to="/createpost" >
                  <Button
                    variant="contained"
                    color="primary"
                    className="Navbutton"
                    startIcon={<AddCircleIcon />}
                  >
                    Create Post
                  </Button>
                </Link>

                <Link to="/ShowAllPosts">
                  <Button
                    variant="contained"
                    color="primary"
                    className="Navbutton"
                    startIcon={<ForumIcon />}
                  >
                  Forum
                  </Button>
                </Link>
                
                <Button
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  variant="contained"
                  className="Navbutton"
                  onClick={handleClick}
                >
                  Manage Profile
                </Button>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/watchlist" >
                    <StyledMenuItem  >
                      <ListItemIcon>
                        <EditIcon className="Navbuttondrop" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText className="Navbuttondrop" primary="Update Watchlist" />
                    </StyledMenuItem>
                  </Link>
                  <Link to="/getpost" >
                  <StyledMenuItem>
                    <ListItemIcon>
                      <RateReviewIcon className="Navbuttondrop" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText className="Navbuttondrop" primary="My Threads" />
                  </StyledMenuItem>
                  </Link>
                </StyledMenu>
                

                  <a href="/" >
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
              </span>
              <span className="smalscr">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </span>

              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                <Link to="/CoinSummary" >
                    <StyledMenuItem  >
                      <ListItemIcon>
                        <AssessmentIcon className="Navbuttondrop" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText className="Navbuttondrop" primary="MY WATCHLIST" />
                    </StyledMenuItem>
                  </Link>
                  <Link to="/newscatcher" >
                    <StyledMenuItem  >
                      <ListItemIcon>
                        <ChromeReaderModeIcon className="Navbuttondrop" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText className="Navbuttondrop" primary="NEWS UPDATES" />
                    </StyledMenuItem>
                  </Link>
                  <Link to="/createpost" >
                    <StyledMenuItem  >
                      <ListItemIcon>
                        <AddCircleIcon className="Navbuttondrop" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText className="Navbuttondrop" primary="CREATE THREAD" />
                    </StyledMenuItem>
                  </Link>
                  <Link to="/ShowAllPosts" >
                    <StyledMenuItem  >
                      <ListItemIcon>
                        <ForumIcon className="Navbuttondrop" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText className="Navbuttondrop" primary="FORUM" />
                    </StyledMenuItem>
                  </Link>
                </List>

                <Divider />
                <List>
                <Link to="/watchlist" >
                    <StyledMenuItem  >
                      <ListItemIcon>
                        <EditIcon className="Navbuttondrop" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText className="Navbuttondrop" primary="UPDATE WATCHLIST" />
                    </StyledMenuItem>
                  </Link>
                  <Link to="/getpost" >
                  <StyledMenuItem>
                    <ListItemIcon>
                      <RateReviewIcon className="Navbuttondrop" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText className="Navbuttondrop" primary="MY THREADS" />
                  </StyledMenuItem>
                  </Link>
                  <StyledMenuItem  onClick={logout} >
                    <ListItemIcon>
                      <ExitToAppIcon className="Navbuttondrop" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText className="Navbuttondrop" primary="LOG OUT" />
                  </StyledMenuItem>
                </List>
              </Drawer>
              
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