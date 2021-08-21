import {getReadyToStoreActivities, storeActivities, getReadyToStoreScores, getReadyToStoreValues, storeValues, storeScores, error} from "./index"

export default function fetchActivities(token) {
    return (dispatch) => {
      dispatch(getReadyToStoreActivities()) ;
      dispatch(getReadyToStoreScores())
      dispatch(getReadyToStoreValues())
      fetch('http://localhost:3001/activities', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch(error(data.message))
          }else{
          dispatch(storeActivities(data[2].data))
          dispatch(storeScores(data[0].data))
          dispatch(storeValues(data[1].data))
        }}).catch(err => {
          dispatch(error(err))
        })
    };
  }