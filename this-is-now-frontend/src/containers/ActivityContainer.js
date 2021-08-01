import React, { Component } from 'react';
import {connect} from "react-redux"
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'
import fetchScores from '../actions/fetchScores';




class ActivitiesContainer extends Component {



  componentDidMount() {
    this.props.fetchScores(this.props.current_user.jwt)
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
          if(usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id )){
            // debugger
            usersActivitiesWithScores.find(activity => activity.id === score.attributes.activity_id ).score += score.attributes.score
          }else{
            usersActivitiesWithScores.push({id: score.attributes.activity_id, score: score.attributes.score})
          }
        }
      })
    })
  return usersActivitiesWithScores
  }
  





  render() {
    
    return (
        <div className='rowC'>
          <NewActivityForm/>
          <br/>
          <ActivitiesList scores={this.calculateRanking(this.props)}/>
        </div>
    );
  }

}

function mapStateToProps(currentState){
  return {
    values: currentState.values,
    activities: currentState.activities,
    current_user: currentState.users,
    scores: currentState.scores.scores
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchScores: (jwt) => dispatch(fetchScores(jwt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
