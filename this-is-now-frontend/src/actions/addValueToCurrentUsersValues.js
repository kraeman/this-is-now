import {addValueToCurrentUser, getReadyToUpdateCurrentUsersValues, error} from "./index"


export function addValueToCurrentUsersValues(value, userId, token) {
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
          const valueIds = JSON.parse(sessionStorage.getItem('value_ids'))
          if (valueIds){
            valueIds.push(data.value_id)
            sessionStorage.setItem('value_ids', JSON.stringify(valueIds))
            dispatch(addValueToCurrentUser(data))
          }
        }
        }).catch(err => {
          dispatch(error(err))
        })

    };
  }