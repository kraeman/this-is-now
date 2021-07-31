import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ValuesList from '../components/values/ValuesList'
import {connect} from "react-redux"

import fetchAllValues from '../actions/fetchAllValues';

import NewValueForm from '../components/values/NewValueForm'
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
          <ValuesList/>
        </div>
    );
  }
};


function mapDispatchToProps(dispatch){
  return {
      fetchAllValues: (JWT) => dispatch(fetchAllValues(JWT))
  }
}

function mapState(currentState){
  return { 
      jwt: currentState.users.jwt,
      values: currentState.values.values
   }
}

export default connect(mapState, mapDispatchToProps)(ValuesContainer);
