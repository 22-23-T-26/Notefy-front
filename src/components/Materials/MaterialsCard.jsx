import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { RiFileTextLine } from 'react-icons/ri';

const MaterialsCard = ({data}) => {

    return (
        <Card className="d-flex flex-row align-items-center justify-content-between" style={{ width: '80%', height: '80px', background: "#D9D9D9", borderRadius: "10px" }}>
            <div className="d-flex flex-row align-items-center">
                <RiFileTextLine className='text-dark' size={60}/>
                <div className='d-flex flex-column justify-content-left' style={{ marginLeft: '15px'}}>
                    <span className="text-left" style={{fontWeight: '700', fontSize: '16px' }}>{data.title}</span>
                    <span className="text-left" style={{fontWeight: '500', fontSize: '16px' }}>од {data.createdBy}</span>
                </div>
            </div>
            <span style={{ marginRight: '30px'}}>
                пред {data.dateOfCreation}
            </span>
        </Card>
    )
}

export default MaterialsCard;