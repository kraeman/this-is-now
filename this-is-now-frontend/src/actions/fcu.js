import {grtscu, scu} from "./index"

export function fcu(jwt, CUID) {
    return (dispatch) => {
      dispatch(grtscu());
      fetch(`http://localhost:3000/users/${parseInt(CUID)}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${jwt}`
        }
      })
        .then(response => response.json())
        .then(data => {
          dispatch(scu(data.user.data))
        });

    };
  }