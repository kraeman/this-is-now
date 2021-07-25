import {storeToken, getReadyToStoreToken} from "./index"


export function createUser(username, password, checkPassword) {
    return (dispatch) => {
      dispatch(getReadyToStoreToken());
      fetch('http://localhost:3000/signup', {
        method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username, password, checkPassword})
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(storeToken(data.userData, data.jwt))
        });
    };
  }
