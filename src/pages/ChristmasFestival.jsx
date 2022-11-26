import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';

const ChristmasFestival = () => {
    const t = useTranslation()
    return (
        <>
            <Header/>
            <div className="about-us-area about-page section-padding-100">
                <div className="container">
                    <h2 className="section-heading">{t('lhgs.pageTitle')}</h2>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                                <div className="about-content">
                                    <a href="https://www.hvmatl.com/gallery/img/index/Poster_LHGS_2022.jpg"><img src="https://www.hvmatl.com/gallery/img/index/2022_LHGS_Logo_sm.jpg" alt=""/></a>
                                    <p style={{textAlign:"center"}}><i>
                                        <a href="https://www.hvmatl.com/gallery/img/index/Poster_LHGS_2022.jpg" style={{color:"#850000"}}>Click for Brochure</a></i>
                                    </p>
                                </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="about-content">
                                <h2>{t('lhgs.heading')}</h2>
                                <p> </p>
                                <p> </p>
                                <h2>{t('lhgs.headingLogo')}</h2>
                                <p> </p>
                                <p> </p>
                                <h4>{t('lhgs.paraHeading1')}</h4>
                                <p> </p>
                                <p> </p>
                                <h4>{t('lhgs.paraHeading2')}</h4>
                                <p> </p>
                                <p> </p>
                                <h4>{t('lhgs.paraHeading3')}</h4>
                                <p></p>
                                <p> </p>
                                <h4>{t('lhgs.paraHeading4')}</h4>
                                <p> </p>
                                <p> </p>
                                <h4>{t('lhgs.paraHeading5')}</h4>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ChristmasFestival;