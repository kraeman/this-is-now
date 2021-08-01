import {getReadyTostoreScores, fetchScores} from "./index"

export default function fetchScores(jwt) {
    return (dispatch) => {
      dispatch(getReadyTostoreScores()) ;
      fetch('http://localhost:3000/values', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(fetchScores(data.data))
        });
    };



  }
