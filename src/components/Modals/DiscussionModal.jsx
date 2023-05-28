import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    description: Yup.string()
        .required('Description is required'),
});
function DiscussionModal(props) {
    const formik = useFormik({
        initialValues: { title: '', description: '' },
        validationSchema: validationSchema,
        onSubmit: values => {
            props.onAdd(values);
            formik.resetForm();
            props.onHide();
        },
    });
    const handleClose = () => {
        formik.resetForm();
        props.onHide();
    }

    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Започни нова дискусија</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            className={'form-control' + (formik.errors.title && formik.touched.title ? ' is-invalid' : '')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="invalid-feedback">{formik.errors.title}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className={'form-control' + (formik.errors.description && formik.touched.description ? ' is-invalid' : '')}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                        />
                        {formik.touched.description && formik.errors.description ? (
                            <div className="invalid-feedback">{formik.errors.description}</div>
                        ) : null}
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={formik.handleSubmit}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DiscussionModal;
