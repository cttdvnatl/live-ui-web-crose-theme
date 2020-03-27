import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ActivitiesPage = () => (
    <>
    <Header />
    <div id="Container" style={{paddingBottom : '56.25%', position: 'relative', display : 'block', width : '100%'}}>
        <iframe title="ViostreamIframe" id="ViostreamIframe"
                width="100%" height="100%"
                src="news/UPDATE.html"
                frameborder="0" allowfullscreen=""
                style={{position: 'absolute',top:'0', left: '0', overflow:'hidden'}}></iframe>
    </div>
    <Footer />
    </>
);

export default ActivitiesPage;