import {getReadyToStoreToken, storeToken, getReadyToStoreActivities, getReadyToStoreScores, getReadyToStoreValues} from "./index"

export function loginFetch(username, password) {
    return (dispatch) => {
      dispatch(getReadyToStoreToken());
      dispatch(getReadyToStoreActivities()) ;
      dispatch(getReadyToStoreScores())
      dispatch(getReadyToStoreValues())
      fetch('http://localhost:3000/login', {
        method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({user: {username, password}})
      })
        .then(response => response.json())
        .then(data => {
          dispatch(storeToken(data))
        });
    };
  }
