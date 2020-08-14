import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import VietHongCalendar from '../components/VietHongCalendar';

const VietHong = () => {
    return (
        <div>
            <Header/>
            <VietHongHeader/>
                <div className="container-fluid text-center">
                <br/><br/>
                <p id="viet-ngu">Trường Việt Ngữ Việt Hồng sẽ bắt đầu niên học mới bằng "digital learning" vào ngày 12 tháng 9.
                <br/> Trường đã và sẽ gửi thêm chi tiết về học online đến quý phụ huynh vào những ngày sắp đến.</p>
                <br/>
                <p id="vn-schedule" className="center-50"> <b>Giờ Học Mỗi Thứ Bảy</b>
                <br/> 10:00 a.m. – 11:30 a.m. </p>
                <VietHongCalendar />
                </div>
            <Footer/>
        </div>
    );
};

export default VietHong;