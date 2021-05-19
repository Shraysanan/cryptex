
import { GETWATCHLIST, WATHCLISTERROR } from "../actions/Types"

const initialState ={
    mywatchlist: [],
    loading: true,
    error:{}
}

export const getWatchlist = ( state = initialState, action) => {
    const {type ,payload} = action


    switch(type) {
        case GETWATCHLIST:
            console.log('initial watchList',payload);
            return{
                ...state,
                mywatchlist:[...payload],
                loading: false
            }
        case WATHCLISTERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}