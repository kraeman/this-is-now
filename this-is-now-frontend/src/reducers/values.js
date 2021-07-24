export const valuesReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_VALUE':
            return 
        case 'REMOVE_VALUE':
            return state.filter(value => value.id !== action.payload)
        case 'UPDATE_VALUE':
            const index = state.findIndex(value => value.id === action.payload.valueId)
            return 
        default:
            return state
    }
}