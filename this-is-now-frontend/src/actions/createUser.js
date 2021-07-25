// import React, { Component } from 'react';
import {storeToken, getReadyToStoreToken, getReadyToLoginUser} from "./index"
import { loginUser } from "./users";


export function createUser(username, password, checkPassword) {
    return (dispatch) => {
      dispatch(getReadyToStoreToken());
      fetch('http://localhost:3000/signup', {
        method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username, password, checkPassword})
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(storeToken(data.userId, data.jwt))
          dispatch(getReadyToLoginUser());
          fetch(`http://localhost:3000/users/${data.userId}`, {
          method: 'GET',
            headers: {
              Authorization: `Bearer ${data.jwt}`
            }
          })
          .then(response => response.json())
          .then(data => {
            dispatch(loginUser(data))
          })
        });
    };
  }


 

