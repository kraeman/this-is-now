import {setCurrentUsersValues, getReadyToAddValueToCurrentUser} from "./index"

export function messWithUsersValues(value, CUID, jwt) {
  
    return (dispatch) => {
      dispatch(getReadyToAddValueToCurrentUser());
      fetch(`http://localhost:3000/users/${parseInt(CUID)}`, {
        method: 'POST',
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
            sessionStorage.setItem('value_ids', JSON.stringify(data))
            dispatch(setCurrentUsersValues(data))
        }
        }).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })
    };
  }