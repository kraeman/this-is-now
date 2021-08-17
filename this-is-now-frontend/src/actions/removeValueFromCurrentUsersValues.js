import {removeValueFromCurrentUser, getReadyToRemoveValueFromCurrentUsersValues, error} from "./index"

export function removeValueFromCurrentUsersValues(value, userId, token) {
    return (dispatch) => {
      dispatch(getReadyToRemoveValueFromCurrentUsersValues());
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'PATCH',
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
            const newValueIds = valueIds.filter(id => id !== data)
            sessionStorage.setItem('value_ids', JSON.stringify(newValueIds))           
            dispatch(removeValueFromCurrentUser(data))
          }
       }}).catch(err => {
        dispatch(error(err))
        })

    };
  }