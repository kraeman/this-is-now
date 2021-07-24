import {ADD_ACTIVITY, REMOVE_ACTIVITY, UPDATE_ACTIVITY} from "./actionTypes"

export function addActivity(activity){
    return {
        type: ADD_ACTIVITY,
        payload: activity
    }
}

export function removeActivity(activityId){
    return {
        type: REMOVE_ACTIVITY,
        payload: activityId
    }
}

export function updateActivity(activityId, name, description){
    return {
        type: UPDATE_ACTIVITY,
        payload: {activityId, name, description}
    }
}