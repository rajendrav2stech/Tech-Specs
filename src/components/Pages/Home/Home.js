import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from '../../../actions/users'
import ProfileUsers from '../ProfileUsers/ProfileUsers'

const Home = () => {
    const dispatch = useDispatch()
    dispatch(getUser())
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    return (
        <ProfileUsers />
    )
}

export default Home