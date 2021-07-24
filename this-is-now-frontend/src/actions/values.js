import {ADD_VALUE, REMOVE_VALUE, UPDATE_VALUE} from "./actionTypes"

export function addValue(value){
    return {
        type: ADD_VALUE,
        payload: value
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