import {ADD_ACTIVITY, STORE_ACTIVITIES, GET_READY_TO_STORE_ACTIVITIES, GET_READY_TO_ADD_ACTIVITY, REMOVE_ACTIVITY, UPDATE_ACTIVITY} from "../actions/actionTypes"


export const activities = (state = {activities: [], requesting: false}, action) => {
    switch(action.type){
        case ADD_ACTIVITY:
            debugger
            return {
                activities: [...state.activities, {attributes: {activity_data: action.payload.activity, creator_token: action.payload.jwt}}],
                requesting: false
            }
        case GET_READY_TO_ADD_ACTIVITY:
            return {
                ...state,
                requesting: true
            }   
            case GET_READY_TO_STORE_ACTIVITIES:
            return {
                ...state,
                requesting: true
            } 
            case STORE_ACTIVITIES:
                return {
                    activities: action.payload,
                    requesting: false
                } 
        case REMOVE_ACTIVITY:
            return state.filter(activity => activity.id !== action.payload)
        case UPDATE_ACTIVITY:
            const index = state.findIndex(activity => activity.id === action.payload.activityId)
            return 
        default:
            return state
    }
}