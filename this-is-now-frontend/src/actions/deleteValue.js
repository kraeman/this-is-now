// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {getReadyToDeleteValue, getReadyToDeleteValueFromUser, getReadyToDeleteValueFromScores, deleteValue, deleteValueFromScores, deleteValueFromUser} from "./index"
// import { loginUser } from "./users";


export function deleteValueFetch(value, jwt) {
  debugger
    return (dispatch) => {
      dispatch(getReadyToDeleteValue());
      dispatch(getReadyToDeleteValueFromScores())
      dispatch(getReadyToDeleteValueFromUser())
      fetch(`http://localhost:3000/values/${value}`, {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          debugger
          // get back nothing but if succesful add value to user
          dispatch(deleteValue(data))
          dispatch(deleteValueFromScores(data))
          dispatch(deleteValueFromUser(data))
          // return callBack
        });

    };
  }