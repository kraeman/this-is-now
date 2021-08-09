// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {removeValueFromCurrentUser, getReadyToRemoveValueFromCurrentUsersValues} from "./index"
// import { loginUser } from "./users";


export function removeValueFromCurrentUsersValues(value, CUID, jwt) {
  debugger
    return (dispatch) => {
      dispatch(getReadyToRemoveValueFromCurrentUsersValues());
      fetch(`http://localhost:3000/users/${CUID}`, {
        method: 'PATCH',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {value}})
      })
        .then(response => response.json())
        .then(data => {
          debugger
          // get back nothing but if succesful add value to user
          dispatch(removeValueFromCurrentUser(data))
          // return callBack
        });

    };
  }