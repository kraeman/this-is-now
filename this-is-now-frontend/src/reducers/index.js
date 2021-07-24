import {combineReducers} from "redux"
import {activitiesReducer} from "./activities"
import {valuesReducer} from "./values"
import {usersReducer} from "/.users"

export const rootReducer = combineReducers({
    activities: activitiesReducer,
    values: valuesReducer,
    users: usersReducer
})