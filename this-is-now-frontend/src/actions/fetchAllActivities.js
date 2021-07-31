import {loginUser, getReadyToStoreActivities, storeActivities, getReadyToLoginUser} from "./index"

export default function fetchAllActivities(jwt) {
    return (dispatch) => {
      dispatch(getReadyToStoreActivities()) ;
      fetch('http://localhost:3000/activities', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(storeActivities(data.user.data))
        });
    };



  }