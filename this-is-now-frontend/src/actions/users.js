import {SCU, GRTSCU, ADD_USER, LOGIN_USER, GET_READY_TO_LOGIN_USER, GET_READY_TO_ADD_USER, STORE_TOKEN, GET_READY_TO_STORE_TOKEN, GET_READY_TO_ADD_VALUE_TO_CURRENT_USER, ADD_VALUE_TO_CURRENT_USER} from "./actionTypes"

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


export function storeToken(jwt, userData, relationshipData){
    return {
        type: STORE_TOKEN,
        payload: {jwt, userData, relationshipData}
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