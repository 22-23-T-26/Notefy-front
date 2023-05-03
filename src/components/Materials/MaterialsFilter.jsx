import React from 'react';
import { Dropdown } from 'react-bootstrap';
const MaterialsFilter = () => {

    return (
        <div className='d-flex flex-column align-items-center gap-3 p-3' style={{width:"70%", height: "400px",background: "#D9D9D9", borderRadius: "10px", marginTop: "145px"}}>
            <div className='w-100'>
                <h6 style={{width: '80%', textAlign: 'left'}}>Факултет</h6>
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
                <h6 style={{width: '80%', textAlign: 'left'}}>Редослед</h6>
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
        </div>
    )
}

export default MaterialsFilter;