import React, { useState, useEffect } from "react";
import DiscussionCard from "./DiscussionCard";
import Pagination from "./Pagination";
import DiscussionModal from "../Modals/DiscussionModal";
import ForumService from "../../services/ForumService";
import { Container } from "react-bootstrap";

function Forum() {
    const [modalShow, setModalShow] = useState(false);
    const [discussions, setDiscussions] = useState([]);
    const [pageInfo, setPageInfo] = useState({});

    const { getDiscussions } = ForumService();

    const loadDiscussions = async (page) => {
        const { content, ...pageInfo } = await getDiscussions(page);
        setDiscussions(content);
        setPageInfo(pageInfo);
    }
    useEffect(() => {

        loadDiscussions(1);
    }, []);

    return (
        <Container>
            <h1>Форум за дискусии</h1>
            <div className="cursor-pointer" onClick={() => setModalShow(true)}>+ Започни нова дискусија</div>
            <DiscussionModal show={modalShow} onHide={() => setModalShow(false)} />
            {discussions?.map(discussion => <DiscussionCard key={discussion.id} {...discussion} />)}
            <Pagination {...pageInfo} onClick={loadDiscussions} />
        </Container>
    );
}

export default Forum;
