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
                    <p id="viet-ngu" style={{width: '65%', margin: 'auto'}}>{t('stjoseph.home.announcement')}</p>
                    <br/>

                    <div className="container-fluid text-center">
                    <p id="vn-schedule" className="center-50"> 
                    Giờ Học / School Hours <br/></p>
                    <p id="vn-schedule" className="center-50">
                    First Class Period – 10:30 a.m. to 12:30 p.m.</p>
                    <p id="vn-schedule" className="center-50">
                    <b> Thánh Lễ / Holy Mass at 12:45 p.m. </b></p>
                    <p id="vn-schedule" className="center-50"> 
                    Second Class Period – 2:00 p.m. to 4:00 p.m.</p>
                    </div>
                    <StJosephCalendar />
                </div>
            <Footer/>
        </div>
    );
};

export default StJoseph;