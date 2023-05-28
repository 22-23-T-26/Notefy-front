import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CgNotes } from 'react-icons/cg';

function UserCard() {

    return (
        <Card className='my-3' style={{ backgroundColor: "#EEEEEE"}}>
            <Row className='align-items-center p-3'>
                <Col md={1}>
                    <CgNotes size={40}/>
                </Col>
                <Col md={{span: 4, offset:1}} className='text-left'>
                    <h5>Калкулус 2 Скрипта</h5>
                    <span>од</span>
                    <span style={{ color: '#DC6628' }}> @biljana.trajkovska</span>
                </Col>
                <Col md={{span: 2, offset: 4}}>
                <span>
                    пред 4 дена
                </span>
                </Col>
            </Row>
        </Card>
    )
}

export default UserCard;