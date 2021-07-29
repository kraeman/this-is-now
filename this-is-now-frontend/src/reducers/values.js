import {ADD_VALUE, GET_READY_TO_ADD_VALUE, REMOVE_VALUE, UPDATE_VALUE} from "../actions/actionTypes"

export const values = (state = {values: [], requesting: false}, action) => {
    switch(action.type){
        case ADD_VALUE:
            // debugger
            return {
                values: [...state.values, {name: action.payload.value, id: action.payload.id, creator_token: action.payload.jwt}],
                requesting: false
                }
        // case REMOVE_VALUE:
        //     return state.filter(value => value.id !== action.payload)
        // case UPDATE_VALUE:
        //     const index = state.findIndex(value => value.id === action.payload.valueId)
        //     return 
        case GET_READY_TO_ADD_VALUE:
            return {
                ...state,
                requesting: true
            }      
        default:
            return state
    }
}