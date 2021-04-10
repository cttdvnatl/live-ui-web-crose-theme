import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Upload = (prop) => {
    return (
        <div>
            <Header />
            <div class="events-area section-padding-100">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 about-content">
                            <h2>Homepage Section</h2>
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                    Picture 1
                                    </Form.Label>
                                    <Form.Group>
                                        <Form.File id="picture1"/>
                                    </Form.Group>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                    Picture 2
                                    </Form.Label>
                                    <Form.Group>
                                        <Form.File id="picture2"/>
                                    </Form.Group>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Save</Button>
                                    </Col>
                                </Form.Group>
                                </Form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Upload;