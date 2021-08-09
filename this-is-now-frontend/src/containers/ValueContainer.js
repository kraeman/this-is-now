import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ValuesList from '../components/values/ValuesList'
import {connect} from "react-redux"
import { addValueToCurrentUser, logout } from '../actions/index';

import fetchAllValues from '../actions/fetchAllValues';

import NewValueForm from '../components/values/NewValueForm'
import {removeValueFromCurrentUsersValues} from "../actions/removeValueFromCurrentUsersValues"
import {addValueToCurrentUsersValues} from '../actions/addValueToCurrentUsersValues'
import '../App.css'




class ValuesContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchAllValues(this.props.jwt)
  // }
  checkIn = (id) => {
    // debugger
    this.props.addValueToCurrentUsersValues(id, this.props.cuid, this.props.jwt)
  }

  checkOut = (id) => {
    this.props.removeValueFromCurrentUsersValues(id, this.props.cuid, this.props.jwt)
  }

  

  render() {
    if (!this.props.jwt) {
      return <Redirect push to="/login"/>
  }
    return (
        <div className='rowC' id='value_container'>
          <button onClick={() => this.props.logout()}>Log Out</button>
          <NewValueForm/>
          <br/>
          <ValuesList checkIn={this.checkIn} checkOut={this.checkOut} JWT={this.props.jwt} cuid={this.props.cuid} callback={this.props.addValueToCurrentUsersValues} values={this.props.values}/>
        </div>
    );
  }
};


function mapDispatchToProps(dispatch){
  return {
      fetchAllValues: (JWT) => dispatch(fetchAllValues(JWT)),
      addValueToCurrentUsersValues: (value, cuid, JWT) => dispatch(addValueToCurrentUsersValues(value, cuid, JWT)),
      logout: () => dispatch(logout()),
      removeValueFromCurrentUsersValues: (id, cuid, jwt) => dispatch(removeValueFromCurrentUsersValues(id, cuid, jwt))
  }
}

function mapState(currentState){
  debugger
  return { 
      jwt: currentState.user.jwt,
      values: currentState.values.values,
      cuid: currentState.user.id
   }
}

export default connect(mapState, mapDispatchToProps)(ValuesContainer);
