import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import MaterialsService from '../../services/MaterialsService';

const NewMaterialModal = ({ showModal, handleClose }) => {
  const [formValues, setFormValues] = useState({});
  const formRef = useRef(null);
  const { CreateMaterial } = MaterialsService();

  const [isPaid, setIsPaid] = useState(false);
  const [price, setPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChangeCategory = event => {
    setSelectedCategory(event.target.value);
  };

  const closeModal = () => {
    handleClose();
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    formValues.paymentFlag = isPaid;
    formValues.price = isPaid ? parseInt(price) : 0;
    formValues.category = selectedCategory

    try {
      await CreateMaterial(formValues);
      closeModal();
    } catch (error) {
      console.error('Error creating material:', error);
    }
  };
  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Објави материјали</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="title">
            <Form.Label>Наслов</Form.Label>
            <Form.Control onChange={handleChange} style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="description">
            <Form.Label>Опис</Form.Label>
            <Form.Control onChange={handleChange} style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-2" controlId="subject">
            <Form.Label>Предмет</Form.Label>
            <Form.Control onChange={handleChange} style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          <Form.Group className='mb-2' controlId='category'>
            <Form.Label>Категорија</Form.Label>
            <Form.Select
              onChange={handleChangeCategory}
              value={selectedCategory}
              style={{ background: '#F4F4F4', borderRadius: '12px', boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              <option value=''>Select Category</option>
              <option value='BOOK'>BOOK</option>
              <option value='SCRIPT'>SCRIPT</option>
              <option value='EXAM'>EXAM</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-2" controlId="url">
            <Form.Label>Линк</Form.Label>
            <Form.Control onChange={handleChange} style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="text" placeholder="" />
          </Form.Group>

          {isPaid && (
            <Form.Group controlId="formPrice" className="mb-2">
              <Form.Label>Цена (мкд)</Form.Label>
              <Form.Control
                style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}}
                type="number"
                placeholder=""
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
          )}

          <Form.Group controlId="formPaid" className="mb-2">
            <Form.Check
              type="checkbox"
              label="Плаќање"
              checked={isPaid}
              onChange={(e) => setIsPaid(e.target.checked)}
            />
          </Form.Group>

          {/* <div className='d-flex flex-row justify-content-center gap-5'>
            <Form.Group className="mb-2" controlId="formPicture" style={{width:'45%'}}>
              <Form.Label>Слика</Form.Label>
              <Form.Control onChange={handleChange} style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="file" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formDocument" style={{width:'45%'}}>
              <Form.Label>Документ</Form.Label>
              <Form.Control onChange={handleChange} style={{background: "#F4F4F4", borderRadius: "12px", boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25);"}} type="file" placeholder="" />
            </Form.Group>
          </div> */}
          <div className='d-flex flex-row justify-content-center gap-5'>
            <Button onClick={closeModal} style={{width:'50%', background: "#F4F4F4", borderRadius: "12px", color: 'black', border: "0"}}>
              Откажи
            </Button>
            <Button type='submit' style={{width:'50%', background: "#D7D7D7", borderRadius: "12px", color: 'black', border: "0"}}>
              Објави
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewMaterialModal;