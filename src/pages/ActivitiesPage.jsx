import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';

const ActivitiesPage = () => {
    const t = useTranslation()

    return (
        <>
            <Header />
            <section className="section-padding-25">
                <h2 className="section-heading">{t('activities.title')}</h2>
                <iframe 
                    className="center-50" 
                    title="Sinh Hoạt Giáo Xứ" 
                    src="https://docs.google.com/document/d/e/2PACX-1vTcDXqoECI94lT1wpRnonouurzZdaWJNRlDS73ipoTcuqXdZRgqwLTGEo4SOdYNM8GFdD8-eFjsPwfx/pub?embedded=true"
                    frameBorder="0"
                    style={{ 'width': "90%", 'height': "1000px" }} />
            </section>
            <Footer />
        </>
    );
}
export default ActivitiesPage;
