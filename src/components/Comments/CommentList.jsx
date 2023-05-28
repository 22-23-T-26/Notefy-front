import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { Container } from 'react-bootstrap';


const CommentList = ({ comments, addReply }) => {
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [internalComments, setInternalComments] = useState(comments);
    useEffect(() => {
        setInternalComments(comments);
    }, [comments]);

    const handleAddReply = async () => {
        const res = await addReply(null, replyText, internalComments.length + 1);
        setInternalComments([res, ...internalComments]);
        setReplyText('');
        setShowReplyInput(false);
    };
    return (
        <Container className='text-align-start'>
            {!showReplyInput && <div style={{ color: "gray", cursor: "pointer", textAlign: "left" }} className='btn btn-sm btn-outline-dark mt-4' onClick={() => setShowReplyInput(!showReplyInput)}>Add Comment</div>}
            {showReplyInput && (
                <div className='mt-2 d-flex flex-start flex-column align-items-start'>
                    <div><textarea cols="65" rows="3" value={replyText} onChange={e => setReplyText(e.target.value)} /></div>
                    <div>
                        <div style={{ cursor: "pointer" }} className="btn btn-outline-danger btn-md" onClick={() => {
                            setShowReplyInput(!showReplyInput);
                            setReplyText('');
                        }}>Close</div>
                        <div style={{ cursor: "pointer" }} className="btn btn-outline-dark btn-md ms-2" onClick={handleAddReply}>Post</div>
                    </div>
                </div>
            )
            }
            {
                internalComments?.map(comment => (
                    <Comment key={comment.id} comment={comment} addReply={addReply} />
                ))
            }
        </Container >
    );
};

export default CommentList;
