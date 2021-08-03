import {combineReducers} from "redux"
import {activities} from "./activities"
import {values} from "./values"
import {user} from "./users"
import { scores } from "./scores"
// import { combineReducers } from 'redux'

export default combineReducers({
    activities,
    values,
    user,
    scores
})