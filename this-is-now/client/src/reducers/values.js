import {ADD_VALUE, GET_READY_TO_ADD_VALUE, GET_READY_TO_DELETE_VALUE, GET_READY_TO_STORE_VALUES, STORE_VALUES, DELETE_VALUE} from "../actions/actionTypes"

export const values = (state = {values: [], requesting: false}, action) => {
    switch(action.type){
        case ADD_VALUE:
            return {
                values: [...state.values, action.payload],
                requesting: false
                }

        case GET_READY_TO_ADD_VALUE:
            return {
                ...state,
                requesting: true
            }   
        case GET_READY_TO_STORE_VALUES:
            return {
                ...state,
                requesting: true
            }
        case STORE_VALUES:
            return {
                values: action.payload.map(value => value.attributes),
                requesting: false
            }
            case DELETE_VALUE:
                return {
                    values: [...state.values].filter(value => value.id !== action.payload),
                    requesting: false
                }

                case GET_READY_TO_DELETE_VALUE:
                    return {
                        ...state,
                        requesting: true
                    }    
        default:
            return state
    }
}