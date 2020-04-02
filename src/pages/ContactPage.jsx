import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => (
    <>
        <Header />
            <div class="map-area mt-30">
                    <iframe title="contact" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.177549303099!2d-84.15922744913351!3d33.93656128054265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a38e4dc6feff%3A0xa3ef814945ace642!2sHoly%20Vietnamese%20Martyrs%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1573065797357!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
            </div>
            <section class="contact-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="contact-content-area">
                                <div class="row">
                                    <div class="col-12 col-md-4">
                                        <div class="contact-content contact-information">
                                            <h4>Contact</h4>
                                            <p>info@cttdvnatl.org</p>
                                            <p>(770) 921-0077</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="contact-content contact-information">
                                            <h4>Address</h4>
                                            <p>4545-A Timmers Way</p>
                                            <p>Norcross, GA 30093</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="contact-content contact-information">
                                            <h4>Office Opening Hours</h4>
                                            <p>Mon-Sat: 9 am - 5 pm</p>
                                            <p>Sunday: 9:30 am - 3:30 pm </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="contact-form section-padding-0-100">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-heading">
                                <h2>Leave A Message</h2>
                                <p>Your email address will not be published. Required fields are marked.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col-12">
                            <div class="contact-form-area">
                                <form action="https://formspree.io/xzbbjwra" method="POST">
                                    <div class="row">
                                        <div class="col-12 col-lg-4">
                                            <div class="form-group">
                                                <label for="contact-name">Full Name*:</label>
                                                <input type="text" name="name" class="form-control" id="contact-name" placeholder="Full Name"></input>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4">
                                            <div class="form-group">
                                                <label for="contact-email">Email*:</label>
                                                <input type="email" name="_replyto" class="form-control" id="contact-email" placeholder="your.email@gmail.com"></input>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4">
                                            <div class="form-group">
                                                <label for="contact-number">Phone*:</label>
                                                <input type="text" name="phone" class="form-control" id="contact-number" placeholder="(404) 000 0000"></input>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="message">Message*:</label>
                                                <textarea class="form-control" name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12 text-center">
                                            <button type="submit" value="Send" class="btn crose-btn mt-15">Submit Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <Footer />
    </>
);

export default ContactPage;