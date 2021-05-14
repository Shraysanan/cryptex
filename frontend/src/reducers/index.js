import {combineReducers} from 'redux';
// import alerts from './alerts';
import auth from './auth';
// import profile from './profile'
import {getWatchlist} from './watchlist'


export default combineReducers({
    auth,
    getWatchlist,
});