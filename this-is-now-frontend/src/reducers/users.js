import {LOGIN_USER, GET_READY_TO_LOGIN_USER} from "../actions/actionTypes"

export const usersReducer = (state = {current_user: null, requesting: false}, action) => {
    switch(action.type){
        
        case GET_READY_TO_LOGIN_USER:
            return {
                current_user:  state.current_user,
                requesting: true
            }  
        case LOGIN_USER:
            return {
                current_user: action.payload,
                requesting: false
            }
        default:
            return state
    }
}
