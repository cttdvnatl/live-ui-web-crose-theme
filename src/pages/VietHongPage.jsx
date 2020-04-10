import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import VietHongCalender from '../components/VietHongCalender';

const VietHong = () => {
    return (
        <div>
            <Header/>
            <VietHongHeader/>
                <div className="container-fluid text-center">
                <p id="viet-ngu">Vì sự lây lan của coronavirus, tất cả các sinh hoạt của Trường Việt Hồng sẽ được đình chỉ.</p>
                <p id="vn-schedule" className="center-50">Giờ Học: Thứ Bảy 10:00 am - 12:15 pm</p>
                <VietHongCalender/>
                <img src="http://cttdvnatl.net/gallery/img/bg-img/VietNguStaff.jpg" alt="" className="center-50"/>
                </div>
            <Footer/>
        </div>
    );
};

export default VietHong;