import {addActivity, getReadyToAddActivity, storeScores, error} from "./index"

export function createNewActivityPost(name, description, valuesAndScores, token) { 
    return (dispatch) => {
      dispatch(getReadyToAddActivity());
      fetch('http://localhost:3000/activities', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({activity: {name, description, valuesAndScores, token}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch(error(data.message))
          }else{          
          dispatch(addActivity(token, data))
          dispatch(storeScores(data.scores.data))
        }}).catch(err => {
          dispatch(error(err))
        })

    };
  }


 

