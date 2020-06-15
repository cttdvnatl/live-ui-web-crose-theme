import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrayerRequest = () => (
    <div>
        <Header />

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
                                <form action="https://formspree.io/xzbbjwra" method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="contact-name">Full Name*:</label>
                                                <input type="text" name="name" className="form-control" id="contact-name" placeholder="Full Name"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="contact-email">Email*:</label>
                                                <input type="email" name="replyTo" className="form-control" id="contact-email" placeholder="your.email@gmail.com"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="contact-number">Phone*:</label>
                                                <input type="text" name="phone" className="form-control" id="contact-number" placeholder="(404) 000 0000"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Prayer Reuqest*:</label>
                                                <textarea className="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"/>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" value="Send" className="crose-btn mt-15">Submit Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <Footer />
    </div>
);

export default PrayerRequest;