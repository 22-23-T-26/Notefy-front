import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

const NewMaterialModal = ({ showModal, handleClose }) => {
  const closeModal = () => {
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={closeModal}>
          Close
        </Button>
        <Button variant='primary' onClick={closeModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMaterialModal;