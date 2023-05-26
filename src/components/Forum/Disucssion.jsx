import React, { useEffect, useState } from 'react'
import CommentList from '../Comments/CommentList';
import ForumService from '../../services/ForumService';
import { useParams } from 'react-router-dom';
;
const Disucssion = () => {

    const { getDiscussionById, addComment } = ForumService();

    const { discussionId } = useParams();

    const [data, setData] = useState({});

    const addReplayOrComment = async (parentId, comment) => {
        return await addComment(discussionId, parentId, comment)
    }

    useEffect(() => {
        getDiscussionById(discussionId).then((res) => {
            setData(res);
        })
    }, [discussionId])

    return (
        <CommentList comments={data?.comments} addReply={addReplayOrComment} />
    )
}

export default Disucssion