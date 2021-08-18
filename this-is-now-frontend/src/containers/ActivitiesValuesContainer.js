import React, { Component } from 'react';
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom'
import fetchActivities from '../actions/fetchActivities'
import { createNewActivityPost } from "../actions/createNewActivity";
import ValuesList from '../components/values/ValuesList'
import {deleteValueFetch} from '../actions/deleteValue'
import NewValueForm from '../components/values/NewValueForm'
import {putUserInStoreAfterPageRefresh} from '../actions/putUserInStoreAfterPageRefresh'
import { logout } from '../actions/index';
import { updateUsersValues } from '../actions/updateUsersValues';
import {deleteActivityFetch} from '../actions/deleteActivity'
import AllActivitiesList from '../components/activities/AllActivitiesList';
import RankedActivitiesList from '../components/activities/RankedActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'


class ActivitiesValuesContainer extends Component {

  state = {
    associatedValues: JSON.parse(sessionStorage.getItem('value_ids'))
  }


  deleteValue = (valueId) => {
    this.props.deleteValueFetch(valueId, sessionStorage.getItem('token'))
  }

  updateUserValues = () => {
    this.props.updateUsersValues(this.state.associatedValues, sessionStorage.getItem('id'), sessionStorage.getItem('token'))
  }
  
  addOrRemoveFromUsersValues = (valueId) => {
    if(!this.state.associatedValues.includes(valueId)){
      this.setState({
        associatedValues: [...this.state.associatedValues, valueId]
      })
    }else {
      this.setState({
        associatedValues: this.state.associatedValues.filter(id => id !== valueId)
      })
    }
  }

  componentDidMount = () => {
    //Only runs if user accidentally refreshes page and clears redux store
    if(!!sessionStorage.getItem('token') && !this.props.current_user.username){
      this.props.putUserInStoreAfterPageRefresh(sessionStorage.getItem("token"), sessionStorage.getItem("username"), JSON.parse(sessionStorage.getItem("value_ids")))
      this.props.fetchActivities(sessionStorage.getItem("token"))
    }
  }


  calculatedScores = () => {
    const rankedActivities = []
    //Weird error with backing up and adding to score
    this.props.scores.forEach(score => {
      if (JSON.parse(sessionStorage.getItem('value_ids')).includes(score.attributes.value_id)){
        if (rankedActivities.find(activity => activity.id === score.attributes.activity_id)){
          rankedActivities.find(activity => activity.id === score.attributes.activity_id).score += score.attributes.score
        }else {
          rankedActivities.push({id: score.attributes.activity_id, score: score.attributes.score})
        }
      }
    })
    return rankedActivities.sort((a, b) => (a.score > b.score) ? -1 : 1)
}

deleteActivity = (activityId) => {
  this.props.deleteActivityFetch(activityId)
}

  render() {
    if (!sessionStorage.getItem('token')) {
      return <Redirect push to="/login"/>
  }
      return (
        <>
        <button onClick={() => this.props.logout()} style={{maxHeight: "30px"}}>Log Out</button>
          <div className='rowC' id='value_container' style={{
                backgroundColor: 'white',
                borderWidth: '5px',
                borderColor:'#aaaaaa', 
                borderStyle:'solid',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute', left: '70%', top: '12%',
                transform: 'translate(-50%, -50%)'
              }}>
            
            <NewActivityForm />
            <br/>
            <RankedActivitiesList activities={this.props.activities} rankedActivities={this.calculatedScores()}/>
            <br/>
            <AllActivitiesList deleteActivityFetch={this.deleteActivity} activities={this.props.activities}/>
          </div>
          <br></br>
<div className='rowC' id='value_container' style={{
  backgroundColor: 'white',
  borderWidth: '5px',
  borderColor:'#aaaaaa', 
  borderStyle:'solid',
  position: 'absolute', left: '0%'
}}>
  <NewValueForm/>
  <br/><br/>
  <ValuesList addOrRemoveFromUsersValues={this.addOrRemoveFromUsersValues} updateUserValues={this.updateUserValues} usersValues={this.state.associatedValues} deleteValue={this.deleteValue} values={this.props.values}/>
</div>
</>
      );
  }
}

function mapStateToProps(currentState){
  return {
    values: currentState.values.values,
    activities: currentState.activities.activities,
    scores: currentState.scores.scores,
    current_user: currentState.user
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchActivities: (token) => dispatch(fetchActivities(token)),
      logout: () => dispatch(logout()),
      deleteValueFetch: (valueId, token) => dispatch (deleteValueFetch(valueId, token)),
      putUserInStoreAfterPageRefresh: (token, username, value_ids) => dispatch(putUserInStoreAfterPageRefresh(token, username, value_ids)),
      updateUsersValues: (values, userId, token) => dispatch(updateUsersValues(values, userId, token)),
      deleteActivityFetch: (activityId) => dispatch(deleteActivityFetch(activityId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesValuesContainer);
