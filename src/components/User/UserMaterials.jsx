import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CgNotes } from 'react-icons/cg';
import UserCard from './UserCard';

function UserMaterials() {

    return (
        <div className='mt-5'>
              <div className='d-flex'>
              <Col md={4}>
                    <h4 className='text-left'>Постирани материјали</h4>
                </Col>
                <Col md={8} className='place-self-center'>
                    <div className='border border-2 border-secondary mx-3'></div>
                </Col>
              </div>    
            <UserCard />
            <UserCard />
            <UserCard />
            <div className='float-right'>
                <span className='text-decoration-underline' style={{cursor: "pointer"}}>Види повеќе...</span>
            </div>
        </div>
    )
}

export default UserMaterials;