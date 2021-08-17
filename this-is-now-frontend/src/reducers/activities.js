import {ADD_ACTIVITY, GET_READY_TO_DELETE_ACTIVITY, DELETE_ACTIVITY, STORE_ACTIVITIES, GET_READY_TO_STORE_ACTIVITIES, GET_READY_TO_ADD_ACTIVITY} from "../actions/actionTypes"

export const activities = (state = {activities: [], requesting: false}, action) => {
    switch(action.type){
        case ADD_ACTIVITY:
            
            return {
                activities: [...state.activities, {id: action.payload.activity.activity.data.id, type: action.payload.activity.activity.data.type, attributes: {name: action.payload.activity.activity.data.attributes.name, description: action.payload.activity.activity.data.attributes.description, creator_id: action.payload.activity.activity.data.attributes.creator_id}}],
                requesting: false
            }
        case GET_READY_TO_ADD_ACTIVITY:
            return {
                ...state,
                requesting: true
            } 
            
        case GET_READY_TO_DELETE_ACTIVITY:
                return {
                    ...state,
                    requesting: true
                }
                case DELETE_ACTIVITY:
                    
                    return {
                        ...state,
                        activities: state.activities.filter(activity => parseInt(activity.id) !== action.payload),
                        requesting: false
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
        default:
            return state
    }
}