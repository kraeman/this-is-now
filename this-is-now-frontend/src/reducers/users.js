import {LOGIN_USER, GRTSCU, STORE_TOKEN2, SCU, ADD_VALUE_TO_CURRENT_USER, GET_READY_TO_LOGIN_USER, GET_READY_TO_STORE_TOKEN, STORE_TOKEN, GET_READY_TO_ADD_VALUE_TO_CURRENT_USER} from "../actions/actionTypes"

export const user = (state = {jwt: null, username: null, value_ids: [], requesting: false}, action) => {
    switch(action.type){
        case GET_READY_TO_STORE_TOKEN:
            return {
                ...state,
                requesting: true
            }  
            case ADD_VALUE_TO_CURRENT_USER:
                // debugger
            return {
                ...state,
                value_ids: [...state.value_ids, action.payload.value_id]
            }
        case STORE_TOKEN:
            // debugger
            return {
                jwt: action.payload.jwt,
                username: action.payload.username,
                id: action.payload.user_id,
                value_ids: action.payload.value_ids,
                requesting: false
            }
            case STORE_TOKEN2:
            // debugger
            return {
                jwt: action.payload.jwt,
                username: action.payload.username,
                id: action.payload.user_id,
                value_ids: state.value_ids,
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
