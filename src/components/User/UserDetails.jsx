import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { RiStarSLine } from 'react-icons/ri';
import { TiMessage } from 'react-icons/ti'

function UserDetails() {

    return (
        <Card.Body className='d-flex mt-5 align-items-center'>
            <Col md={{ span: 3 }}>
                <Image style={{ width: "250px", height: "250px" }} src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg" roundedCircle />
            </Col>
            <Col md={{ span: 4 }} className='text-left'>
                <h1>Билјана Трајковска</h1>
                <p className='text-muted text-left mb-0 fw-500' style={{ fontSize: "20px" }}>@biljana.trajkovska</p>
                <p className='text-muted'>студент</p>
                <div className='d-flex align-items-center'>
                    <RiStarSLine className='text-dark' size={40} />
                    <RiStarSLine className='text-dark' size={40} />
                    <RiStarSLine className='text-dark' size={40} />
                    <RiStarSLine className='text-dark' size={40} />
                    <RiStarSLine className='text-dark' size={40} />
                    <span className='fw-bold mx-2' style={{ fontSize: "25px" }}>0.0</span>
                </div>
                <span className='text-muted mx-1'>рејтинг</span>
            </Col>
            <Col md={{ span: 2, offset: 2 }}>
                <a href="/messages">
                <Button
                    className='text-white border-secondary shadow-bottom'
                    style={{ backgroundColor: '#DC6628', padding: '5px 60px' }}
                >
                    <TiMessage size={30} /> Порака
                </Button>
                </a>
            </Col>
        </Card.Body>
    )
}

export default UserDetails;