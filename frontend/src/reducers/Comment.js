import {COMMENTCREATED} from '../actions/Types'


export default function( state , action ) {
    const {type, payload} = action

    switch(type){
        case COMMENTCREATED:
            return{
                ...state,
               ...payload

            }
    }

}