// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {grtscu, scu} from "./index"
// import { loginUser } from "./users";


export function fcu(jwt, CUID) {
  // 
    return (dispatch) => {
      dispatch(grtscu());
      fetch(`http://localhost:3000/users/${parseInt(CUID)}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`
        }
      })
        .then(response => response.json())
        .then(data => {
          // 
          dispatch(scu(data.user.data))
          // return callBack
        });

    };
  }