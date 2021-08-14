import {loginUser, getReadyToStoreToken, storeToken, getReadyToLoginUser} from "./index"

export function fetchToken(username, password) {
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
          debugger
          //jwt, username, id, value relationship
          sessionStorage.setItem('token', data.jwt)
          sessionStorage.setItem('id', data.user_id)
          sessionStorage.setItem('username', data.username)
          sessionStorage.setItem('value_ids', JSON.stringify(data.value_ids))
          debugger
          dispatch(storeToken(data))
        });
    };
  }
