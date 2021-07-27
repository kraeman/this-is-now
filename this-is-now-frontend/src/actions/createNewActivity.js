// import React, { Component } from 'react';
import React from 'react'
import  { Redirect } from 'react-router-dom'
import {storeToken, getReadyToStoreToken, getReadyToLoginUser} from "./index"
import { loginUser } from "./users";


export function createNewActivity(name, description, valuesAndScoresObject, jwt) {
    return (dispatch) => {
      dispatch(getReadyToCreateNewActivity());
      fetch('http://localhost:3000/activities/new', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({activity: {name, description, valuesAndScoresObject}})
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(storeToken(data.jwt, data.user))
          // return callBack
        });

    };
  }


 

