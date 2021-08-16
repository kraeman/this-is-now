import {addValue, getReadyToAddValue} from "./index"

export function createNewValuePost(name, creator_id, jwt) {
    return (dispatch) => {
      dispatch(getReadyToAddValue());
      fetch('http://localhost:3000/values', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {name, creator_id}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
          dispatch(addValue(data))
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }