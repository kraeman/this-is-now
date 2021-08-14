// import React, { Component } from 'react';
import React from 'react'
import  { Redirect } from 'react-router-dom'
import {addValue, getReadyToAddValue} from "./index"
// import { loginUser } from "./users";


export function createNewValuePost(name, creator_id, jwt) {
    return (dispatch) => {
      debugger
      dispatch(getReadyToAddValue());
      fetch('http://localhost:3000/values', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {name, creator_id}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
          debugger
          //the single new value and its id
          dispatch(addValue(data))
          // return callBack
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }