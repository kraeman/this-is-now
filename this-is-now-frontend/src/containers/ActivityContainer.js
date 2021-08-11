import React, { Component } from 'react';
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom'
import fetchScores from '../actions/fetchScores';
import fetchAllActivities from '../actions/fetchAllActivities'
import { createNewActivityPost } from "../actions/createNewActivity";
import { logout } from '../actions/index';

import {fcu} from "../actions/fcu"
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




class ActivitiesContainer extends Component {


  // componentDidUpdate() {
    
    // const usersValuesObjectWithIdAndType = this.props.current_user.current_user_data.username.relationships.values.data
    // const usersValuesIds = []
    // const usersValues = []
    // usersValuesObjectWithIdAndType.forEach(object => {
    //   usersValuesIds.push(object.id)
    // });
    // this.props.values.values.forEach(value => {
    //   usersValuesIds.forEach(valueId => {
    //     if (value.id === valueId){
    //       usersValues.push(value)
    //     }
    //   })
    // })
    // let usersActivitiesWithScores = []
    // usersValuesIds.forEach(id => {
    //   this.props.scores.forEach(score => {
    //     if (score.attributes.value_id == parseInt(id)) {
          // debugger
    //       if(usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id )){
            // debugger
    //         usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id ).score += score.attributes.score
    //       }else{
    //         usersActivitiesWithScores.push({id: score.attributes.activity_id, score: score.attributes.score, relationships: score.relationships})
    //       }
    //     }
    //   })
    // })
    // return usersActivitiesWithScores
  // }
  
  
  
  
  
  
  
  // componentDidUpdate() {
  //   // debugger
  //   if(!this.props.requestingCU && !this.props.requestingA && !this.props.requestingS && this.state.requesting && !this.state.submit){
      
  //     // debugger
  //     const calculateScore = () => {
  //       const usersValuesObjectWithIdAndType = this.props.current_user.current_user_data.username.relationships.values.data
  //       const usersValuesIds = []
  //       usersValuesObjectWithIdAndType.forEach(object => {
  //         usersValuesIds.push(object.id)
  //       });
  //       let usersActivitiesWithScores = []
  //       usersValuesIds.forEach(id => {
  //         this.props.scores.forEach(score => {
  //           if (score.attributes.value_id == parseInt(id)) {
  //             // debugger
  //             if(usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id )){
  //               // debugger
  //               usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id ).score += score.attributes.score
  //             }else{
  //               usersActivitiesWithScores.push({id: score.attributes.activity_id, score: score.attributes.score, relationships: score.relationships})
  //             }
  //           }
  //         })
  //       })
  //       // debugger
  //       this.setState({
  //         requesting: false,
  //         calculatedScores: usersActivitiesWithScores,
  //         submit: false
  //       })
  //     }
      
  //     calculateScore()
  //   }else if(this.props.requestingA && !this.props.requestingCU && !this.props.requestingS && !this.state.requesting && !this.state.submit){
  //     // debugger
  //     this.setState({
  //       requesting: false,
  //       calculatedScores: this.state.calculatedScores,
  //       submit: true
  //     })
  //   }else if(this.props.requestingA && !this.props.requestingCU && !this.props.requestingS && !this.state.requesting && this.state.submit){
  //     // debugger  
  //     this.doSomething()
  //   }else if(this.props.requestingCU && this.props.requestingS && !this.state.requesting && this.state.submit) {
  //     // debugger
  //     this.setState({
  //       requesting: true,
  //       calculatedScores: this.state.calculatedScores,
  //       submit: false
  //     })
  //   }
  // }
  
  // doSomething = () => {
  //   // debugger
  //   Promise.all([this.props.fetchAllActivities(this.props.current_user.jwt), this.props.fetchScores(this.props.current_user.jwt), this.props.fcu(this.props.current_user.jwt, this.props.current_user.current_user_data.username.id)])
  // }
  // componentDidMount() {
  //   // debugger
  //   this.props.fetchAllActivities(this.props.jwt)
  //   // fetch activity names and descriptions and ids, value names and ids, scores
  // }
  
  

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
    this.props.createNewActivityPost(name, description, associatedValues, this.props.current_user.jwt)
    
  }

  render() {
    // debugger
    if (!this.props.jwt) {
      return <Redirect push to="/login"/>
  }
      return (
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
    current_user: currentState.user
    // requestingCU: currentState.users.requesting,
    // requestingA: currentState.activities.requesting,
    // requestingS: currentState.scores.requesting
    // requestingActivity: currentState.activities.requesting,
    // requestingScore: currentState.scores.requesting,
    // calculatedScores: currentState.scores.calculatedScores
  }
}

function mapDispatchToProps(dispatch){
  return {
      // fetchScores: (jwt) => dispatch(fetchScores(jwt)),
      fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt)),
      createNewActivityPost: (n, d, av, jwt) => dispatch(createNewActivityPost(n, d, av, jwt)),
      logout: () => dispatch(logout())
      // fcu: (jwt, cid) => dispatch(fcu(jwt, cid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
