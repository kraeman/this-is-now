import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ValuesList from '../components/values/ValuesList'
import {connect} from "react-redux"
import { addValueToCurrentUser, logout } from '../actions/index';
import {deleteValueFetch} from '../actions/deleteValue'
import Navbar from "./Navbar"
import fetchAllValues from '../actions/fetchAllValues';

import NewValueForm from '../components/values/NewValueForm'
import {removeValueFromCurrentUsersValues} from "../actions/removeValueFromCurrentUsersValues"
import {addValueToCurrentUsersValues} from '../actions/addValueToCurrentUsersValues'
import '../App.css'




class ValuesContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchAllValues(localStorage.getItem('token'))
  // }
  checkIn = (id) => {
    // 
    this.props.addValueToCurrentUsersValues(id, sessionStorage.getItem("id"), sessionStorage.getItem('token'))
  }

  checkOut = (id) => {
    
    this.props.removeValueFromCurrentUsersValues(id, sessionStorage.getItem("id"), sessionStorage.getItem('token'))
  }

  callBack2 = (vId) => {
    this.props.deleteValueFetch(vId, sessionStorage.getItem('token'))
  }

  

  render() {
    if (!sessionStorage.getItem('token')) {
      return <Redirect push to="/login"/>
  }
    return (
        <div className='rowC' id='value_container' style={{
          backgroundColor: 'white',
          // maxWidth: 250,
          borderWidth: '5px',
          borderColor:'#aaaaaa', 
          borderStyle:'solid',
          
          
        }}>
          
          <button onClick={() => this.props.logout()} style={{maxHeight: "30px"}}>Log Out</button>
          <NewValueForm/>
          <br/>
          <ValuesList cuv={JSON.parse(sessionStorage.getItem("value_ids"))} checkIn={this.checkIn} checkOut={this.checkOut} JWT={sessionStorage.getItem('token')} cuid={sessionStorage.getItem("id")} callback={this.props.addValueToCurrentUsersValues} callBack2={this.callBack2} values={this.props.values}/>
        </div>
    );
  }
};


function mapDispatchToProps(dispatch){
  return {
      fetchAllValues: (JWT) => dispatch(fetchAllValues(JWT)),
      addValueToCurrentUsersValues: (value, cuid, JWT) => dispatch(addValueToCurrentUsersValues(value, cuid, JWT)),
      logout: () => dispatch(logout()),
      deleteValueFetch: (vid, jwt) => dispatch (deleteValueFetch(vid, jwt)),
      removeValueFromCurrentUsersValues: (id, cuid, jwt) => dispatch(removeValueFromCurrentUsersValues(id, cuid, jwt))
  }
}

function mapState(currentState){
  
  return { 
      jwt: currentState.user.jwt,
      values: currentState.values.values,
      cuid: currentState.user.id,
      cuv: currentState.user.value_ids
   }
}

export default connect(mapState, mapDispatchToProps)(ValuesContainer);
