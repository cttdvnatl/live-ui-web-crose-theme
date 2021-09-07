import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StJosephHeader from '../components/StJosephHeader';
import StJosephCalendar from '../components/StJosephCalendar';
import { useTranslation } from 'react-multi-lang';

const StJoseph = () => {
    const t = useTranslation()
    return (
        <div>
            <Header/>
            <StJosephHeader/>
            <br/><br/>
            <h6 style={{ textAlign: "center" }}>{t('stjoseph.home.heading')}<br/>
                {t('stjoseph.home.line1')} <br/><br/>
                {t('stjoseph.home.line2')} <br/>
                {t('stjoseph.home.line3')} <br/>                 
                {t('stjoseph.home.line4')} <br/>
                {t('stjoseph.home.line5')} <br/>
                {t('stjoseph.home.line6')} <br/><br/>
                {t('stjoseph.home.line7')} <br/>
                {t('stjoseph.home.line8')} <br/>
                {t('stjoseph.home.line9')} <br/>
                {t('stjoseph.home.line10')} <br/>
                {t('stjoseph.home.line11')} 
                <br/><br/>
                </h6>
                <div className="container-fluid text-center">
                    <h2>{t("stjoseph.home.title")}</h2>
                    <p id="viet-ngu" style={{width: '65%', margin: 'auto'}}>{t('stjoseph.home.announcement')}</p>
                    <br/>
                    <StJosephCalendar />
                </div>
            <Footer/>
        </div>
    );
};

export default StJoseph;