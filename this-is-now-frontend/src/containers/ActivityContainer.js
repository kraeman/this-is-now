import React, { Component } from 'react';
import {connect} from "react-redux"
import fetchScores from '../actions/fetchScores';
import fetchAllActivities from '../actions/fetchAllActivities'
import { createNewActivityPost } from "../actions/createNewActivity";


import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




class ActivitiesContainer extends Component {


  state = {
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







componentDidMount() {
        const doSomething = () => {
            Promise.all([this.props.fetchAllActivities(this.props.current_user.jwt), this.props.fetchScores(this.props.current_user.jwt)])
        }



        const calculateScore = async () => {
        await doSomething()
        debugger
        const usersValuesObjectWithIdAndType = this.props.current_user.current_user_data.username.relationships.values.data
            const usersValuesIds = []
            const usersValues = []
            usersValuesObjectWithIdAndType.forEach(object => {
              usersValuesIds.push(object.id)
            });
            this.props.values.values.forEach(value => {
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
            // debugger
            this.setState({
              calculatedScores: usersActivitiesWithScores
            })
        }

        calculateScore()

      }






  render() {
      return (
          <div className='rowC'>
            <NewActivityForm callBack={this.callBack} />
            <br/>
            <ActivitiesList activities={this.props.activities} rankedActivities={this.state.calculatedScores}/>
          </div>
      );
  }
 
}

function mapStateToProps(currentState){
  return {
    values: currentState.values,
    activities: currentState.activities,
    current_user: currentState.users,
    scores: currentState.scores.scores,
    requestingActivity: currentState.activities.requesting,
    requestingScore: currentState.scores.requesting,
    calculatedScores: currentState.scores.calculatedScores,
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchScores: (jwt) => dispatch(fetchScores(jwt)),
      fetchAllActivities: (jwt) => dispatch(fetchAllActivities(jwt)),
      createNewActivityPost: (n, d, av, jwt) => dispatch(createNewActivityPost(n, d, av, jwt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer);
