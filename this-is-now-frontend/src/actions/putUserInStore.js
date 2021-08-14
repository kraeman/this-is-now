

export function putUserInStore(token, username, value_ids) {
    return (dispatch) => {
      dispatch({
        type: "REFRESH_USER",
        payload: {token, username, value_ids}
    });
      
    };
  }
