import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import ActivitiesList from '../components/activities/ActivitiesList'
import Activity from '../components/activities/Activity'
import ValuesList from '../components/values/ValuesList'
import Value from '../components/values/Value'
import Navbar from "./Navbar"
import {connect} from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/values" render={<ValuesList values={this.props.values}/>}/>
            <Route exact path="/activities" render={<ActivitiesList activities={this.props.activities}/>}/>
            <PrivateRoute/>
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
