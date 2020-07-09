import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { setLanguage, useTranslation, setTranslations, setDefaultLanguage } from 'react-multi-lang';
import vn from '../database/hvmatlDataVN.json';
import en from '../database/hvmatlDataEN.json';

setTranslations({vn, en})
setDefaultLanguage('vn')


const About = () => {
    const t = useTranslation()
    return (
        <div>
            <Header/>
            <div className="about-us-area about-page section-padding-100">
                <div className="container">
                <div id="translation-button">
                    <button onClick={() => setLanguage('vn')}>VN</button>
                    <button onClick={() => setLanguage('en')}>EN</button>                
                </div>
                    <h2 className="section-heading">{t('about.pageTitle')}</h2>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                                <div className="about-content">
                                    <a href="img/bg-img/meaning_symbol.jpg"><img src="img/core-img/Logo1.png" alt=""/></a>
                                    <p style={{textAlign:"center"}}><i>
                                        <a href="img/bg-img/vietsym.jpg" style={{color:"#850000"}}>Ý nghĩa dấu hiệu</a> / <a href="img/bg-img/engsym.jpg" style={{color:"#850000"}}>Significant Symbol</a></i>
                                    </p>
                                </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="about-content">
                                <h2>{t('about.heading')}</h2>
                                <p>{t('about.paragraph')}</p>
                                <div className="opening-hours-location mt-30 d-flex align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;