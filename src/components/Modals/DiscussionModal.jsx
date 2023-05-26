import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function DiscussionModal(props) {
    return (
        <Modal {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Започни нова дискусија</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DiscussionModal;
