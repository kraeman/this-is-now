import {ADD_VALUE, GET_READY_TO_DELETE_VALUE, DELETE_VALUE, GET_READY_TO_ADD_VALUE, REMOVE_VALUE, UPDATE_VALUE, GET_READY_TO_STORE_VALUES, STORE_VALUES} from "./actionTypes"

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

export function deleteValue(valueId){
    return {
        type: DELETE_VALUE,
        payload: valueId
    }
}

export function getReadyToDeleteValue(){
    return {
        type: GET_READY_TO_DELETE_VALUE
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

export function getReadyToStoreValues(){
    return {
        type: GET_READY_TO_STORE_VALUES
    }
}

export function storeValues(values){
    return {
        type: STORE_VALUES,
        payload: values
    }
}