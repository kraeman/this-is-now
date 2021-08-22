import { Link } from 'react-router-dom'
import {Stack} from "stack-styled"
import React, { useState } from 'react';
import ConfirmDialog from "../ConfirmDialog"


const AllActivitiesList = (props) => {
    
    const [state, setOpen] = useState({open: false, activityId: null});

    const conditionalDeleteButtonIfCurrentUserIsCreator = (activity) => {
        
        if(activity.attributes.creator_id === parseInt(sessionStorage.getItem("id"))){
            return <button onClick={() => setOpen({open: true, activityId: activity.id})}>Delete this Activity</button>
        }
    }

    const createActivityLinks = () => {
        return props.activities.map(activity => {
 
           return <li key={activity.id}>
               <Link to={`/activities/${activity.id}`}>{activity.attributes.name}</Link>
               {conditionalDeleteButtonIfCurrentUserIsCreator(activity)}
            </li>
        })
    }
    
    return (
        <div>
            <ConfirmDialog
                title="Delete Activity?"
                iD={state.activityId}
                open={state.open}
                setOpen={setOpen}
                onConfirm={props.deleteActivityFetch}
            >
                Are you sure you want to delete this post?
            </ConfirmDialog>
            <br/><br/><br/><br/>
            <h4>All Activities</h4>
            <Stack>
        <Stack gridGap={3}>
            <ul>
                {createActivityLinks()}
            </ul>
            </Stack>
            </Stack>
        </div>
    )
}

export default AllActivitiesList;