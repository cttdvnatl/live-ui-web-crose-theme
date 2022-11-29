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
            <h5 style={{ textAlign: "center" }}><br/><br/> 
            <a href="https://www.hvmatl.com/gallery/img/index/Poster_LHGS_2022.jpg"><img src="https://www.hvmatl.com/gallery/img/index/2022_LHGS_Logo_sm.jpg" alt=""/></a><br/><br/> 
                {t('christmasfestival.home.line1')} <br/><br/> 
                {t('christmasfestival.home.line2')} <br/><br/> 
                {t('christmasfestival.home.line3')} <br/><br/>        
                {t('christmasfestival.home.line4')} <br/><br/>
                {t('christmasfestival.home.line5')} <br/><br/><br/>
                </h5>              
            <Footer/>
        </div>
    );
};

export default ChristmasFestival;