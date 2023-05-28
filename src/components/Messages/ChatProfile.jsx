import React from "react";
import { Button, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ColoredCricle.css';
import MaterialsChatCard from "./MaterialsChatCard";

const ChatProfile = () => {
    let navigate = useNavigate();

    const navigateToUser = () => {
        navigate('/user');
    };

    return (
        <div>
            <div className="container align-items-center pt-5 pl-5">
                <Col className="pb-2">
                    <div style={ { position: 'relative', width: '200px', left: '60px' } }>
                        <Image style={ { width: "200px", height: "200px" } }
                               src="https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg"
                               roundedCircle/>
                        <span className="colored-circle"/>
                    </div>
                </Col>
                <h5>Билјана </h5>
                <h5>Трајковска</h5>
                <div className="mt-4 mb-4">
                    <Button onClick={ navigateToUser } className='text-dark border-secondary shadow-bottom'
                            style={ { backgroundColor: "#8B9696FF", padding: "5px 60px" } }>
                        Отвори профил
                    </Button>
                </div>
            </div>
            <span>Постирани материјали</span>
            <div className='border border-secondary mb-3 pt-0' style={ { width: '350px' } }/>
            <div className="mx-auto">
                <div className='d-flex flex-column align-items-center justify-content-center gap-3'>
                    <MaterialsChatCard/>
                    <MaterialsChatCard/>
                    <MaterialsChatCard/>
                </div>
            </div>
        </div>
    )
}

export default ChatProfile;