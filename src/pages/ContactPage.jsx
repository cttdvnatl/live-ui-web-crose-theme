import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => (
    <div>
        <Header />
            <div className="map-area mt-30">
                    <iframe title="map" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.177549303099!2d-84.15922744913351!3d33.93656128054265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a38e4dc6feff%3A0xa3ef814945ace642!2sHoly%20Vietnamese%20Martyrs%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1573065797357!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen=""/>
            </div>
            <section className="contact-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-content-area">
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <div className="contact-content contact-information">
                                            <h4>Contact</h4>
                                            <p>info@hvmatl.org</p>
                                            <p>(770) 921-0077</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="contact-content contact-information">
                                            <h4>Address</h4>
                                            <p>4545-A Timmers Way</p>
                                            <p>Norcross, GA 30093</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="contact-content contact-information">
                                            <h5>Parish Office Opening Hours</h5>
                                            <p>Mon-Sat: 9:30am - 12:30pm || 1:30pm - 5pm</p>
                                            <h5>Finance Office Opening Hours</h5>
                                            <p>Mon-Sat: 9:30am - 2:30pm, Sun 9:00am - 5pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-form section-padding-0-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h2>Leave A Message</h2>
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
                                                <label htmlFor="message">Message*:</label>
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

export default ContactPage;