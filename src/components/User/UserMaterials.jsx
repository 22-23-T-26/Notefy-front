import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CgNotes } from 'react-icons/cg';
import UserCard from './UserCard';

function UserMaterials() {

    return (
        <div className='mt-5'>
            <div className='d-flex'>
                <Col md={6}>
                    <h4 className='text-left' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Постирани материјали</h4>
                </Col>
                <Col md={6} className='place-self-center'>
                    <div className='border border-2 border-secondary mx-3'></div>
                </Col>
            </div>
            <UserCard />
            <UserCard />
            <UserCard />
            <div className='float-right'>
                <a href="/materials">
                    <span className='text-decoration-underline' style={{ cursor: "pointer", paddingBottom: "30px", color: "black" }}>Види повеќе...</span>
                </a>
            </div>
        </div>
    )
}

export default UserMaterials;