import React, { Component } from 'react';
import {connect} from "react-redux"
import fetchScores from '../actions/fetchScores';
import fetchAllActivities from '../actions/fetchAllActivities'
import { createNewActivityPost } from "../actions/createNewActivity";

import {fcu} from "../actions/fcu"
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




class ActivitiesContainer extends Component {


  state = {
    requesting: true,
    calculatedScores: []
  }


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
    //       // debugger
    //       if(usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id )){
    //         // debugger
    //         usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id ).score += score.attributes.score
    //       }else{
    //         usersActivitiesWithScores.push({id: score.attributes.activity_id, score: score.attributes.score, relationships: score.relationships})
    //       }
    //     }
    //   })
    // })
    // return usersActivitiesWithScores
  // }
  
  // callBack = (name, description, associatedValues) => {
  //   // debugger
  //   this.setState({
  //     loading: false,
  //     submit: true,
  //     name: name,
  //     description: description,
  //     associatedValues: associatedValues,
  //     ah: false
  //   })
    
  // }



  


componentDidUpdate() {
  if(!this.props.requestingCU && !this.props.requestingA && !this.props.requestingS && this.state.requesting){





    // debugger
    const calculateScore = () => {
          const usersValuesObjectWithIdAndType = this.props.current_user.current_user_data.username.relationships.values.data
          const usersValuesIds = []
          usersValuesObjectWithIdAndType.forEach(object => {
            usersValuesIds.push(object.id)
          });
          let usersActivitiesWithScores = []
          usersValuesIds.forEach(id => {
            this.props.scores.forEach(score => {
              if (score.attributes.value_id == parseInt(id)) {
                // debugger
                if(usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id )){
                  // debugger
                  usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id ).score += score.attributes.score
                }else{
                  usersActivitiesWithScores.push({id: score.attributes.activity_id, score: score.attributes.score, relationships: score.relationships})
                }
              }
            })
          })
          // debugger
          this.setState({
            requesting: false,
            calculatedScores: usersActivitiesWithScores
          })
      }





      calculateScore()
  }
}

doSomething = () => {
  debugger
    Promise.all([this.props.fetchAllActivities(this.props.current_user.jwt), this.props.fetchScores(this.props.current_user.jwt), this.props.fcu(this.props.current_user.jwt, this.props.current_user.current_user_data.username.id)])
}
componentDidMount() {
this.doSomething()
      }






  render() {
    debugger
      return (
          <div className='rowC'>
            <NewActivityForm requesting={this.state.requesting} callBack={this.callBack} />
            <br/>
            <ActivitiesList requesting={this.state.requesting} activities={this.props.activities} rankedActivities={this.state.calculatedScores}/>
          </div>
      );
  }
 
}

function mapStateToProps(currentState){
  return {
    // values: currentState.values,
    activities: currentState.activities,
    current_user: currentState.users,
    scores: currentState.scores.scores,
    // requestingActivity: currentState.activities.requesting,
    // requestingScore: currentState.scores.requesting,
    // calculatedScores: currentState.scores.calculatedScores
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchScores: (jwt) => dispatch(fetchScores(jwt)),
      fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt)),
      createNewActivityPost: (n, d, av, jwt) => dispatch(createNewActivityPost(n, d, av, jwt)),
      fcu: (jwt, cid) => dispatch(fcu(jwt, cid))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
