import {combineReducers} from 'redux';
import auth from './auth';
import {getWatchlist} from './watchlist'


export default combineReducers({
    auth,
    getWatchlist,
});