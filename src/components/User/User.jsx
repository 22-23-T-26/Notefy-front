import React from 'react';
import UserDetails from './UserDetails';
import UserContact from './UserContact';
import { Col, Container, Row } from 'react-bootstrap';
import UserMaterials from './UserMaterials';

function User() {

    return (
        <div className='user'>
            <Container>
                <UserDetails />
                <Row>
                    <Col md={3}>
                        <UserContact />
                    </Col>
                    <Col md={8}>
                        <UserMaterials />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default User;