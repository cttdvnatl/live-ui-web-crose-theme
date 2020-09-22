import React from 'react';
import axios from "axios";

const PrayerReqForm = (props) => {
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
                data: props.value
            }).then(res => {
                this.props.route.history.push("/");
            });
        })}

    return (
        <div className="contact-form-area">
            <form action="" method="POST">
                <div className="row">
                    <div className="col-12 col-lg-4 col-sm-1">
                        <div className="form-group">
                            <label htmlFor="contact-name">Full Name*:</label>
                            <input type="text" name="name" onChange={(e) => props.onchange(e, "fullName")} value={props.value.fullName} className="form-control" id="contact-name" placeholder="Full Name"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-1">
                        <div className="form-group">
                            <label htmlFor="contact-email">Email*:</label>
                            <input type="email" name="replyTo" onChange={(e) => props.onabort(e, "email")} value={props.value.email} className="form-control" id="contact-email" placeholder="your.email@gmail.com"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-sm-1">
                        <div className="form-group">
                            <label htmlFor="contact-number">Phone*:</label>
                            <input type="text" name="phone" onChange={(e) => props.onchange(e, "phone")} value={props.value.phone} className="form-control" id="contact-number" placeholder="(404) 000 0000"/>
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
    );
}

export default PrayerReqForm;