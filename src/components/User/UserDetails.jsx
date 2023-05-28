import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { TiMessage } from 'react-icons/ti';
import "./RatingStars.css";
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function UserDetails() {


    return (
        <Card.Body className='d-flex mt-5 align-items-center'>
            <Col md={{ span: 3 }}>
                <Image
                    style={{ width: '250px', height: '250px' }}
                    src='https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg'
                    roundedCircle
                />
            </Col>
            <Col md={{ span: 4 }} className='text-left'>
                <h1 style={{ fontWeight: 'bold' }}>Билјана Трајковска</h1>
                <p className='text-muted text-left mb-0 fw-500' style={{ fontSize: '20px' }}>
                    <span style={{ color: '#DC6628' }}>@biljana.trajkovska</span>
                </p>
                <p className='text-muted'>студент</p>
                <div className='d-flex align-items-center'>
                    <BsStarFill className='text-orange' size={40} />
                    <BsStarFill className='text-orange' size={40} />
                    <BsStarFill className='text-orange' size={40} />
                    <BsStar className='text-gray' size={40} />
                    <BsStar className='text-gray' size={40} />
                    <span className='fw-bold mx-2' style={{ fontSize: '25px' }}>3.0</span>
                </div>
                <span className='text-muted mx-1'>рејтинг</span>
            </Col>
            <Col md={{ span: 2, offset: 2 }}>
                <Link to="/messages">
                    <Button
                        className='text-white border-secondary shadow-bottom'
                        style={{ backgroundColor: '#DC6628', padding: '5px 60px' }}
                    >
                        <TiMessage size={30} /> Порака
                    </Button>
                </Link>
            </Col >
        </Card.Body >
    );
}

export default UserDetails;
