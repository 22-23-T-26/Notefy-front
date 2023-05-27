import React, { useEffect, useState } from 'react'
import CommentList from '../Comments/CommentList';
import ForumService from '../../services/ForumService';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ForumPost from './ForumPost';
;
const Disucssion = () => {

    const { getDiscussionById, addComment } = ForumService();

    const { discussionId } = useParams();

    const [data, setData] = useState({});
    const [numOfComments, setNumOfComments] = useState(0);
    const addReplayOrComment = async (parentId, comment, commentCount) => {
        if (commentCount) {
            setNumOfComments(commentCount);
        }
        return await addComment(discussionId, parentId, comment)

    }

    useEffect(() => {
        getDiscussionById(discussionId).then((res) => {
            setData(res);
            setNumOfComments(res.comments.length);
        })
    }, [discussionId])

    return (
        <>
            <ForumPost id={discussionId}  {...data} numberOfComments={numOfComments} />
            <CommentList comments={data?.comments} addReply={addReplayOrComment} />
        </>
    )
}

export default Disucssion