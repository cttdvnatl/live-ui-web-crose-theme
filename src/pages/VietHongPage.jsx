import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTranslation } from 'react-multi-lang';
import VietHongHeader from '../components/VietHongHeader';
import VietHongCalendar from '../components/VietHongCalendar';

const VietHong = () => {
    const t = useTranslation();
    return (
        <div>
            <Header/>
            <VietHongHeader/>
            <br/><br/>
                <h6 style={{textAlign: "center"}}>Ghi Danh Niên Học 2021-2022 <br/><br/>
                Thứ Bảy, ngày 17 tháng 4, 2021 - 12:00 trưa đến 2:00 trưa <br/>
                Thứ Bảy, ngày 24 tháng 4, 2021 - 12:00 trưa đến 2:00 trưa <br/>
                Thứ Bảy, ngày 01 tháng 5, 2021 - 12:00 trưa đến 2:00 trưa <br/><br/>
                Xin xem chi tiết cho những ngày ghi danh trong lịch ở dưới, <br/>
                hoặc liên lạc qua Viet.Hong.School@hvmatl.org <br/><br/>
                </h6>
                <div className="container-fluid text-center">
                <p id="viet-ngu" style={{width: '65%', margin: 'auto'}}>{t('viethong.home.announcement')}</p>
                <br/>
                <p id="vn-schedule" className="center-50"> <b>Giờ Học Mỗi Thứ Bảy</b> <br/>
                10:00 a.m. – 11:30 a.m. </p>
                <VietHongCalendar />
                </div>
            <Footer/>
        </div>
    );
};

export default VietHong;