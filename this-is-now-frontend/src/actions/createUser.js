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
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({user: {username, password, checkPassword}})
      })
        .then(response => response.json())
        .then(data => {
          debugger
          dispatch(storeToken(data.jwt, data.user))
          return <Redirect to='/activities'  />
          // dispatch(getReadyToLoginUser());
          // fetch(`http://localhost:3000/users/profile`, {
          // method: 'GET',
          //   headers: {
          //     Authorization: `Bearer ${data.jwt}`
          //   }
          // })
          // .then(response => response.json())
          // .then(data => {
          //   dispatch(loginUser(data))
          // })
        });

    };
  }


 

