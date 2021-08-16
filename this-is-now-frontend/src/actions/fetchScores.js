import {getReadyToStoreScores, storeScores} from "./index"

export default function fetchScores(jwt) {
    return (dispatch) => {
      dispatch(getReadyToStoreScores()) ;
      fetch(`http://localhost:3000/scores`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
        .then(response => response.json())
        .then(data => {
          // 
          dispatch(storeScores(data.scores.data))
        });
    };



  }
