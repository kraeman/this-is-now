import {getReadyToDeleteActivity, deleteActivity} from "./activities"

export function deleteA(aid) {
    return (dispatch) => {
      dispatch(getReadyToDeleteActivity());
      fetch(`http://localhost:3000/activities/${aid}`, {
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
            dispatch({type: "ERROR_B", payload: data.message})
          }else{
          dispatch(deleteActivity(data))
        }}).catch(err => {
          dispatch({type: "ERROR_F", payload: err})
        })

    };
  }