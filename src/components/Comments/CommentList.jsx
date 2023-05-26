import React from 'react';
import Comment from './Comment';
import { Container } from 'react-bootstrap';


const CommentList = ({ comments, addReply }) => {
    return (
        <Container className='text-align-start'>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} addReply={addReply} isRootComment={true} />
            ))}
        </Container>
    );
};

export default CommentList;
