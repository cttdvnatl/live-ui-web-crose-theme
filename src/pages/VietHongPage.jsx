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
                <h6 style={{textAlign: "center"}}><u>Ghi Danh Niên Học 2021-2022</u><br/><br/>

                        Thứ Bảy ngày 17 tháng 4, 2021 <br/>
                        Thứ Bảy ngày 24 tháng 4, 2021 <br/>
                        Thứ Bảy ngày 01 tháng 5, 2021 <br/><br/>

                <u>Thời gian</u>: 12 giờ trưa đến 2 giờ chiều <br/><br/>
                <u>Địa điểm</u>: Building B (trong khuôn viên giáo xứ) <br/><br/>

                Xin quý phụ huynh vào phần <b><u>Văn Thư</u></b> để lấy đơn ghi danh cho con em. <br/><br/>
                Học sinh cũ xin dùng đơn ghi danh cho học sinh cũ (RETURNING student).<br/>
                Học sinh mới xin dùng đơn ghi danh cho học sinh mới (NEW student).<br/><br/>

                Nếu có điều gì thắc mắc xin liên lạc qua Viet.Hong.School@hvmatl.org. <br/><br/>
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