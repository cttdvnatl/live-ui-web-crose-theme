import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';

const About = () => {
    const t = useTranslation()
    return (
        <>
            <Header/>
            <div className="about-us-area about-page section-padding-100">
                <div className="container">
                    <h2 className="section-heading">{t('about.pageTitle')}</h2>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                                <div className="about-content">
                                    <a href="img/bg-img/meaning_symbol.jpg"><img src="img/core-img/Logo1.png" alt=""/></a>
                                    <p style={{textAlign:"center"}}><i>
                                        <a href="img/bg-img/vietsym.jpg" style={{color:"#850000"}}>Ý nghĩa dấu biểu tượng</a> / <a href="img/bg-img/engsym.jpg" style={{color:"#850000"}}>Significant Symbol</a></i>
                                    </p>
                                </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="about-content">
                                <h2>{t('about.heading')}</h2>
                                <p>{t('about.paragraph')}</p>
                                <h3>{t('about.headingLogo')}</h3>
                                <h4>{t('about.paraHeading1')}</h4>
                                <ul>
                                    <li>{t('about.paragraph11')}</li>
                                    <li>{t('about.paragraph12')}</li>
                                </ul>
                                <h4>{t('about.paraHeading2')}</h4>
                                <ul>
                                    <li>{t('about.paragraph21')}</li>
                                    <li>{t('about.paragraph22')}</li>
                                    <li>{t('about.paragraph23')}</li>
                                    <li>{t('about.paragraph24')}</li>
                                    <li><dl><dt>{t('about.paragraph25')}</dt>
                                        <dd>{t('about.subparagraph21')}</dd>
                                        <dd>{t('about.subparagraph22')}</dd>
                                        </dl>
                                    </li>
                                    <li>{t('about.paragraph26')}</li>
                                </ul>
                                <h4>{t('about.paraHeading3')}</h4>
                                <ul>
                                    <li>{t('about.paragraph31')}</li>
                                    <li>{t('about.paragraph32')}</li>
                                    <li>{t('about.paragraph33')}</li>
                                    <li>{t('about.paragraph34')}</li>
                                    <li>{t('about.paragraph35')}</li>
                                </ul>
                                <div className="opening-hours-location mt-30 d-flex align-items-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;