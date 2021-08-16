import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom'
import ActivityContainer from '../containers/ActivityContainer'
import SignUp from "./SignUp"
import {compose} from 'redux'
import {clearError} from '../actions/users'
import Login from "./Login"
import ErrorPage from '../components/ErrorPage'
import ActivityShow from '../components/activities/ActivityShow'
import ActivityEdit from '../components/activities/ActivityEdit'
import {connect} from "react-redux"
import '../App.css'


class App extends Component {

  render() {
    
    if (!!this.props.error) {
      return <ErrorPage clearError={this.props.clearError} />
    }
    return (
      <div className="App">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/signup" />
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            
            <Route exact path="/activities" >
                <ActivityContainer items={this.props.activities}/>
            </Route>
            <Route  render={(props) => (
              <ActivityShow props={props} activity={this.props.activities}/>
            )
            } path="/activities/:activityId" exact />
            <Route  render={(props) => (
              <ActivityEdit props={props} activity={this.props.activities}/>
            )
            } path="/activities/:activityId/edit" exact />
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
    activities: currentState.activities.activities,
    error: currentState.user.error
  }
}


function mapDispatch(dispatch){
  return { 
    clearError: () => dispatch(clearError())
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatch)
)(App)
