import {addPost, getReadyToAddPost} from "./index"

export function createNewBlogPost(content, token) { 
    return (dispatch) => {
      dispatch(getReadyToAddActivity());
    //   fetch('http://localhost:3001/activities/activitiesid/blogs', {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({activity: {content, token}})
      })
        .then(response => response.json())
        .then(data => {
          if(!!data.message){
            dispatch(error(data.message))
          }else{          
          dispatch(addActivity(data))
          dispatch(storeScores(data.scores.data))
        }}).catch(err => {
          dispatch(error(err))
        })

    };
  }


 
