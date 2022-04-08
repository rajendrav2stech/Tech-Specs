import axios from "axios"

const API = axios.create({ baseURL: 'https://reqres.in/api' })

export const fetchUsers = () => API.get('/users')
export const updateUser = (id, updatedPost) => API.put(`/users/?page=${id}`, updatedPost)
export const deleteUsers = (id) => API.delete(`/users/?page=${id}`)