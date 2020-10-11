import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PrayerRequest = () => {
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState({
        title:"",
        content:""
    })
    const onHide = () => {
        setShow(false);
    }
    const [getPrayerReq, setPrayerReq] = useState({
        memberId:"",
        name: "",
        email:"",
        phone:"",
        message:"",
        massTime: "7:30 AM",
        massDate: "",
    });
    const formChangeHandler = (event, prop) => {
        const prayerReq = getPrayerReq;
        prayerReq[prop] = event.target.value;
        setPrayerReq(prayerReq);
    }

    const submit = (event) => {
        event.preventDefault();
        axios.post('https://hvmatl-backend.herokuapp.com/authentication', {
            username: 'anonymous',
            password: 'anonymous'
        }).then(auth => {
            axios.post('https://hvmatl-backend.herokuapp.com/prayerRequest', getPrayerReq, {
                headers: {
                    'Authorization': `Bearer ${auth.data.token}`,
                }
            }).then(() => {
                setShow(true);
                setModalContent({
                    title: "Success",
                    content: "Prayer Request Submitted !"
                });
            }).catch(() => {
                setShow(true);
                setModalContent({
                    title: "Failed",
                    content: "Prayer Request Failed To Submit. Please try again later"
                });
            });
        });
    }

    return (
        <div>
            <Header/>
            <div className="contact-form section-padding-0-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>Please submit your prayer request.</h2>
                                <p>Your email address will not be published. Required fields are marked.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-form-area">
                                <form onSubmit={submit}>
                                    <div className="row">
                                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Member ID*:</label>
                                                <input type="text" name="name" onChange={(e) => formChangeHandler(e, "memberId")} className="form-control" id="contact-name" placeholder="Member ID" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label>
                                                <input type="email" name="email" pattern="^[^0-9]\w*@.+\.[a-zA-Z]{3}$" onChange={(e) => formChangeHandler(e, "email")} className="form-control" id="contact-email" placeholder="your.email@gmail.com"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone:</label>
                                                <input type="tel" name="phone" pattern="[0-9]{10}" onChange={(e) => formChangeHandler(e, "phone")} className="form-control" id="contact-number" placeholder="(404) 000 0000"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="name">Pray For*:</label>
                                                <input type="text" name="name" onChange={(e) => formChangeHandler(e, "name")} className="form-control" id="contact-name" placeholder="Full Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="massDate">Mass Date*:</label>
                                                <input type="date" name="massDate" onChange={(e) => formChangeHandler(e, "massDate")} className="form-control" id="contact-name" placeholder="Mass Date" required/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="massTime">Mass Time*:</label>
                                                <select name="massTime" onChange={(e) => formChangeHandler(e, "massTime")} className="form-control" id="mass-time" required>
                                                    <option selected>7:30 AM</option>
                                                    <option>9:30 AM</option>
                                                    <option>11:30 AM</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Prayer Request*:</label>
                                                <textarea className="form-control" name="message" onChange={(e) => formChangeHandler(e, "message")} id="message" cols="30" rows="10" placeholder="Message"/>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button value="submit" className="crose-btn mt-15">Submit Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Modal show={show} size="sm" centered onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3>{modalContent.title}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="text-center">{modalContent.content}</h5>
                </Modal.Body>
                    <Modal.Footer>
                        <Button href="/PrayerRequest" bsPrefix="crose-btn">OK</Button>
                    </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PrayerRequest;