import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

const Comment = ({ createdBy, comment, addReply }) => {
    const [showReplyInput, setShowReplyInput] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleAddReply = () => {
        addReply(comment.id, replyText);
        setReplyText('');
        setShowReplyInput(false);
    };

    return (
        <div style={{ marginLeft: '20px', padding: '10px' }}>
            <div style={{
                background: "#F5F5F5",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid darkgray",
                textAlign: "left"
            }}>
                <div className='d-flex justify-content-start align-items-center gap-4'>
                    <div>{comment.createdBy}:</div>
                    <div>{comment.text}</div>
                </div>
                {!showReplyInput && <div style={{ color: "gray", cursor: "pointer" }} onClick={() => setShowReplyInput(!showReplyInput)}>Reply</div>}
            </div>
            {showReplyInput && (
                <div className='mt-2 d-flex flex-start flex-column align-items-start'>
                    <div><textarea cols="65" rows="3" value={replyText} onChange={e => setReplyText(e.target.value)} /></div>
                    <div>
                        <div style={{ cursor: "pointer" }} class="btn btn-outline-danger btn-md" onClick={() => {
                            setShowReplyInput(!showReplyInput);
                            setReplyText('');
                        }}>Close</div>
                        <div style={{ cursor: "pointer" }} class="btn btn-outline-dark btn-md ms-2" nClick={handleAddReply}>Post</div>
                    </div>
                </div>
            )
            }
            {
                comment.replies.length > 0 && (
                    comment.replies.map(reply => (
                        <Comment key={reply.id} comment={reply} addReply={addReply} isRootComment={false} />
                    ))
                )
            }
        </div >
    );
};
export default Comment;
