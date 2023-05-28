import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const MaterialsFilter = ({ onFilterChange }) => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    const handlePaymentChange = (eventKey) => {
        setSelectedPayment(eventKey);
        onFilterChange(eventKey);
    };
    
    const handleCategoryChange = (eventKey) => {
        setSelectedCategory(eventKey);
        onFilterChange(eventKey);
    };

    return (
        <div className='d-flex flex-column align-items-center gap-3 p-3' style={{width:"70%", height: "280px",background: "#D9D9D9", borderRadius: "10px", marginTop: "145px"}}>
            <div className='w-100'>
                <h6 style={{width: '80%', textAlign: 'left'}}>Категорија</h6>
                <Dropdown onSelect={handleCategoryChange} style={{ height: '30px', backgroundColor: '#FFFFFF', borderRadius: "10px" }}>
                    <Dropdown.Toggle id="dropdown-basic" style={{ height:'30px', backgroundColor: 'white', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'black', border: 'none'}}>
                    </Dropdown.Toggle>
                    {selectedCategory || 'Избери категорија'}

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey='BOOK'>BOOK</Dropdown.Item>
                        <Dropdown.Item eventKey='SCRIPT'>SCRIPT</Dropdown.Item>
                        <Dropdown.Item eventKey='EXAM'>EXAM</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
            </div>
            <div className='w-100'>
                <h6 style={{width: '80%', textAlign: 'left'}}>Плаќање</h6>
                <Dropdown onSelect={handlePaymentChange}  style={{ height: '30px', backgroundColor: '#FFFFFF', borderRadius: "10px" }}>
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
                    {selectedRating || 'Избери оцена'}
                    <Dropdown.Menu>
                        <Dropdown.Item>1</Dropdown.Item>
                        <Dropdown.Item>2</Dropdown.Item>
                        <Dropdown.Item>3</Dropdown.Item>
                        <Dropdown.Item>4</Dropdown.Item>
                        <Dropdown.Item>5</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>  
            </div>
            
        </div>
    )
}

export default MaterialsFilter;