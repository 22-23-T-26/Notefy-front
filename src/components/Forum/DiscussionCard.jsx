import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaHeart, FaComment } from 'react-icons/fa';

import dayjs from 'dayjs';
import 'dayjs/locale/mk'
import relativeTime from 'dayjs/plugin/relativeTime';

// Extend dayjs with the relativeTime plugin
dayjs.extend(relativeTime);

function formatTime(time) {
    const now = dayjs();
    const creationMoment = dayjs(time);

    return creationMoment.locale('mk').from(now);
}

function formatLikes(likes) {
    if (likes >= 1000000) {
        return (likes / 1000000).toFixed(2) + 'M';
    } else if (likes >= 1000) {
        return (likes / 1000).toFixed(2) + 'K';
    }
    return likes;
}


function DiscussionCard({ title, createdBy, createdTime, numberOfLikes, numberOfComments }) {
    return (
        <Card style={{ background: "#F5F5F5", borderRadius: "10px" }} >
            <Row className="ms-2 align-items-center">
                <Col className="w-75 d-flex col-8">
                    <Col className="d-flex flex-column align-items-center justify-content-center col-1">
                        <Row>{formatLikes(numberOfLikes)}</Row>
                        <Row><FaHeart /></Row>
                    </Col>
                    <Col className="d-flex flex-column col-11">
                        <div className="fs-5 fw-bold text text-start">{title}</div>
                        <div className="d-flex align-items-center">
                            <span>од {createdBy}</span>
                            <span className="mx-2">{formatLikes(numberOfComments)}</span>
                            {/* <FaComment /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none">
                                <path d="M0.833252 19.1666V2.66659C0.833252 2.16242 1.01277 1.73082 1.37179 1.37179C1.73082 1.01277 2.16242 0.833252 2.66659 0.833252H17.3333C17.8374 0.833252 18.269 1.01277 18.628 1.37179C18.9871 1.73082 19.1666 2.16242 19.1666 2.66659V13.6666C19.1666 14.1708 18.9871 14.6024 18.628 14.9614C18.269 15.3204 17.8374 15.4999 17.3333 15.4999H4.49992L0.833252 19.1666ZM2.66659 14.7437L3.74367 13.6666H17.3333V2.66659H2.66659V14.7437Z" fill="#1C1B1F" />
                            </svg>
                        </div>
                    </Col>
                </Col>
                <Col className="w-25 col-4">
                    {formatTime(createdTime)}
                </Col>
            </Row>
        </Card >
    );
}

export default DiscussionCard;
