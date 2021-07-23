import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { default as PrivateRoute } from './components/PrivateRoute'
import ActivitiesList from ''
import Activity from ''
import ValuesList from ''
import Value from ''
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
