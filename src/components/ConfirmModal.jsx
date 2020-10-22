import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const ConfirmModal = (prop) => {
    return (
        <Modal show={prop.show} size="sm" onHide={prop.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>{prop.content.header}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>{prop.content.message}</h3>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={prop.onHide} bsPrefix="crose-btn">OK</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ConfirmModal;