import React, { Component } from 'react';
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom'
import fetchAllActivities from '../actions/fetchAllActivities'
import { createNewActivityPost } from "../actions/createNewActivity";
import ValuesList from '../components/values/ValuesList'
import {deleteValueFetch} from '../actions/deleteValue'
import fetchAllValues from '../actions/fetchAllValues';
import NewValueForm from '../components/values/NewValueForm'
import {removeValueFromCurrentUsersValues} from "../actions/removeValueFromCurrentUsersValues"
import {addValueToCurrentUsersValues} from '../actions/addValueToCurrentUsersValues'
import {putUserInStore} from '../actions/putUserInStore'
import { logout } from '../actions/index';
import { messWithUsersValues } from '../actions/messWithUsersValues';
import {deleteA} from '../actions/deleteA'
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
    this.props.messWithUsersValues(this.state.associatedValues, sessionStorage.getItem('id'), sessionStorage.getItem('token'))
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
      this.props.putUserInStore(sessionStorage.getItem("token"), sessionStorage.getItem("username"), JSON.parse(sessionStorage.getItem("value_ids")))
      this.props.fetchAllActivities(sessionStorage.getItem("token"))
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
  this.props.deleteA(aid)
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
            <NRAL deleteA={this.CB} activities={this.props.activities}/>
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
  <ValuesList callBack4={this.callBack4} callBack3={this.callBack3} cuv={this.state.associatedValues} checkIn={this.checkIn} checkOut={this.checkOut} JWT={sessionStorage.getItem('token')} cuid={sessionStorage.getItem("id")} callback={this.props.addValueToCurrentUsersValues} callBack2={this.callBack2} values={this.props.values}/>
</div>
</>
      );
  }
}

function mapStateToProps(currentState){
  return {
    values: currentState.values.values,
    activities: currentState.activities.activities,
    jwt: currentState.user.jwt,
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
      fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt)),
      createNewActivityPost: (n, d, av, jwt) => dispatch(createNewActivityPost(n, d, av, jwt)),
      logout: () => dispatch(logout()),
      fetchAllValues: (JWT) => dispatch(fetchAllValues(JWT)),
      addValueToCurrentUsersValues: (value, cuid, JWT) => dispatch(addValueToCurrentUsersValues(value, cuid, JWT)),
      deleteValueFetch: (vid, jwt) => dispatch (deleteValueFetch(vid, jwt)),
      removeValueFromCurrentUsersValues: (id, cuid, jwt) => dispatch(removeValueFromCurrentUsersValues(id, cuid, jwt)),
      putUserInStore: (jwt, username, value_ids) => dispatch(putUserInStore(jwt, username, value_ids)),
      messWithUsersValues: (values, uid, jwt) => dispatch(messWithUsersValues(values, uid, jwt)),
      deleteA: (aid) => dispatch(deleteA(aid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
