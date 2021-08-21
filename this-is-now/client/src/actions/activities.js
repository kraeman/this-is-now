import {ADD_ACTIVITY, DELETE_ACTIVITY, GET_READY_TO_STORE_ACTIVITIES, GET_READY_TO_STORE_SCORES, STORE_SCORES, STORE_ACTIVITIES, GET_READY_TO_ADD_ACTIVITY, GET_READY_TO_DELETE_ACTIVITY} from "./actionTypes"

export function addActivity(activity){
    return {
        type: ADD_ACTIVITY,
        payload: {activity}
    }
}

export function getReadyToAddActivity(){
    return {
        type: GET_READY_TO_ADD_ACTIVITY
    }
}

export function getReadyToStoreActivities(){
    return {
        type: GET_READY_TO_STORE_ACTIVITIES
    }
}

export function storeActivities(activitiesValuesScores){
    return {
        type: STORE_ACTIVITIES,
        payload: activitiesValuesScores
    }
}

export function storeScores(scores){
    return {
        type: STORE_SCORES,
        payload: scores
    }
}

export function getReadyToStoreScores(){
    return {
        type: GET_READY_TO_STORE_SCORES
    }
}
export function getReadyToDeleteActivity(){
    return {
        type: GET_READY_TO_DELETE_ACTIVITY
    }
}
export function deleteActivity(data){
    return {
        type: DELETE_ACTIVITY,
        payload: data
    }
}