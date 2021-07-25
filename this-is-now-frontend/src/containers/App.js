import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import ActivitiesList from '../components/activities/ActivitiesList'
import Activity from '../components/activities/Activity'
import ValuesList from '../components/values/ValuesList'
import Value from '../components/values/Value'
import SignUp from "./SignUp"
import '../App.css'
import Login from "./Login"
import Navbar from "./Navbar"
import Home from '../components/Home'
import {connect} from "react-redux"
import '../App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute items={this.props.activities} component={ActivitiesList} path="/activities" exact />
            <PrivateRoute items={this.props.values} component={ValuesList} path="/values" exact />

            <PrivateRoute items={this.props.values} component={Value} path="/values/:valueId" exact />
            <PrivateRoute items={this.props.activities} component={Activity} path="/activities/:activityId" exact />
            
            <PrivateRoute component={Home} path="/" exact />
          </Switch>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = (currentState) => {
  return {
    isLoggedIn: currentState.isLoggedIn,
    values: currentState.values,
    activities: currentState.activities
  }
}

export default connect(mapStateToProps)(App);
