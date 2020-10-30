import React from 'react';
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import content from "../database/covid19.json";
import { useTranslation } from 'react-multi-lang';

const Covid19 = (prop) => {
    const t = useTranslation()
    return (
        <div>
            <Preloader/>
            <Header/>
            <section className="section-padding-100">
                <h2 className="section-heading">{t("covid19.pageTitle")}</h2>
                <div className="container">
                    { content.map((item, idx) => {
                        return (
                            <div className="row single-upcoming-events-area d-flex flex-wrap align-items-center" key={idx}>
                                <div className="upcoming-events-thumbnail">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4>{item.title}</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"/>{item.date}</a>
                                        </div>
                                        <p>{item.body}</p>
                                    </div>
                                    <div className="find-out-more-btn">
                                        <a href={item.pdf} className="crose-btn btn-2">{t("covid19.button")}</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Footer/>
        </div>
    );
};
export default Covid19;