import {loginUser, getReadyToStoreValues, storeValues, getReadyToLoginUser} from "./index"

export default function fetchAllValues(jwt) {
    return (dispatch) => {
      dispatch(getReadyToStoreValues()) ;
      fetch('http://localhost:3000/values', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      })
        .then(response => response.json())
        .then(data => {
          // debugger
          dispatch(storeValues(data.data))
        });
    };



  }