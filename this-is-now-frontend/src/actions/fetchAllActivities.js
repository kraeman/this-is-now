// import { getReadyToStoreScores, storeScores } from "./activities";
import {loginUser, getReadyToStoreActivities, storeActivities, getReadyToLoginUser, getReadyToStoreScores, getReadyToStoreValues, storeValues, storeScores} from "./index"
// import { storeValues } from "./values";

export default function fetchAllActivities(jwt) {
  debugger
    return (dispatch) => {
      dispatch(getReadyToStoreActivities()) ;
      dispatch(getReadyToStoreScores())
      dispatch(getReadyToStoreValues())
      fetch('http://localhost:3000/activities', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
        .then(response => {
          // debugger
          response.json()})
        .then(data => {
          // debugger
          dispatch(storeActivities(data.activities))
          dispatch(storeScores(data.scores))
          dispatch(storeValues(data.values))
        });
    };



  }