import {CLEAR_ERROR, UPDATE_USERS_VALUES, GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER, ERROR, REMOVE_VALUE_FROM_CURRENT_USER, ADD_USER, GET_READY_TO_ADD_USER, LOGOUT, STORE_TOKEN, GET_READY_TO_STORE_TOKEN, GET_READY_TO_UPDATE_CURRENT_USERS_VALUES, ADD_VALUE_TO_CURRENT_USER} from "./actionTypes"

export function addUser(user){
    return {
        type: ADD_USER,
        payload: user
    }
}

export function getReadyToAddUser(){
    return {
        type: GET_READY_TO_ADD_USER
    }
}


export function getReadyToStoreToken(){
    return {
        type: GET_READY_TO_STORE_TOKEN
    }
}


export function storeToken(data){
    return {
        type: STORE_TOKEN,
        payload: data
    }
}


export function addValueToCurrentUser(value){
    return {
        type: ADD_VALUE_TO_CURRENT_USER,
        payload: value
    }
}

export function getReadyToUpdateCurrentUsersValues(){
    return {
        type: GET_READY_TO_UPDATE_CURRENT_USERS_VALUES
    }
}


export function logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('value_ids');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('id');
    return{
        type: LOGOUT
    }
}

export function removeValueFromCurrentUser(valueId){
    return{
        type:REMOVE_VALUE_FROM_CURRENT_USER,
        payload: valueId
    }
}

export function getReadyToRemoveValueFromCurrentUsersValues(){
    return {
        type: GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER
    }
}

export function error(err){
    return {
        type: ERROR,
        payload: err
    }
}

export function clearError(){
    return {
        type: CLEAR_ERROR
    }
}

export function updateCurrentUsersValues(data){
    return {
        type: UPDATE_USERS_VALUES,
        payload: data
    }
}