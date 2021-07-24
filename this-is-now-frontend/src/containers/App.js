import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import ActivitiesList from '../components/activities/ActivitiesList'
import Activity from '../components/activities/Activity'
import ValuesList from '../components/values/ValuesList'
import Value from '../components/values/Value'
import Home from '../components/Home'
import Navbar from "./Navbar"
import {connect} from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route/>
            <PrivateRoute exact path="/values" render={routeProps => <ValuesList values={this.props.values} {...routeProps}/>}/>
            <PrivateRoute exact path="/activities" render={routeProps => <ActivitiesList activities={this.props.activities} {...routeProps}/>}/>
            <PrivateRoute values={this.props.values} component={ValuesList} path="/values" exact />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
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
