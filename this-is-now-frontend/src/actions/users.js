import {ADD_USER, LOGIN_USER, GET_READY_TO_LOGIN_USER, GET_READY_TO_ADD_USER, STORE_TOKEN, GET_READY_TO_STORE_TOKEN} from "./actionTypes"

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


export function storeToken(jwt, userData){
    return {
        type: STORE_TOKEN,
        payload: {jwt, userData}
    }
}