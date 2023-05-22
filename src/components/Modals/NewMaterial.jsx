import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const NewMaterialModal = ({ showModal, handleClose }) => {
  const closeModal = () => {
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Објави материјали</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2" controlId="formTitle">
            <Form.Label>Наслов</Form.Label>
            <Form.Control style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formFaculty">
            <Form.Label>Факултет</Form.Label>
            <Form.Control style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formSubject">
            <Form.Label>Предмет</Form.Label>
            <Form.Control style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formCategory">
            <Form.Label>Категорија</Form.Label>
            <Form.Control style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="formDescription">
            <Form.Label>Опис</Form.Label>
            <Form.Control style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <div className='d-flex flex-row justify-content-center gap-5'>
            <Form.Group className="mb-2" controlId="formPicture" style={{width:'45%'}}>
              <Form.Label>Слика</Form.Label>
              <Form.Control style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="file" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formDocument" style={{width:'45%'}}>
              <Form.Label>Документ</Form.Label>
              <Form.Control style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="file" placeholder="" />
            </Form.Group>
          </div>
          <div className='d-flex flex-row justify-content-center gap-5'>
            <Button onClick={closeModal} style={{width:'50%', background: "#F4F4F4", borderRadius: "12px", color: 'black', border: "0"}}>
              Откажи
            </Button>
            <Button onClick={closeModal} type='submit' style={{width:'50%', background: "#D7D7D7", borderRadius: "12px", color: 'black', border: "0"}}>
              Објави
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewMaterialModal;