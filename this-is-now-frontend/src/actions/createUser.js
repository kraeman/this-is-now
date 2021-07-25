import {loginUser, getReadyToLoginUser} from "./index"


export function createUser(username, password, checkPassword) {
    return (dispatch) => {
      dispatch(getReadyToLoginUser());
      fetch('http://localhost:3000/signup', {
        method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            //ENCRYPT!!!!
            body: JSON.stringify({username, password, checkPassword})
      })
        .then(response => response.json())
        .then(jwt => {
          // debugger
          // dispatch(loginUser(user))
        });
    };
  }
