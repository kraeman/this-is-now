import {ADD_ACTIVITY, GET_READY_TO_ADD_ACTIVITY, REMOVE_ACTIVITY, UPDATE_ACTIVITY} from "../actions/actionTypes"


export const activitiesReducer = (state = [], action) => {
    switch(action.type){
        case ADD_ACTIVITY:
            return 
        case GET_READY_TO_ADD_ACTIVITY:
            return 
        case REMOVE_ACTIVITY:
            return state.filter(activity => activity.id !== action.payload)
        case UPDATE_ACTIVITY:
            const index = state.findIndex(activity => activity.id === action.payload.activityId)
            return 
        default:
            return state
    }
}