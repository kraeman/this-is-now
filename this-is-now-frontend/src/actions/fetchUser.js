import {loginUser, getReadyToLoginUser} from "./index"



export function fetchUser(username, password) {
    return (dispatch) => {
      dispatch(getReadyToLoginUser());
      fetch('http://localhost:3000/users', {
        method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username, password})
      })
        .then(response => response.json())
        .then(user => dispatch(loginUser(user)));
    };
  }
