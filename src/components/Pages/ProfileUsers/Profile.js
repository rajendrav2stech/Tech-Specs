import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { BiEditAlt, BiTrashAlt } from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../../actions/users';
import UserForm from './Form';


const Profile = ({ user }) => {
    const [curentId, setCurentId] = useState(null)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const { handleCloseEdit } = () => setShow(false)

    const editHandler = () => {
        setCurentId(user.id)
        setShow(true)
    }
    const closeButton = () => {
        setShow(false)
    }
    const deleteHandler = () => {
        if (window.confirm(`Are you sure you want to delete? ${user.first_name} ${user.last_name} Profile`)) {
            dispatch(deleteUser(user.id))
        }
    }
    return (
        <>
            <tr>
                <td>{user.id}</td>
                <td><span><img className='avtar_' src={user.avatar} alt="avatar" /></span> <strong>{user.first_name} {user.last_name}</strong></td>
                <td>{user.email}</td>
                <td style={{ textAlign: 'center' }}><BiEditAlt style={{ color: 'green' }} onClick={editHandler} /></td>
                <td style={{ textAlign: 'center' }}><BiTrashAlt style={{ color: 'red' }} onClick={deleteHandler} /></td>
            </tr>
            <Modal show={show} onHide={handleCloseEdit} className="edit_handel">
                <Modal.Header >
                    <Modal.Title> <img src={user.avatar} alt="" /> {user.first_name} {user.last_name}</Modal.Title>
                    <button type="button" onClick={closeButton} className="btn-close" aria-label="Close"></button>
                </Modal.Header>
                <Modal.Body>
                    <UserForm curentId={curentId} setShow={setShow} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Profile