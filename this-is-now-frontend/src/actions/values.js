import {ADD_VALUE, GET_READY_TO_ADD_VALUE, REMOVE_VALUE, UPDATE_VALUE} from "./actionTypes"

export function addValue(value, jwt){
    debugger
    return {
        type: ADD_VALUE,
        payload: {value, jwt}
    }
}

export function removeValue(valueId){
    return {
        type: REMOVE_VALUE,
        payload: valueId
    }
}

export function updateValue(valueId, name){
    return {
        type: UPDATE_VALUE,
        payload: {valueId, name}
    }
}

export function getReadyToAddValue(){
    return {
        type: GET_READY_TO_ADD_VALUE
    }
}