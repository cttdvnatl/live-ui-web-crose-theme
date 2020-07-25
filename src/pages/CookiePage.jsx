import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePage = () => (
    <>
        <Header/>
        <div className="container-fluid text-center">
            <h3 className="cookies">Usage of Cookies</h3>
            <p className="cookies">We use cookies for web analytic applications to help us understand user interactions within the website, your preferred language, and potentially other services.</p>
        </div>
        <Footer/>
    </>
);

export default CookiePage;