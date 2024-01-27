import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Lich = () => (
    <>
    <Header/>
    <iframe title="calendar" style={{minHeight: "500px"}} className="center-50" height="600px" width="100%" src="https://hvmatl.s3.us-east-2.amazonaws.com/gallery/HVM_PDF/ChurchCalendar2024.pdf"></iframe>
    <Footer/>
    </>
)

export default Lich;