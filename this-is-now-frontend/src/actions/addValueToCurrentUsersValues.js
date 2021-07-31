// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {addValueToCurrentUser, getReadyToAddValueToCurrentUser} from "./index"
// import { loginUser } from "./users";


export function addValueToCurrentUsersValues(value, CUID, jwt) {
  debugger
    return (dispatch) => {
      dispatch(getReadyToAddValueToCurrentUser());
      fetch(`http://localhost:3000/users/:${parseInt(CUID)}`, {
        method: 'POST',
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
          dispatch(addValueToCurrentUser()(jwt, data.user.data))
          // return callBack
        });

    };
  }