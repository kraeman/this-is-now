import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ValuesList from '../components/values/ValuesList'
import {connect} from "react-redux"
import { addValueToCurrentUser, logout } from '../actions/index';
import {deleteValueFetch} from '../actions/deleteValue'

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
    debugger
    this.props.removeValueFromCurrentUsersValues(id, this.props.cuid, this.props.jwt)
  }

  callBack2 = (vId) => {
    this.props.deleteValueFetch(vId, this.props.jwt)
  }

  

  render() {
    if (!this.props.jwt) {
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
          <ValuesList cuv={this.props.cuv} checkIn={this.checkIn} checkOut={this.checkOut} JWT={this.props.jwt} cuid={this.props.cuid} callback={this.props.addValueToCurrentUsersValues} callBack2={this.callBack2} values={this.props.values}/>
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
  debugger
  return { 
      jwt: currentState.user.jwt,
      values: currentState.values.values,
      cuid: currentState.user.id,
      cuv: currentState.user.value_ids
   }
}

export default connect(mapState, mapDispatchToProps)(ValuesContainer);
