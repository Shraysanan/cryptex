import {combineReducers} from 'redux';
// import alerts from './alerts';
import auth from './auth';
// import profile from './profile'
import {getWatchlist} from './watchlist'
import Comment from './Comment'
// import getmypost from './Post'
// import postcreated from './Post'

export default combineReducers({
    auth,
    getWatchlist,
    // Comment
});