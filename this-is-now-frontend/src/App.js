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
            <Route exact path="/" component={Home} /> 
            <Route exact path="/todos" render={routeProps => <TodosList todos={this.props.todos} {...routeProps}/>}/>  
            <Route path="/todos/:todoId" render={routeProps => {
              const todo = this.props.todos.find(todo => todo.id === parseInt(routeProps.match.params.todoId))
              return <TodoItem {...routeProps} {...todo} />
            }}/>
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
