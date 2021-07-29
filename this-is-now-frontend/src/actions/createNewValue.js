// import React, { Component } from 'react';
import React from 'react'
import  { Redirect } from 'react-router-dom'
import {addValue, getReadyToAddValue} from "./index"
// import { loginUser } from "./users";


export function createNewValuePost(name, jwt) {
    return (dispatch) => {
      debugger
      dispatch(getReadyToAddValue());
      fetch('http://localhost:3000/values/create', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {name}})
      })
        .then(response => response.json())
        .then(data => {
          debugger
          dispatch(addValue(data.data.attributes.name, data.data.id, jwt))
          // return callBack
        });

    };
  }