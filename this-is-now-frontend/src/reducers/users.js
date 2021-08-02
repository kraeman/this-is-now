import {LOGIN_USER, GRTSCU, SCU, ADD_VALUE_TO_CURRENT_USER, GET_READY_TO_LOGIN_USER, GET_READY_TO_STORE_TOKEN, STORE_TOKEN, GET_READY_TO_ADD_VALUE_TO_CURRENT_USER} from "../actions/actionTypes"

export const users = (state = {jwt: null, current_user_data: null, requesting: false}, action) => {
    switch(action.type){
        case GET_READY_TO_STORE_TOKEN:
            return {
                ...state,
                requesting: true
            }  
        case STORE_TOKEN:
            // debugger
            return {
                jwt: action.payload.jwt,
                current_user_data: {username: action.payload.userData, relationshipData: action.payload.relationshipData},
                requesting: false
            }
        
        case GET_READY_TO_LOGIN_USER:
            return {
                ...state,
                requesting: true
            }  
        case LOGIN_USER:
            return {
                ...state,
                current_user_data: {...state.current_user_data, other_user_data: action.payload},
                requesting: false
            }
            case GET_READY_TO_ADD_VALUE_TO_CURRENT_USER:
                return {
                    ...state,
                    requesting: true
                }  
            case ADD_VALUE_TO_CURRENT_USER:
                // debugger
            return {
                ...state,
                current_user_data: {username: action.payload},
                requesting: false
            }

            case GRTSCU:
                // debugger
                return {
                    ...state,
                    requesting: true
                }  

            case SCU:
                // debugger
            return {
                ...state,
                current_user_data: {username: action.payload},
                requesting: false
            }
        default:
            return state
    }
}
