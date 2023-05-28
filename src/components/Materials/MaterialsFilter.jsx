import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const MaterialsFilter = () => {

    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedOrder, setSelectedOrder] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    return (
        <div className='d-flex flex-column align-items-center gap-3 p-3' style={{width:"70%", height: "350px",background: "#D9D9D9", borderRadius: "10px", marginTop: "145px"}}>
            <div className='w-100'>
                <h6 style={{width: '80%', textAlign: 'left'}}>Предмет</h6>
                <Dropdown style={{ height: '30px', backgroundColor: '#FFFFFF', borderRadius: "10px" }}>
                    <Dropdown.Toggle id="dropdown-basic" style={{ height:'30px', backgroundColor: 'white', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'black', border: 'none'}}>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
            </div>
            <div className='w-100'>
                <h6 style={{width: '80%', textAlign: 'left'}}>Плаќање</h6>
                <Dropdown onSelect={eventKey => setSelectedPayment(eventKey)} style={{ height: '30px', backgroundColor: '#FFFFFF', borderRadius: "10px" }}>
                    <Dropdown.Toggle id="dropdown-basic" style={{ height:'30px', backgroundColor: 'white', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'black', border: 'none'}}>
                    </Dropdown.Toggle>
                    {selectedPayment || 'Избери плаќање'}

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey='Со плаќање'>Со плаќање</Dropdown.Item>
                        <Dropdown.Item eventKey='Бесплатно'>Бесплатно</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
            </div>
            <div className='w-100'>
                <h6 style={{width: '80%', textAlign: 'left'}}>Оцена</h6>
                <Dropdown style={{ height: '30px', backgroundColor: '#FFFFFF', borderRadius: "10px" }}>
                    <Dropdown.Toggle id="dropdown-basic" style={{ height:'30px', backgroundColor: 'white', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'black', border: 'none'}}>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
            </div>
            <div className='w-100'>
                <Button style={{width:'50%', background: "black", borderRadius: "12px", color: 'white', border: "0"}}>
                Примени
                </Button>
            </div>
            
        </div>
    )
}

export default MaterialsFilter;