import {CLEAR_ERROR, ERROR, REFRESH_USER, UPDATE_USERS_VALUES, GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER, REMOVE_VALUE_FROM_CURRENT_USER, LOGOUT, ADD_VALUE_TO_CURRENT_USER, GET_READY_TO_STORE_TOKEN, STORE_TOKEN, GET_READY_TO_UPDATE_CURRENT_USERS_VALUES} from "../actions/actionTypes"

export const user = (state = {token: null, username: null, value_ids: [], requesting: false, error: null}, action) => {
    switch(action.type){
        case GET_READY_TO_STORE_TOKEN:
            return {
                ...state,
                requesting: true
            }  
            case ADD_VALUE_TO_CURRENT_USER:
            return {
                ...state,
                value_ids: [...state.value_ids, action.payload.value_id]
            }
        case STORE_TOKEN:
            return {
                token: action.payload.token,
                username: action.payload.username,
                id: action.payload.user_id,
                value_ids: action.payload.value_ids,
                requesting: false,
                error: null
            }
            case REFRESH_USER:
                return {
                    token: action.payload.token,
                    username: action.payload.username,
                    id: action.payload.user_id,
                    value_ids: state.value_ids,
                    requesting: false,
                    error: null
                }
        
      
        case   GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER:
            return {
                ...state,
                requesting: true
            }

            case REMOVE_VALUE_FROM_CURRENT_USER:
                return {
                    ...state,
                    value_ids: [...state.value_ids.filter(value => value !== action.payload)]
                }    
                

        case LOGOUT:
            return {
                token: null,
                username: null,
                value_ids: [],
                requesting: false,
                error: null
            }     
        
            case GET_READY_TO_UPDATE_CURRENT_USERS_VALUES:
                return {
                    ...state,
                    requesting: true
                }  

            case ERROR:
            return {
                ...state,
                error: action.payload
            }


                case CLEAR_ERROR:
                return {
                    ...state,
                    error: null
                }

                case UPDATE_USERS_VALUES:
                
                return {
                    ...state,
                    value_ids: action.payload
                }

        default:
            return state
    }
}
