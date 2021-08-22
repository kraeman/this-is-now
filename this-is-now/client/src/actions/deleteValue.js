import {getReadyToRemoveValueFromCurrentUsersValues, removeValueFromCurrentUser, getReadyToDeleteValue, getReadyToDeleteValueFromScores, deleteValue, deleteValueFromScores, error} from "./index"

export function deleteValueFetch(value, token) {
    return (dispatch) => {
      dispatch(getReadyToDeleteValue());
      dispatch(getReadyToDeleteValueFromScores())
      fetch(`http://localhost:3001/values/${value}`, {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch(error(data.message))
          }else{
          const valueIds = JSON.parse(sessionStorage.getItem('value_ids'))
          const newValueIds = valueIds.filter(vid => vid !== data)
          sessionStorage.setItem('value_ids', JSON.stringify(newValueIds))
          dispatch(deleteValue(data))
          dispatch(deleteValueFromScores(data))
        }}).catch(err => {
          dispatch(error(err))
        })

    };
  }