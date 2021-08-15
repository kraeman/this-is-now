import {GET_READY_TO_DELETE_VALUE_FROM_USER, DELETE_VALUE_FROM_USER, GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER, REMOVE_VALUE_FROM_CURRENT_USER, LOGIN_USER, LOGOUT, GRTSCU, STORE_TOKEN2, SCU, ADD_VALUE_TO_CURRENT_USER, GET_READY_TO_LOGIN_USER, GET_READY_TO_STORE_TOKEN, STORE_TOKEN, GET_READY_TO_ADD_VALUE_TO_CURRENT_USER} from "../actions/actionTypes"

export const user = (state = {jwt: null, username: null, value_ids: [], requesting: false, error: null}, action) => {
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
                requesting: false,
                error: null
            }
            case STORE_TOKEN2:
            // debugger
            return {
                jwt: action.payload.jwt,
                username: action.payload.username,
                id: action.payload.user_id,
                value_ids: state.value_ids,
                requesting: false,
                error: null
            }
            case "REFRESH_USER":
                return {
                    jwt: action.payload.token,
                    username: action.payload.username,
                    id: action.payload.user_id,
                    value_ids: state.value_ids,
                    requesting: false,
                    error: null
                }
        
        case GET_READY_TO_LOGIN_USER:
            return {
                ...state,
                requesting: true
            }  
        case   GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER:
            return {
                ...state,
                requesting: true
            }

            case REMOVE_VALUE_FROM_CURRENT_USER:

                debugger
                return {
                    ...state,
                    value_ids: [...state.value_ids.filter(value => value !== action.payload)]
                }   
                
                
                case   GET_READY_TO_DELETE_VALUE_FROM_USER:
            return {
                ...state,
                requesting: true
            }

            case DELETE_VALUE_FROM_USER:

                debugger
                return {
                    ...state,
                    value_ids: [...state.value_ids.filter(value => value !== action.payload)]
                }

        case LOGOUT:
            return {
                jwt: null,
                username: null,
                value_ids: [],
                requesting: false,
                error: null
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



            case "ERROR_B":
                // debugger
            return {
                ...state,
                error: action.payload
            }

            case "ERROR_F":
                // debugger
                return {
                    ...state,
                    error: action.payload
                }

                case "CLEAR_ERROR":
                // debugger
                return {
                    ...state,
                    error: null
                }

                case "SET_CUV":
                debugger
                return {
                    ...state,
                    value_ids: action.payload
                }





        default:
            return state
    }
}
