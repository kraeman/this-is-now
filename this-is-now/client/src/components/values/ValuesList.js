import {Stack} from "stack-styled"
import React, { useState } from 'react';
import ConfirmDialog from "../ConfirmDialog"

const ValuesList = (props) => {

    const [state, setOpen] = useState({open: false, valueId: null});

    const conditionallyShowDeleteButton = (value) => {  
        if(value.creator_id === parseInt(sessionStorage.getItem("id"))){
            return <button onClick={() => setOpen({open: true, valueId: value.id})}>Delete this value</button>
        }
    }

    const createValuesFromList = () => {
        //sort is destructive which is why I spread to make a copy
        return [...props.values].sort((a, b) => (a.name > b.name) ? 1 : -1).map(value => {
            return <div key={value.id}>
                        <input onChange={() => props.addOrRemoveFromUsersValues(value.id)} type="checkbox" checked={props.usersValues.includes(value.id)}  name={`${value.id}`} value={value.id}/>
                        <label for={`${value.id}`}> {value.name}</label><br></br>
                        {conditionallyShowDeleteButton(value)}
                   </div>
        })
        }

    return (
        <div>
            <ConfirmDialog
                title="Delete Value?"
                valueId={state.valueId}
                open={state.open}
                setOpen={setOpen}
                onConfirm={props.deleteValue}
            >
                Are you sure you want to delete this post?
            </ConfirmDialog>
            <br></br>
            <button onClick={() => props.updateUserValues()}>Submit Changes To Your Values</button>
        <Stack>
            <br/><br/>
        <Stack gridGap={3} numColumns={[1, 2, 3, 4]}>
            {createValuesFromList()}
            </Stack></Stack>
        </div>
    )
}

export default ValuesList;