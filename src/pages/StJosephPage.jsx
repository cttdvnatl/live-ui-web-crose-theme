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
            <br/><br/><br/>
            <h5 style={{ textAlign: "center" }}>{t('stjoseph.home.heading')}<br/>
                {t('stjoseph.home.line1')} <br/><br/>
                {t('stjoseph.home.line2')} <br/><br/>
                {t('stjoseph.home.line3')} <br/>                 
                {t('stjoseph.home.line4')} <br/>
                {t('stjoseph.home.line5')} <br/><br/>
                {t('stjoseph.home.line6')} <br/><br/>
                {t('stjoseph.home.line7')} <br/><br/>
                {t('stjoseph.home.line8')} <br/>
                {t('stjoseph.home.line9')} <br/>
                {t('stjoseph.home.line10')} <br/><br/><br/>
                {t('stjoseph.home.line11')} <br/><br/>
                {t('stjoseph.home.line12')} <br/>
                {t('stjoseph.home.line13')} <br/><br/>
                {t('stjoseph.home.line14')} <br/>
                {t('stjoseph.home.line15')} <br/><br/>
                {t('stjoseph.home.line16')} <br/>
                {t('stjoseph.home.line17')} <br/><br/>
                {t('stjoseph.home.line18')} <br/><br/>
                {t('stjoseph.home.line19')} <br/>
                {t('stjoseph.home.line20')} <br/>
                <br/><br/>
                </h5>
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