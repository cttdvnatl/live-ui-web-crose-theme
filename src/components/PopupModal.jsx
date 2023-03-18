import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
const PopupModal = (prop) => {
    return (
        <Modal show={prop.show} size="xl" onHide={prop.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>{prop.content.title}</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {prop.content.hasOwnProperty('fileExt') && prop.content.fileExt === 'jpg' ?
                    <img src={prop.content.url} alt="donation_instruction"/> :
                    <ResponsiveEmbed>
                        <embed aria-label={prop.content.title} src={prop.content.url}/>
                    </ResponsiveEmbed>}
            </Modal.Body>
            {prop.content.confirm !== undefined && prop.content.confirm !== "" ?
                <Modal.Footer>
                    <Button href={prop.content.confirm} bsPrefix="crose-btn" >OK</Button>
                </Modal.Footer>
                : null}
        </Modal>
    );
};
export default PopupModal;