import {loginUser, getReadyToLoginUser} from "./index"

export function loginUser(username, ) {
    return (dispatch) => {
      dispatch(getReadyToLoginUser());
      fetch('http://localhost:3000/login', {
        method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username, password})
      })
        .then(response => response.json())
        .then(jwt => {
          // debugger
          // dispatch(loginUser(user))
        });
    };
  }
