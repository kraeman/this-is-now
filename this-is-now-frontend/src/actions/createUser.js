import {storeToken2, getReadyToStoreToken, getReadyToLoginUser} from "./index"

export function createUser(username, password, checkPassword) {
    return (dispatch) => {
      dispatch(getReadyToStoreToken());
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          accept: "application/json",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({user: {username, password, checkPassword}})
      })
        .then(response => response.json())
        .then(data => {
          if(!data.jwt){
            dispatch({type: "ERROR_B", payload: "data.message"})
          }else{          
          sessionStorage.setItem('token', data.jwt)
          sessionStorage.setItem('id', data.user_id)
          sessionStorage.setItem('username', data.username)
          sessionStorage.setItem('value_ids', JSON.stringify([]))
          return dispatch(storeToken2(data))
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }


 

