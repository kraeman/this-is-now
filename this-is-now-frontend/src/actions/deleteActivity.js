import {getReadyToDeleteActivity, deleteActivity, error} from "./index"

export function deleteActivityFetch(activityId) {
    return (dispatch) => {
      dispatch(getReadyToDeleteActivity());
      fetch(`http://localhost:3000/activities/${activityId}`, {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch(error(data.message))
          }else{
          dispatch(deleteActivity(data))
        }}).catch(err => {
          dispatch(error(err))
        })

    };
  }