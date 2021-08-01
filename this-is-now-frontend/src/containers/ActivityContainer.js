import React, { Component } from 'react';
import {connect} from "react-redux"
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




class ActivitiesContainer extends Component {


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
    const usersActivities = []
    usersValuesIds.forEach(id => {
      // debugger
      if(props.activities.activities !== []){
        props.activities.activities.forEach(activityObject => {
          activityObject.relationships.values.data.forEach(valueAssociatedWithThisActivity => {
            if(valueAssociatedWithThisActivity.id === id){
              usersActivities.push(activityObject)
            }
          })
        })
      }
    })
    usersActivities.forEach(activity => {
      activity.relationships.values.data.forEach(valueObjectFromUsersActivities => {
        debugger
        usersValues.forEach(value => {
          if(value.id === valueObjectFromUsersActivities.id){
            
          }
        })

      })
    })
  }  




  render() {
    this.calculateRanking(this.props)
    return (
        <div className='rowC'>
          <NewActivityForm/>
          <br/>
          <ActivitiesList/>
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
