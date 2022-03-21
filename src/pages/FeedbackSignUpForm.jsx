import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeedbackSignUpForm = () => {
    const form = useRef();
    const submit = useRef();
    const nameInput = useRef();
    const emailInput = useRef();
    const dateInput = useRef();
    const textErrorMessage = useRef();
    const captchaErrorMessage = useRef();
    const [captcha, setCaptcha] = useState(false);

    const setDate = (date) => {
        if (dateInput.current.value === '') {
            dateInput.current.value += date;
        }
        else {
            dateInput.current.value += ', ' + date;
        }
    }

    const clearDate = () => {
        dateInput.current.value = ''
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (nameInput.current.value !== '' && emailInput !== '' && dateInput !== '' && captcha === true) {
            submit.current.remove();
            emailjs.sendForm('service_wepjlbi', 'template_jbrsc2c', form.current, '-ZHFDCmDLZL4Veu0z')
              .then((result) => {
                  //console.log(result.text);
                  window.location.href = "/form-success";
              }, (error) => {
                  //console.log(error.text);
                  window.location.href = "/form-error";
              });
        }
        if (nameInput.current.value === '' || emailInput.current.value === '' || dateInput.current.value === '') {
            textErrorMessage.current.style.display = 'block';
        }
        if (captcha === false) {
            captchaErrorMessage.current.style.display = 'block';
        }
    };

    return (
        <>
        <Header/>
        <div class="feedback-page">
            <h1 style={{color: "black"}}>Sign Up For Feedback</h1>
            <form ref={form} onSubmit={sendEmail}>
                {/* False Form/Honeypot */}
                <input type="text" name="_form" style={{display: 'none'}}/>
                <div class="feedback-form-row">
                    <div class="feedback-form-input feedback-form-input-name">
                        <input placeholder=" Name" ref={nameInput} type="text" name="user_name" />
                    </div>
                    <div class="feedback-form-input feedback-form-input-email">
                        <input placeholder=" Email" ref={emailInput} type="email" name="user_email" />
                    </div>
                </div>
                <div class="feedback-form-row">
                    <h5>Click on dates to attend:</h5>
                </div>
                <div class="feedback-form-row feedback-form-row-dates">
                    <ul class="feedback-form-dates">
                        <h6>Người lớn:</h6>
                        <li onClick={() => setDate("Saturday, March 19, 9 am - 10:30 am")}>Thứ 7, Ngày 19, Tháng 3, 9 am - 10:30 am</li>
                        <li onClick={() => setDate("Monday, March 21, 7 pm - 8:30 pm")}>Thứ 2, Ngày 21, Tháng 3, 7 pm - 8:30 pm</li>
                        <li onClick={() => setDate("Saturday, March 26. 9 am - 10:30 am")}>Thứ 7, Ngày 26, Tháng 3, 9 am - 10:30 am</li>
                        <li onClick={() => setDate("Monday, March 28, 7 pm to 8:30 pm")}>Thứ 2, Ngày 28, Tháng 3, 7 pm - 8:30 pm</li>
                        <li onClick={() => setDate("Saturday, April 2, 9 am to 10:30 am")}>Thứ 7, Ngày 2, Tháng 4, 9 am - 10:30 am</li>
                        <li onClick={() => setDate("Monday, April 4, 7 pm to 8:30 pm")}>Thứ 2, Ngày 4, Tháng 4, 7 pm - 8:30 pm</li>
                    </ul>
                    <ul class="feedback-form-dates">
                        <h6>Thiếu nhi:</h6>
                        <li onClick={() => setDate("Sunday, April 3, 12:30 am")}>Chủ Nhật, Ngày 3, Tháng 4, 12:30 pm</li>
                    </ul>
                </div>
                <div class="feedback-form-row">
                    <span class="clear-date-button" onClick={() => clearDate()}>Clear Date(s)</span>
                </div>
                <div class="feedback-form-row">
                    <div class="feedback-form-input feedback-form-input-date">
                        <textarea readOnly placeholder=" Date(s)" ref={dateInput} type="text" name="user_date" />
                    </div>
                </div>
                <h4 ref={textErrorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Fill in ALL fields</h4>
                <h4 ref={captchaErrorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Captcha Failed</h4>
                <div class="captcha" style={{textAlign: 'center'}}>
                        <ReCAPTCHA
                            style={{margin: 'auto', display: 'inline-block'}}
                            sitekey="6LczhbgeAAAAACQXkqShyhhQmNLPlkHWyIDkAX3Q"
                            onChange={() => setCaptcha(true)}
                        />
                </div>
                <div class="feedback-form-row">
                    <input ref={submit} class="feedback-form-submit" type="submit" value="Send" />
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default FeedbackSignUpForm;