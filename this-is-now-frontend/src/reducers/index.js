import {combineReducers} from "redux"
import {activitiesReducer} from "./activities"
import {values} from "./values"
import {users} from "./users"
// import { combineReducers } from 'redux'

export default combineReducers({
    // activities: activitiesReducer,
    values,
    users
})