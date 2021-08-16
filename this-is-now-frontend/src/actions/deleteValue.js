import {getReadyToDeleteValue, getReadyToDeleteValueFromUser, getReadyToDeleteValueFromScores, deleteValue, deleteValueFromScores, deleteValueFromUser} from "./index"

export function deleteValueFetch(value, jwt) {
    return (dispatch) => {
      dispatch(getReadyToDeleteValue());
      dispatch(getReadyToDeleteValueFromScores())
      dispatch(getReadyToDeleteValueFromUser())
      fetch(`http://localhost:3000/values/${value}`, {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
          const array = JSON.parse(sessionStorage.getItem('value_ids'))
          const newArray = array.filter(vid => vid !== data)
          sessionStorage.setItem('value_ids', JSON.stringify(newArray))
          dispatch(deleteValue(data))
          dispatch(deleteValueFromScores(data))
          dispatch(deleteValueFromUser(data))
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }