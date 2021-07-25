import {ADD_USER, LOGIN_USER, GET_READY_TO_LOGIN_USER} from "./actionTypes"

export function addUser(user){
    return {
        type: ADD_USER,
        payload: user
    }
}

export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: {user}
    }
}

export function getReadyToLoginUser(){
    return {
        type: GET_READY_TO_LOGIN_USER
    }
}