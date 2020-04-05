import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ActivitiesPage = () => (
    <>
    <Header />
    <section className="section-padding-25">
        <h2 className="section-heading">Sinh Hoạt Giáo Xứ</h2>
        <iframe className="center-50" title="Sinh Hoạt Giáo Xứ" src="https://docs.google.com/document/d/e/2PACX-1vTeVX_F_3ZImj6feG5XpDdof9_xQ8gIfxYdFxRYbPCRgnBu5Z8aFIZPzDj-2CtK4B7z_cBKy4gY_XLC/pub?embedded=true"
            frameBorder="0"
            style={{'width':"90%", 'height':"1000px"}}/>
    </section>
    <Footer />
    </>
);

export default ActivitiesPage;