import {updateCurrentUsersValues, getReadyToUpdateCurrentUsersValues, error} from "./index"

export function updateUsersValues(value, userId, token) {
  
    return (dispatch) => {
      fetch(`http://localhost:3001/users/${parseInt(userId)}`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {value}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch(error(data.message))
          }else{
            sessionStorage.setItem('value_ids', JSON.stringify(data))
        }
        }).catch(err => {
          dispatch(error(err))
        })
    };
  }