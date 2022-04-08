import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { BiEditAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsers } from '../../../actions/users'

const UserForm = ({ curentId, setShow }) => {
    let dispatch = useDispatch()
    const users = useSelector((state) => curentId ? state.users.users.find((p) => p.id === curentId) : null)

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
    })

    const onChangeHandeler = (event) => {
        event.preventDefault()
        const target = event.target
        const name = target.name
        const value = target.value
        setUser({
            ...user, [name]: value
        })
    }


    useEffect(() => {
        users && setUser(users)
    }, [users])

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (curentId) {
            dispatch(updateUsers(curentId, user))
        }
        setShow(false)
    }
    const handleClose = () => setShow(false)

    return (
        <Form onSubmit={onSubmitHandler}>
            <div className='from_body'>
                <div className='form-group'>
                    <label htmlFor="">
                        <span><sup>*</sup> First Name</span>
                        <input
                            placeholder="Name"
                            type="text"
                            name="first_name"
                            value={user.first_name}
                            onChange={onChangeHandeler}
                            required
                        />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor="">
                        <span><sup>*</sup> Last Name</span>
                        <input
                            placeholder="Name"
                            type="text"
                            name="last_name"
                            value={user.last_name}
                            onChange={onChangeHandeler}
                            required
                        />
                    </label>
                </div>
                <div className='form-group'>
                    <label htmlFor="">
                        <span><sup>*</sup> Email</span>
                        <input
                            placeholder="Name"
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={onChangeHandeler}
                            required
                        />
                    </label>
                </div>
            </div>
            <div className='handel_action'>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" type="submit">
                    <BiEditAlt /> Update
                </Button>
            </div>
        </Form>
    )
}

export default UserForm