import axios from 'axios';
import {GETWATCHLIST, WATHCLISTERROR} from './Types'
// import setauthtoken from '../utils/setauthtoken';

export const getWatchList = () => async (dispatch) => {

    try {
        // console.log('inside action')
        const res = await axios.get('http://localhost:5000/watchlist');
        console.log('res'+res);
        dispatch({
            type: GETWATCHLIST,
            payload: res.data
        });

        
    } catch (err) {
        dispatch({
            type: WATHCLISTERROR,
            payload:{msg: err.response.statueText, status: err.response.status}
        })
        if(err){
            console.log(err);
        }
        
    }
}

export const putWatchList = (mywatchlist) => async (dispatch) => {
    console.log('inside action');

    const body = JSON.stringify({mywatchlist});
    console.log(body);

    try {
        console.log('inside action')
        const res = await axios.put('http://localhost:5000/watchlist', body);
        console.log('res'+res);
        
    } catch (err) {
        console.log(err); 
    }
}
