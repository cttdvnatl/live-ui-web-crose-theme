import React, {useState} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const PrayerRequest = () => {
    const [getPrayerReq, setPrayerReq] = useState({});
    const formChangeHandler = (event, prop) => {
        const prayerReq = getPrayerReq;
        prayerReq[prop] = event.target.value;
        setPrayerReq(prayerReq);
    }
    const submit = () => {
        axios.post('https://hvmatl-backend.herokuapp.com/authentication', {
            username: 'anonymous',
            password: 'anonymous'
        }).then(auth => {
            axios({
                method: 'GET',
                url:'https://hvmatl-backend.herokuapp.com/prayerReq',
                headers: {
                    'Authorization': `Bearer ${auth.data.token}`
                },
                data: getPrayerReq
            }).then(res => {
                this.props.route.history.push("/");
            });
        })}

    return (
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
                                <form action="" method="POST">
                                    <div className="row">
                                        <div className="col-12 col-lg-4 col-sm-1">
                                            <div className="form-group">
                                                <label htmlFor="contact-name">Full Name*:</label>
                                                <input type="text" name="name" onChange={(e) => formChangeHandler(e, "fullName")} value={getPrayerReq.fullName} className="form-control" id="contact-name" placeholder="Full Name"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-sm-1">
                                            <div className="form-group">
                                                <label htmlFor="contact-email">Email*:</label>
                                                <input type="email" name="replyTo" onChange={(e) => formChangeHandler(e, "email")} value={getPrayerReq.email} className="form-control" id="contact-email" placeholder="your.email@gmail.com"/>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 col-sm-1">
                                            <div className="form-group">
                                                <label htmlFor="contact-number">Phone*:</label>
                                                <input type="text" name="phone" onChange={(e) => formChangeHandler(e, "phone")} value={getPrayerReq.phone} className="form-control" id="contact-number" placeholder="(404) 000 0000"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Prayer Request*:</label>
                                                <textarea className="form-control" name="message" onChange={(e) => formChangeHandler(e, "message")} value={getPrayerReq.message} id="message" cols="30" rows="10" placeholder="Message"/>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" value="Send" onClick={submit} className="crose-btn mt-15">Submit Now</button>
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
}

export default PrayerRequest;