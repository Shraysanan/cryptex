import{
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT      
} from '../actions/Types';

const initState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}


export default function( state = initState, action) {

    const {type, payload} = action;

    switch(type){

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            console.log('this is payload',payload);
            localStorage.setItem('userid', payload.userid);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading:false
            }
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('userid')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading:false
            }
        default: 
        return state;
    }
}