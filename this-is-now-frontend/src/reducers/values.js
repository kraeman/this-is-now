import {ADD_VALUE, GET_READY_TO_ADD_VALUE, GET_READY_TO_STORE_VALUES, STORE_VALUES, REMOVE_VALUE, UPDATE_VALUE} from "../actions/actionTypes"

export const values = (state = {values: [], requesting: false}, action) => {
    switch(action.type){
        case ADD_VALUE:
            // debugger
            return {
                values: [...state.values, {id: action.payload.value.data.id, type: action.payload.value.data.type, attributes: {name: action.payload.value.data.attributes.name, creator_id: action.payload.jwt}, relationships: action.payload.value.data.relationships}],
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
        case GET_READY_TO_STORE_VALUES:
            return {
                ...state,
                requesting: true
            }
        case STORE_VALUES:
            // debugger
            
            return {
                values: action.payload,
                requesting: false
            }
        default:
            return state
    }
}