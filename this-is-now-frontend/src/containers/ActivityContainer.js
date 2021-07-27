import React, { Component } from 'react';
import ActivitiesList from '../components/activities/ActivitiesList'
import NewActivityForm from '../components/activities/NewActivityForm'
import '../App.css'




export default class ActivitiesContainer extends Component {

  

  render() {
    return (
        <div className='rowC'>
          <NewActivityForm/>
          <br/>
          <ActivitiesList/>
        </div>
    );
  }
};

// const mapStateToProps = (currentState) => {
//   return {
//     isLoggedIn: currentState.isLoggedIn,
//     values: currentState.values,
//     activities: currentState.activities
//   }
// }

// export default connect(mapStateToProps)(App);
