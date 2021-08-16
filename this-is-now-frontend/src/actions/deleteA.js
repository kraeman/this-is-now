// import React, { Component } from 'react';
// import React from 'react'
// import  { Redirect } from 'react-router-dom'
import {getReadyToDeleteActivity, deleteActivity} from "./activities"
// import { loginUser } from "./users";


export function deleteA(aid) {
  
    return (dispatch) => {
      dispatch(getReadyToDeleteActivity());
      
      fetch(`http://localhost:3000/activities/${aid}`, {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{

          dispatch(deleteActivity(data))
          // return callBack
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }