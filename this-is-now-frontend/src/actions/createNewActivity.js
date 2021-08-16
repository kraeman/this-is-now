import {addActivity, getReadyToAddActivity, storeScores} from "./index"

export function createNewActivityPost(name, description, valuesAndScoresArray, jwt) { 
    return (dispatch) => {
      dispatch(getReadyToAddActivity());
      fetch('http://localhost:3000/activities', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({activity: {name, description, valuesAndScoresArray, jwt}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{          
          dispatch(addActivity(jwt, data))
          dispatch(storeScores(data.scores.data))
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }


 

