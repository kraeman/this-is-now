import {REFRESH_USER} from './actionTypes'

export function putUserInStoreAfterPageRefresh(token, username, value_ids) {
    return (dispatch) => {
      dispatch({
        type: REFRESH_USER,
        payload: {token, username, value_ids}
    });  
    };
  }
