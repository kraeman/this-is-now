// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {setCurrentUsersValues, getReadyToAddValueToCurrentUser} from "./index"
// import { loginUser } from "./users";


export function messWithUsersValues(value, CUID, jwt) {
  debugger
    return (dispatch) => {
      dispatch(getReadyToAddValueToCurrentUser());
      fetch(`http://localhost:3000/users/${parseInt(CUID)}`, {
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
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
              debugger
          // get back nothing but if succesful add value to user
        //   const array = JSON.parse(sessionStorage.getItem('value_ids'))
        //   debugger
        //   if (array){
            
            sessionStorage.setItem('value_ids', JSON.stringify(data))
            debugger
            dispatch(setCurrentUsersValues(data))
        //   }
        }
          // return callBack
        }).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }