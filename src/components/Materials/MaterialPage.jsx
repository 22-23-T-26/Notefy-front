import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import {BsStar, BsStarFill} from "react-icons/bs";
import {FaArrowLeft} from "react-icons/fa";
import { useLocation } from "react-router-dom";

function MaterialPage(props) {
    const location = useLocation();
    const materialData = location.state && location.state.materialData;

    return (
        <div style={{backgroundColor:"#F0F0F0", paddingRight:"50px", minHeight: "90vh"}}>
                <Row>
                    <div style={{paddingLeft:"50px", paddingTop:"20px"}} className="text-left">
                        <FaArrowLeft/>
                        <a style={{textDecoration:"none", color:"black"}} href="/materials"> Назад кон материјали</a>
                    </div>
                    <Col md={3}>
                        <Card.Img
                            style={{ paddingTop:"30px", width: "250px", height: "350px" }}
                            variant="top"
                            src="https://machinelearningmastery.com/wp-content/uploads/2022/11/C4ML-400.png"
                            alt="Hero Image"
                        />
                    </Col>
                    <Col md={9} style={{paddingTop:"30px"}}>
                        <h1 style={{textAlign:"left"}}>{materialData.title}</h1>
                        <div className="text-left">
                            <span className="text-left" style={{textAlign:"left"}}>од </span>
                            <a className="text-left" style={{textAlign:"left", color:"#DC6628"}} href="/user">@biljana.trajkovska</a>

                        </div>

                        <div className="text-left">
                                    <BsStarFill className='text-orange' size={30} />
                                    <BsStarFill className='text-orange' size={30} />
                                    <BsStarFill className='text-orange' size={30} />
                                    <BsStar className='text-gray' size={30} />
                                    <BsStar className='text-gray' size={30} />
                                    <span className='fw-bold mx-2' style={{ fontSize: '25px' }}>3.0</span>
                        </div>
                        <p className="text-left">оцена</p>
                        <div className="text-left">
                            <p>{materialData.description}</p>
                        </div>
                        <div className="text-left">
                            <Button variant="secondary" className="w-25" onClick={() => window.open(materialData.url, '_blank')}>
                                Преземи
                            </Button>
                        </div>
                    </Col>
                </Row>
        </div>
    );
}

export default MaterialPage;
