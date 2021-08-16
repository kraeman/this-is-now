import {DELETE_VALUE_FROM_USER, GET_READY_TO_DELETE_VALUE_FROM_USER, GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER, REMOVE_VALUE_FROM_CURRENT_USER, SCU, STORE_TOKEN2, GRTSCU, ADD_USER, LOGIN_USER, GET_READY_TO_LOGIN_USER, GET_READY_TO_ADD_USER, LOGOUT, STORE_TOKEN, GET_READY_TO_STORE_TOKEN, GET_READY_TO_ADD_VALUE_TO_CURRENT_USER, ADD_VALUE_TO_CURRENT_USER} from "./actionTypes"

export function addUser(user){
    return {
        type: ADD_USER,
        payload: user
    }
}

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export function getReadyToLoginUser(){
    return {
        type: GET_READY_TO_LOGIN_USER
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

export function storeToken2(data){
    return {
        type: STORE_TOKEN2,
        payload: data
    }
}

export function addValueToCurrentUser(value){
    return {
        type: ADD_VALUE_TO_CURRENT_USER,
        payload: value
    }
}

export function getReadyToAddValueToCurrentUser(){
    return {
        type: GET_READY_TO_ADD_VALUE_TO_CURRENT_USER
    }
}

export function grtscu(){
    return {
        type: GRTSCU
    }
}

export function scu(userData){
    return {
        type: SCU,
        payload: userData
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

export function removeValueFromCurrentUser(id){
    return{
        type:REMOVE_VALUE_FROM_CURRENT_USER,
        payload: id
    }
}

export function getReadyToRemoveValueFromCurrentUsersValues(){
    return {
        type: GET_READY_TO_REMOVE_VALUE_FROM_CURRENT_USER
    }
}

export function getReadyToDeleteValueFromUser(){
    return {
        type: GET_READY_TO_DELETE_VALUE_FROM_USER
    }
}

export function deleteValueFromUser(vid){
    return {
        type: DELETE_VALUE_FROM_USER,
        payload: vid
    }
}


export function clearError(){
    return {
        type: "CLEAR_ERROR"
    }
}

export function setCurrentUsersValues(data){
    return {
        type: "SET_CUV",
        payload: data
    }
}