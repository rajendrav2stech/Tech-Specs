import React from 'react'
import { useSelector } from 'react-redux'
import Profile from './Profile'
import Spinner from '../../Spinner/Spinner'
import { Col, Container, Row, Table } from 'react-bootstrap'

const ProfileUsers = () => {
    const { isLoading, users } = useSelector((state) => state.users)
    return (
        <Container>
            <Row>
                <Col >
                    <h4 className='mb-3'>Tech Specs</h4>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Id#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th colSpan={2} style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ? <tr><td colSpan={4} style={{ textAlign: 'center' }}><Spinner /></td></tr> : users?.map((user) => {
                                    return <Profile key={user.id} user={user} />
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileUsers