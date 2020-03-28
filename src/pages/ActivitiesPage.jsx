import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ActivitiesPage = () => (
    <>
    <Header />
    <section className="section-padding-25">
        <h2 className="section-heading">Sinh Hoạt Giáo Xứ</h2>
        <iframe title="Sinh Hoạt Giáo Xứ" src="news/UPDATE.html"
            frameBorder="0"
            style={{'width':"100%", 'height':"1000px"}}/>
    </section>
    <Footer />
    </>
);

export default ActivitiesPage;