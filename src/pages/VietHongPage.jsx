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
            <br/><br/>
                <h6 style={{textAlign: "center"}}>Viet.Hong.School@hvmatl.org</h6>
                <div className="container-fluid text-center">
                <p id="viet-ngu">Trường Việt Ngữ Việt Hồng sẽ bắt đầu niên học bằng <b>digital learning</b> vào ngày 12 tháng 9.
                <br/> Tin tức và thay đổi trong niên học sẽ được cập nhật thường xuyên ở phần <b>agenda</b> trong lịch ở dưới.</p>
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