import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

function UserContact() {

    return (
        <div className='mt-5'>
            <div className='d-flex'>
                <Col md={4}>
                    <h4 className='text-left' style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Контакт</h4>
                </Col>
                <Col md={8} className='place-self-center'>
                    <div className='border border-2 border-secondary mx-3'></div>
                </Col>
            </div>
            <div className='d-flex flex-column text-left mt-3'>
                <span className='text-muted'>
                    E-mail
                </span>
                <span className='fw-500' style={{color: '#DC6628'}}>biljana.trajkovska@students.com</span>
            </div>
            <div className='d-flex flex-column text-left mt-3'>
                <span className='text-muted'>
                    Телефон
                </span>
                <span className='fw-500' style={{color: '#DC6628'}}>+38976666333</span>
            </div>
        </div>
    )
}

export default UserContact;