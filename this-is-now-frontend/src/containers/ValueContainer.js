import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ValuesList from '../components/values/ValuesList'

import NewValueForm from '../components/values/NewValueForm'
import '../App.css'




export default class ValuesContainer extends Component {

  

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