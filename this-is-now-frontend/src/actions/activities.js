import {ADD_ACTIVITY, GET_READY_TO_STORE_ACTIVITIES, GET_READY_TO_STORE_SCORES, STORE_SCORES, STORE_ACTIVITIES, GET_READY_TO_ADD_ACTIVITY, REMOVE_ACTIVITY, UPDATE_ACTIVITY} from "./actionTypes"

export function addActivity(jwt, activity){
    // debugger
    return {
        type: ADD_ACTIVITY,
        payload: {jwt, activity}
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

export function getReadyToAddActivity(){
    return {
        type: GET_READY_TO_ADD_ACTIVITY
    }
}

export function getReadyToStoreActivities(){
    // debugger
    return {
        type: GET_READY_TO_STORE_ACTIVITIES
    }
}

export function storeActivities(activitiesValuesScores){
    // debugger
    return {
        type: STORE_ACTIVITIES,
        payload: activitiesValuesScores
    }
}

export function storeScores(scores){
    // debugger
    return {
        type: STORE_SCORES,
        payload: scores
    }
}

export function getReadyToStoreScores(){
    // debugger
    return {
        type: GET_READY_TO_STORE_SCORES
    }
}