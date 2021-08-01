import React, { Component } from 'react';
import {connect} from "react-redux"
import fetchScores from '../actions/fetchScores';
import fetchAllActivities from '../actions/fetchAllActivities'

import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




class ActivitiesContainer extends Component {


state = {
  loading: true
}

componentDidMount() {
  this.props.fetchAllActivities(this.props.current_user.jwt)
  if(!this.props.requesting){
    this.props.fetchScores(this.props.current_user.jwt)
    if(!this.props.requesting){
      this.setState({loading: false})
    }
  }
}
  
  calculateRanking = (props) => {
    
        const usersValuesObjectWithIdAndType = props.current_user.current_user_data.username.relationships.values.data
        const usersValuesIds = []
        const usersValues = []
        usersValuesObjectWithIdAndType.forEach(object => {
          usersValuesIds.push(object.id)
        });
        props.values.values.forEach(value => {
          usersValuesIds.forEach(valueId => {
            if (value.id === valueId){
              usersValues.push(value)
            }
          })
        })
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
      return usersActivitiesWithScores
  }
  





  render() {
    if(!this.state.loading){
      return (
          <div className='rowC'>
            <NewActivityForm/>
            <br/>
            <ActivitiesList activities={this.props.activities.activities} scores={this.calculateRanking(this.props)}/>
          </div>
      );
    }else{
      // debugger
      return(
      <>
      </>)
    }
  }

}

function mapStateToProps(currentState){
  return {
    values: currentState.values,
    activities: currentState.activities,
    current_user: currentState.users,
    scores: currentState.scores.scores,
    requesting: currentState.scores.requesting
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchScores: (jwt) => dispatch(fetchScores(jwt)),
      fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
