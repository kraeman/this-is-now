import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ValuesList from '../components/values/ValuesList'
import {connect} from "react-redux"

import fetchAllValues from '../actions/fetchAllValues';

import NewValueForm from '../components/values/NewValueForm'
import {addValueToCurrentUsersValues} from '../actions/addValueToCurrentUsersValues'
import '../App.css'




class ValuesContainer extends Component {

  componentDidMount() {
    this.props.fetchAllValues(this.props.jwt)
  }

  

  render() {
    return (
        <div className='rowC'>
          <NewValueForm/>
          <br/>
          <ValuesList JWT={this.props.jwt} cuid={this.props.cuid} callback={this.props.addValueToCurrentUsersValues} values={this.props.values}/>
        </div>
    );
  }
};


function mapDispatchToProps(dispatch){
  return {
      fetchAllValues: (JWT) => dispatch(fetchAllValues(JWT)),
      addValueToCurrentUsersValues: (value, cuid, JWT) => dispatch(addValueToCurrentUsersValues(value, cuid, JWT))
  }
}

function mapState(currentState){
  return { 
      jwt: currentState.users.jwt,
      values: currentState.values.values,
      cuid: currentState.users.current_user_data.username.id
   }
}

export default connect(mapState, mapDispatchToProps)(ValuesContainer);
