// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {storeToken2, getReadyToStoreToken, getReadyToLoginUser} from "./index"
// import { loginUser } from "./users";


export function createUser(username, password, checkPassword) {
    return (dispatch) => {
      debugger
      dispatch(getReadyToStoreToken());
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          accept: "application/json",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({user: {username, password, checkPassword}})
      })
        .then(response => response.json())
        .then(data => {
          debugger
          //jwt, username, id
          sessionStorage.setItem('token', data.jwt)

          return dispatch(storeToken2(data))
          // return callBack
        });

    };
  }


 

