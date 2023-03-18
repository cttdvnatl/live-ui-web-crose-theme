import React from 'react';
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTranslation } from 'react-multi-lang';

const MassSchedule = (prop) => {
    const t = useTranslation()
    return (
        <div>
            <Preloader/>
            <Header/>
            <section className="section-padding-100">
                <div className="container">
                    <div className="row">
                         <div className="col-sm-12 text-center">
                            <p>
                                <h3>{t('massInfo.mass.title')}</h3>
                                <b>{t('massInfo.mass.weekdayMorning')}</b><br/>
                                <b>{t('massInfo.mass.weekdayNight')}</b><br/>
                                <b>{t('massInfo.mass.vigil')}</b><br/>
                                <b>{t('massInfo.mass.sunday')}</b><br/><br/>
                                <h3>{t('massInfo.confession.title')}</h3>
                                <b>{t('massInfo.confession.weekday')}</b><br/>
                                <b>{t('massInfo.confession.weekend')}</b><br/><br/><br/>
                                <h3>{t('massInfo.baptism.title')}</h3>
                                <b>{t('massInfo.baptism.class')}</b><br/>
                                <b>{t('massInfo.baptism.baptise')}</b><br/><br/><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};
export default MassSchedule;