import {DELETE_VALUE_FROM_SCORES, GET_READY_TO_DELETE_VALUE_FROM_SCORES } from "./actionTypes"


export function deleteValueFromScores(vid){
    return {
        type: DELETE_VALUE_FROM_SCORES,
        payload: vid
    }
}

export function getReadyToDeleteValueFromScores(){
    return {
        type: GET_READY_TO_DELETE_VALUE_FROM_SCORES
    }
}