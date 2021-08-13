import React, { Component } from 'react';
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom'
import fetchScores from '../actions/fetchScores';
import fetchAllActivities from '../actions/fetchAllActivities'
import { createNewActivityPost } from "../actions/createNewActivity";
import ValuesList from '../components/values/ValuesList'
import {deleteValueFetch} from '../actions/deleteValue'
import fetchAllValues from '../actions/fetchAllValues';
import NewValueForm from '../components/values/NewValueForm'
import {removeValueFromCurrentUsersValues} from "../actions/removeValueFromCurrentUsersValues"
import {addValueToCurrentUsersValues} from '../actions/addValueToCurrentUsersValues'
import { logout } from '../actions/index';
import Navbar from "./Navbar"
import {fcu} from "../actions/fcu"
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




class ActivitiesContainer extends Component {
  

  calculateScores = () => {
      const rankedActivities = []
      this.props.scores.forEach(score => {
        if (this.props.current_user.value_ids.includes(score.attributes.value_id)){
          if (rankedActivities.find(activity => activity.id == score.attributes.activity_id)){
            rankedActivities.find(activity => activity.id == score.attributes.activity_id).score += score.attributes.score
          }else {
            rankedActivities.push({id: score.attributes.activity_id, score: score.attributes.score})
          }
        }
      })
      debugger
      return rankedActivities.sort((a, b) => (a.score > b.score) ? -1 : 1)
  }
  
  
  callBack = (name, description, associatedValues) => {
    // debugger
    this.props.createNewActivityPost(name, description, associatedValues, sessionStorage.getItem('token'))
    
  }

  checkIn = (id) => {
    // debugger
    this.props.addValueToCurrentUsersValues(id, this.props.cuid, sessionStorage.getItem('token'))
  }

  checkOut = (id) => {
    debugger
    this.props.removeValueFromCurrentUsersValues(id, this.props.cuid, sessionStorage.getItem('token'))
  }

  callBack2 = (vId) => {
    this.props.deleteValueFetch(vId, sessionStorage.getItem('token'))
  }

  render() {
    // debugger
    if (!sessionStorage.getItem('token')) {
      return <Redirect push to="/login"/>
  }
      return (
        <>
        <Navbar location={"activities"}/>
          <div className='rowC' style={{
            backgroundColor: 'white',
            // maxWidth: 250,
            borderWidth: '5px',
            borderColor:'#aaaaaa', 
            borderStyle:'solid',
            
            
          }}>
            <button onClick={() => this.props.logout()} style={{maxHeight: "30px"}}>Log Out</button>
            <NewActivityForm callBack={this.callBack} />
            <br/>
            <ActivitiesList activities={this.props.activities} rankedActivities={this.calculateScores()}/>
          </div>
          <br></br>

<div className='rowC' id='value_container' style={{
  backgroundColor: 'white',
  // maxWidth: 250,
  borderWidth: '5px',
  borderColor:'#aaaaaa', 
  borderStyle:'solid',
  
  
}}>
  
  <NewValueForm/>
  <br/>
  <ValuesList cuv={this.props.cuv} checkIn={this.checkIn} checkOut={this.checkOut} JWT={sessionStorage.getItem('token')} cuid={this.props.cuid} callback={this.props.addValueToCurrentUsersValues} callBack2={this.callBack2} values={this.props.values}/>
</div>
</>
      );
  }
 
}

function mapStateToProps(currentState){
  // debugger
  return {
    values: currentState.values.values,
    activities: currentState.activities.activities,
    jwt: currentState.user.jwt,
    scores: currentState.scores.scores,
    current_user: currentState.user,
    cuid: currentState.user.id,
    cuv: currentState.user.value_ids
   
  }
}

function mapDispatchToProps(dispatch){
  return {
      // fetchScores: (jwt) => dispatch(fetchScores(jwt)),
      fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt)),
      createNewActivityPost: (n, d, av, jwt) => dispatch(createNewActivityPost(n, d, av, jwt)),
      logout: () => dispatch(logout()),
      fetchAllValues: (JWT) => dispatch(fetchAllValues(JWT)),
      addValueToCurrentUsersValues: (value, cuid, JWT) => dispatch(addValueToCurrentUsersValues(value, cuid, JWT)),
      deleteValueFetch: (vid, jwt) => dispatch (deleteValueFetch(vid, jwt)),
      removeValueFromCurrentUsersValues: (id, cuid, jwt) => dispatch(removeValueFromCurrentUsersValues(id, cuid, jwt))
      // fcu: (jwt, cid) => dispatch(fcu(jwt, cid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
