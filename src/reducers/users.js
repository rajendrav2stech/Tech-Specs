import { FETCH_USERS, START_LOADING, END_LOADING, UPDATE_USERS, DELETE_USERS } from '../constants/actionType'

export default (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case END_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            }
        case UPDATE_USERS:
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user))
            }
        case DELETE_USERS:
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            }
        default:
            return state;
    }
}