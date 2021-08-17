import {storeToken, getReadyToStoreToken, error} from "./index"

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
          if(!data.token){
            dispatch(error(data.message))
          }else{          
          sessionStorage.setItem('token', data.token)
          sessionStorage.setItem('id', data.user_id)
          sessionStorage.setItem('username', data.username)
          sessionStorage.setItem('value_ids', JSON.stringify([]))
          return dispatch(storeToken(data))
        }}).catch(err => {
          dispatch(error(err))
        })

    };
  }


 

