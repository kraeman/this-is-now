import {updateCurrentUsersValues, getReadyToUpdateCurrentUsersValues, error} from "./index"

export function updateUsersValues(value, userId, token) {
  
    return (dispatch) => {
      dispatch(getReadyToUpdateCurrentUsersValues());
      fetch(`http://localhost:3000/users/${parseInt(userId)}`, {
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
            dispatch(updateCurrentUsersValues(data))
        }
        }).catch(err => {
          dispatch(error(err))
        })
    };
  }