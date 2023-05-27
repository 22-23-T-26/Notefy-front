import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';
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
                    <RiStarSFill className='text-dark' size={40} style={{fill:"orange"}} />
                    <RiStarSFill className='text-dark' size={40} style={{fill:"orange"}}/>
                    <RiStarSFill className='text-dark' size={40} style={{fill:"orange"}}/>
                    <RiStarSLine className='text-dark' size={40} />
                    <RiStarSLine className='text-dark' size={40} />
                    <span className='fw-bold mx-2' style={{ fontSize: "25px", color:"orange" }}>3.0</span>
                </div>
                <span className='text-muted mx-1'>рејтинг</span>
            </Col>
            <Col md={{ span: 2, offset:2 }}>
                <Button className='text-dark border-secondary shadow-bottom' style={{ backgroundColor: "#EEEEEE", padding: "5px 60px" }}>
                    <TiMessage size={30} /> Порака
                </Button>
            </Col>
        </Card.Body>
    )
}

export default UserDetails;