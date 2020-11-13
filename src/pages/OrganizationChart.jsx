import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Org = () => {
    return (
        <div>
        <Preloader/>
        <Header/>
            <div>
                <img className="center" src="https://hvmatl.net/gallery/img/core-img/SDTC.jpg" alt=""/>
            </div>
        <Footer/>
        </div>
    );
};

export default Org;