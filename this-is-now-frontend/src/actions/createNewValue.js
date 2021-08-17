import {addValue, getReadyToAddValue, error} from "./index"

export function createNewValuePost(name, creator_id, token) {
    return (dispatch) => {
      dispatch(getReadyToAddValue());
      fetch('http://localhost:3000/values', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {name, creator_id}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch(error(data.message))
          }else{
          dispatch(addValue(data))
        }}).catch(err => {
          dispatch(error(err))
        })

    };
  }