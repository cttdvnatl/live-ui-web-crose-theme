import React from 'react';
import {submitForm, updateForm} from '../store/dispatch/dispatch';
import {connect} from 'react-redux';
import * as formType from '../store/formType';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const AllSoulsReqPopupModal = (props) => {
    const formChangeHandler = (event, prop) => {
        const formData = props.soulReqForm;
        formData[prop] = event.target.value;
        props.updateForm(formData);
    }
    const onSubmit = () => {
        console.log(JSON.stringify(props.soulReqForm));
        props.submit(props.soulReqForm, props.token || sessionStorage.getItem('token'), props.onSubmit);
    }
    return (
        <Modal show={props.show} size="xl" onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>Xin cầu cho linh hồn</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="member-id">Member ID*:</label>
                            <input type="text" name="id" onChange={(e) => formChangeHandler(e, "memberId")} className="form-control" id="member-id" required autoComplete="on"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="contact-name">Requester:</label>
                            <input type="text" name="name" onChange={(e) => formChangeHandler(e, "requestor")} className="form-control" id="contact-name" required autoComplete="on"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="contact-email">Email:</label>
                            <input type="email" name="email" pattern="^[^0-9]\w*@.+\.[a-zA-Z]{3}$" onChange={(e) => formChangeHandler(e, "email")} className="form-control" id="contact-email" autoComplete="on"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                            <label htmlFor="soul-name">Pray For*:</label>
                            <input type="text" name="soul" onChange={(e) => formChangeHandler(e, "soulName")} className="form-control" id="soul-name" required autoComplete="on"/>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} bsPrefix="crose-btn mt-15">Cancel</Button>
                <Button onClick={onSubmit} bsPrefix="crose-btn mt-15">Submit</Button>
            </Modal.Footer>
        </Modal>
    );
};
const mapStateToProp = (state) => ({
    token: state.auth.token,
    soulReqForm: state.form.allSoulReq
});

const mapDispatchToProp = (dispatch) => ({
    submit: (formData, token, callback) => submitForm(dispatch, formType.ALL_SOUL_REQ, formData, token, callback),
    updateForm: (updateData) => updateForm(dispatch, formType.ALL_SOUL_REQ, updateData),
})
export default connect(mapStateToProp, mapDispatchToProp)(AllSoulsReqPopupModal);