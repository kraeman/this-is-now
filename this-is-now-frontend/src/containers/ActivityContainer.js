import React, { Component } from 'react';
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom'
import fetchActivities from '../actions/fetchActivities'
import { createNewActivityPost } from "../actions/createNewActivity";
import ValuesList from '../components/values/ValuesList'
import {deleteValueFetch} from '../actions/deleteValue'
import NewValueForm from '../components/values/NewValueForm'
import {removeValueFromCurrentUsersValues} from "../actions/removeValueFromCurrentUsersValues"
import {addValueToCurrentUsersValues} from '../actions/addValueToCurrentUsersValues'
import {putUserInStoreAfterPageRefresh} from '../actions/putUserInStoreAfterPageRefresh'
import { logout } from '../actions/index';
import { updateUsersValues } from '../actions/updateUsersValues';
import {deleteActivityFetch} from '../actions/deleteActivity'
import NRAL from '../components/activities/NRAL';
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'


class ActivitiesContainer extends Component {

  state = {
    associatedValues: JSON.parse(sessionStorage.getItem('value_ids'))
  }

  callBack = (name, description, associatedValues) => {
    this.props.createNewActivityPost(name, description, associatedValues, sessionStorage.getItem('token'))
  }

  checkIn = (id) => {
    this.props.addValueToCurrentUsersValues(id, sessionStorage.getItem('id'), sessionStorage.getItem('token'))
  }

  checkOut = (id) => {
    this.props.removeValueFromCurrentUsersValues(id, sessionStorage.getItem('id'), sessionStorage.getItem('token'))
  }

  callBack2 = (vId) => {
    this.props.deleteValueFetch(vId, sessionStorage.getItem('token'))
  }

  callBack3 = () => {
    this.props.updateUsersValues(this.state.associatedValues, sessionStorage.getItem('id'), sessionStorage.getItem('token'))
  }
  
  callBack4 = (e, vId) => {
    if(!this.state.associatedValues.includes(vId)){
      this.setState({
        associatedValues: [...this.state.associatedValues, vId]
      })
    }else {
      this.setState({
        associatedValues: this.state.associatedValues.filter(id => id !== vId)
      })
    }
  }

  componentDidMount = () => {
    if(!!sessionStorage.getItem('token') && !this.props.current_user.username){
      this.props.putUserInStoreAfterPageRefresh(sessionStorage.getItem("token"), sessionStorage.getItem("username"), JSON.parse(sessionStorage.getItem("value_ids")))
      this.props.fetchActivities(sessionStorage.getItem("token"))
    }
  }


  calculateScores = () => {
    const rankedActivities = []
    this.props.scores.forEach(score => {
      if (JSON.parse(sessionStorage.getItem('value_ids')).includes(score.attributes.value_id)){
        if (rankedActivities.find(activity => activity.id == score.attributes.activity_id)){
          rankedActivities.find(activity => activity.id == score.attributes.activity_id).score += score.attributes.score
        }else {
          rankedActivities.push({id: score.attributes.activity_id, score: score.attributes.score})
        }
      }
    })
    return rankedActivities.sort((a, b) => (a.score > b.score) ? -1 : 1)
}

CB = (aid) => {
  this.props.deleteActivityFetch(aid)
}

  render() {
    
    if (!sessionStorage.getItem('token')) {
      return <Redirect push to="/login"/>
  }
      return (
        <>
          <div className='rowC' style={{
            backgroundColor: 'white',
            borderWidth: '5px',
            borderColor:'#aaaaaa', 
            borderStyle:'solid',
          }}>
            <button onClick={() => this.props.logout()} style={{maxHeight: "30px"}}>Log Out</button>
            <NewActivityForm callBack={this.callBack} />
            <br/>
            <ActivitiesList activities={this.props.activities} rankedActivities={this.calculateScores()}/>
            <br/>
            <NRAL deleteActivityFetch={this.CB} activities={this.props.activities}/>
          </div>
          <br></br>
<div className='rowC' id='value_container' style={{
  backgroundColor: 'white',
  borderWidth: '5px',
  borderColor:'#aaaaaa', 
  borderStyle:'solid',
}}>
  <NewValueForm/>
  <br/><br/>
  <ValuesList callBack4={this.callBack4} callBack3={this.callBack3} cuv={this.state.associatedValues} checkIn={this.checkIn} checkOut={this.checkOut} cuid={sessionStorage.getItem("id")} callback={this.props.addValueToCurrentUsersValues} callBack2={this.callBack2} values={this.props.values}/>
</div>
</>
      );
  }
}

function mapStateToProps(currentState){
  return {
    values: currentState.values.values,
    activities: currentState.activities.activities,
    token: currentState.user.token,
    scores: currentState.scores.scores,
    current_user: currentState.user,
    cuid: currentState.user.id,
    cuv: currentState.user.value_ids,
    requestingValues: currentState.values.requesting,
    requestingActivities: currentState.activities.requesting,
    requestingScores: currentState.scores.requesting
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchActivities: (token) => dispatch(fetchActivities(token)),
      createNewActivityPost: (n, d, av, token) => dispatch(createNewActivityPost(n, d, av, token)),
      logout: () => dispatch(logout()),
      addValueToCurrentUsersValues: (value, cuid, token) => dispatch(addValueToCurrentUsersValues(value, cuid, token)),
      deleteValueFetch: (vid, token) => dispatch (deleteValueFetch(vid, token)),
      removeValueFromCurrentUsersValues: (id, cuid, token) => dispatch(removeValueFromCurrentUsersValues(id, cuid, token)),
      putUserInStoreAfterPageRefresh: (token, username, value_ids) => dispatch(putUserInStoreAfterPageRefresh(token, username, value_ids)),
      updateUsersValues: (values, uid, token) => dispatch(updateUsersValues(values, uid, token)),
      deleteActivityFetch: (aid) => dispatch(deleteActivityFetch(aid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
