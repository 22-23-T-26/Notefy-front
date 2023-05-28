import { Card } from "react-bootstrap";
import { RiFileTextLine } from "react-icons/ri";
import React from "react";

const MaterialsChatCard = () => {

    return (
        <Card className="d-flex flex-row align-items-center justify-content-between"
              style={ { width: '90%', height: '60px', background: "#D9D9D9", borderRadius: "20px" } }>
            <div className="d-flex flex-row align-items-center">
                <RiFileTextLine className='text-dark' style={ { paddingLeft: '10px' } } size={ 40 }/>
                <div className='d-flex flex-column justify-content-left' style={ { marginLeft: '15px' } }>
                    <span className="text-left"
                          style={ { fontWeight: '700', fontSize: '14px' } }>Калкулус 2 Скрипта
                    </span>
                </div>
            </div>
            <span style={ { marginRight: '30px', fontSize: '14px' } }>
                    пред 1 час
                </span>
        </Card>
    )
}

export default MaterialsChatCard;