import {combineReducers} from 'redux';
// import alerts from './alerts';
import auth from './auth';
// import profile from './profile'
import watchlist from './watchlist'


export default combineReducers({
    auth,
    watchlist
});