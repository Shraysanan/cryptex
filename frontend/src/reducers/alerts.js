//function takes in a state 

import {SET_ALERT, REMOVE_ALERT} from '../actions/Types';

const initialState = [];

function alerts(state=initialState, action){ 

    const{type, payload} = action;

    switch(type) {
       case SET_ALERT:
           // returns the alert 
           return [...state, payload];
       case REMOVE_ALERT:
           //returns all the alerts except the one that matches the payload
           return state.filter(alert => alert.id !== payload)
       default:
           return state    
    }
}

export default alerts