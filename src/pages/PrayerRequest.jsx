import React, {useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrayerReqForm from '../components/PrayerRequestForm';

const PrayerRequest = () => {
    const [getPrayerReq, setPrayerReq] = useState({
        fullName: "",
        email:"",
        phone:"",
        message:""
    });
    const formChangeHandler = (event, prop) => {
        const prayerReq = getPrayerReq;
        prayerReq[prop] = event.target.value;
        setPrayerReq(prayerReq);
        console.log(JSON.stringify(getPrayerReq));
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
                            <PrayerReqForm onchange={formChangeHandler} value={getPrayerReq}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PrayerRequest;