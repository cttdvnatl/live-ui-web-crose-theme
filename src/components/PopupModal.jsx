import React from 'react';
import Modal from 'react-bootstrap/Modal';
const PopupModal = (prop) => {
    console.log(JSON.stringify(prop));
    return (
        <Modal show={prop.show} size="xl" onHide={prop.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>{prop.content.title}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <iframe title={prop.content.title} src={prop.content.url} style={{"width":"100%", "height":"auto"}}/>
            </Modal.Body>
        </Modal>
    );
};
export default PopupModal;