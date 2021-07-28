// import React, { Component } from 'react';
import React from 'react'
import  { Redirect } from 'react-router-dom'
import {storeToken, getReadyToStoreToken, getReadyToLoginUser} from "./index"
import { loginUser } from "./users";


export function createUser(username, password, checkPassword) {
    return (dispatch) => {
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
          // debugger
          return dispatch(storeToken(data.jwt, data.user))
          // return callBack
        });

    };
  }


 

