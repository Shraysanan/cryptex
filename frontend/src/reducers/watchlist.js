//get and update watchlist

import { GETWATCHLIST, WATHCLISTERROR } from "../actions/Types"

const initialState ={
    mywatchlist: [],
    loading: true,
    error:{}
}

export default function( state = initialState, action) {
    const {type ,payload} = action


    switch(type) {
        case GETWATCHLIST:
            return{
                ...state,
                mywatchlist: payload,
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