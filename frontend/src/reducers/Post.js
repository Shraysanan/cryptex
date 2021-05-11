import {POSTCREATED} from '../actions/Types'

const initState = {
    token: localStorage.getItem('token'),
    data:'',
    loading: true,
    user: null
}

export default function(state = initState, action){
    const {type, payload} = action;

    switch(type){
        case POSTCREATED:
            console.log('in reducer', payload)
            return{
                ...state,
                data: payload,
                loading:false
            }
    }
        
}

export default function(state= initState, action){
    const {type, payload} = action;

    switch(type){
        case GETMYPOST:
        console.log('in reducer', payload);
        return{
            ...state,
            data: payload,
            loading:false
        }
    }
}