import {removeValueFromCurrentUser, getReadyToRemoveValueFromCurrentUsersValues} from "./index"

export function removeValueFromCurrentUsersValues(value, CUID, jwt) {
    return (dispatch) => {
      dispatch(getReadyToRemoveValueFromCurrentUsersValues());
      fetch(`http://localhost:3000/users/${CUID}`, {
        method: 'PATCH',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({value: {value}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
          const array = JSON.parse(sessionStorage.getItem('value_ids'))         
          if (array){
            const array2 = array.filter(id => id !== data)
            sessionStorage.setItem('value_ids', JSON.stringify(array2))           
            dispatch(removeValueFromCurrentUser(data))
          }
       }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }