import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from "react-router";
import { Redirect } from 'react-router-dom'
import ActivitiesValuesContainer from '../containers/ActivitiesValuesContainer'
import SignUp from "./SignUp"
import {compose} from 'redux'
import {clearError} from '../actions/users'
import PageNotFound from '../components/PageNotFound'
import Login from "./Login"
import ErrorPage from '../components/ErrorPage'
import Activity from '../components/activities/Activity'
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
            
            <Route exact path={`/users/${sessionStorage.getItem('username')}`} >
                <ActivitiesValuesContainer />
            </Route>
            <Route  render={(props) => (
              <Activity requesting={this.props.requestingActivities} props={props} activities={this.props.activities}/>
            )
            } path="/activities/:activityId" exact />
            <Route render={(props) => (
              <PageNotFound props={props}/>
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
};

const mapStateToProps = (currentState) => {
  return {
    activities: currentState.activities.activities,
    error: currentState.user.error,
    values: currentState.values.values,
    scores: currentState.scores.scores,
    requestingActivities: currentState.activities.requesting
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
