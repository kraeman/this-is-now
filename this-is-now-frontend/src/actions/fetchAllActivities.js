// import { getReadyToStoreScores, storeScores } from "./activities";
import {loginUser, getReadyToStoreActivities, storeActivities, getReadyToLoginUser, getReadyToStoreScores, getReadyToStoreValues, storeValues, storeScores} from "./index"
// import { storeValues } from "./values";

export default function fetchAllActivities(jwt) {
  // debugger
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
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
          debugger
          dispatch(storeActivities(data[2].data))
          dispatch(storeScores(data[0].data))
          dispatch(storeValues(data[1].data))
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })
    };



  }