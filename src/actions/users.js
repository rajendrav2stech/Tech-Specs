import * as api from '../api'
import { END_LOADING, FETCH_USERS, START_LOADING, UPDATE_USERS, DELETE_USERS } from '../constants/actionType'

export const getUser = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchUsers()
        dispatch({ type: FETCH_USERS, payload: data.data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const updateUsers = (id, user) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.updateUser(id, user)
        dispatch({ type: UPDATE_USERS, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        await api.deleteUsers(id)
        dispatch({ type: DELETE_USERS, payload: id })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}