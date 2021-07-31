import React, { Component } from 'react';
import {connect} from "react-redux"
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




class ActivitiesContainer extends Component {

  calculateRankedActivities = () => {
    // debugger
    // return this.props.current_user
  }

  render() {
    return (
        <div className='rowC'>
          <NewActivityForm/>
          <br/>
          <ActivitiesList rankedActivities={this.calculateRankedActivities()}/>
        </div>
    );
  }
};

const mapStateToProps = (currentState) => {
  return {
    values: currentState.values,
    activities: currentState.activities,
    current_user: currentState.users
  }
}

export default connect(mapStateToProps)(ActivitiesContainer);
