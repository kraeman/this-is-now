import {loginUser, getReadyToStoreToken, storeToken, getReadyToLoginUser} from "./index"

export function fetchToken(username, password) {
    return (dispatch) => {
      dispatch(getReadyToStoreToken());
      fetch('http://localhost:3000/login', {
        method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username, password})
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(storeToken(data.user.id, data.jwt))
          dispatch(getReadyToLoginUser());
          fetch(`http://localhost:3000/users/${data.user.id}`, {
          method: 'GET',
            headers: {
              Authorization: `Bearer ${data.jwt}`
            }
          })
          .then(response => response.json())
          .then(data => {
            dispatch(loginUser(data))
          })
        });
    };



  }
