import {getReadyToStoreToken, storeToken, error} from "./index"

export function fetchUser(username, password) {
    return (dispatch) => {
      dispatch(getReadyToStoreToken());
      fetch('http://localhost:3000/login', {
        method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({user: {username, password}})
      })
        .then(response => response.json())
        .then(data => {
          if(!data.token){
            dispatch(error(data.message))
          }else{
          sessionStorage.setItem('token', data.token)
          sessionStorage.setItem('id', data.user_id)
          sessionStorage.setItem('username', data.username)
          sessionStorage.setItem('value_ids', JSON.stringify(data.value_ids))
          dispatch(storeToken(data))
          }
        }).catch(err => {
          dispatch(error(err))
        })
    };
  }
