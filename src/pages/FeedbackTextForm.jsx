import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FeedbackTextForm = () => {
    const form = useRef();
    const submit = useRef();
    const nameInput = useRef();
    const emailInput = useRef();
    const messageInput = useRef();
    const textErrorMessage = useRef();
    const captchaErrorMessage = useRef();
    const [captcha, setCaptcha] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (messageInput !== '' && captcha === true) {
            submit.current.remove();
            emailjs.sendForm('service_wepjlbi', 'template_xl0l0kq', form.current, '-ZHFDCmDLZL4Veu0z')
              .then((result) => {
                  //console.log(result.text);
                  window.location.href = "/form-success";
              }, (error) => {
                  //console.log(error.text);
                  window.location.href = "/form-error";
              });
        }
        if (nameInput.current.value === '' || emailInput.current.value === '' || messageInput.current.value === '') {
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
            <h1 style={{color: "black"}}>Feedback For The Church</h1>
            <form ref={form} onSubmit={sendEmail}>
                {/* False Form/Honeypot */}
                <input type="text" name="_form" style={{display: 'none'}}/>
                <div class="feedback-form-row">
                    <div class="feedback-form-input feedback-form-input-name">
                        <input placeholder=" Name (optional)" ref={nameInput} type="text" name="user_name" />
                    </div>
                    <div class="feedback-form-input feedback-form-input-email">
                        <input placeholder=" Email (optional)" ref={emailInput} type="email" name="user_email" />
                    </div>
                </div>
                <div class="feedback-form-row">
                    <div class="feedback-form-input feedback-form-input-date">
                        <textarea class="message" placeholder="Feedback Here" ref={messageInput} type="text" name="user_message" />
                    </div>
                </div>
                <h4 ref={textErrorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Fill in Required Fields</h4>
                <h4 ref={captchaErrorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Captcha Error</h4>
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

export default FeedbackTextForm; 