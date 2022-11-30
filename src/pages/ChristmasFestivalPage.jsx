import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';
import ChristmasFestivalHeader from '../components/ChristmasFestivalHeader';

const ChristmasFestival = () => {
    const t = useTranslation();
    return (
        <div>
            <Header/>
            <ChristmasFestivalHeader/>
            <h4 style={{ textAlign: "center" }}><br/>
            <img src="https://www.hvmatl.com/gallery/2022_LHGS/2022_LHGS_Logo.jpg" alt="christmas"/><br/><br/> 
                {t('christmasfestival.home.line1')} <br/>
                {t('christmasfestival.home.line2')} <br/>
                {t('christmasfestival.home.line3')} <br/><br/>        
                {t('christmasfestival.home.line4')} <br/>
                {t('christmasfestival.home.line5')} <br/><br/>
                </h4>              
            <Footer/>
        </div>
    );
};

export default ChristmasFestival;