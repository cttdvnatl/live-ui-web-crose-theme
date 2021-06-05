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
            <br/><br/><br/>
            <h6 style={{textAlign: "center"}}><u>Ghi Danh Niên Học 2021-2022</u><br/>
                Dành cho học sinh mới (new students only)<br/><br/>

                <b>Thứ Bảy ngày 26 tháng 6, 2021 </b><br/><br/>
                <u>Thời gian</u>: 10 giờ sáng đến 12 giờ trưa <br/><br/>
                <u>Địa điểm</u>: Building B (trong khuôn viên giáo xứ) <br/><br/>
                <u>Địa chỉ</u>: 4545 Timmers Way Norcross, GA 30093 <br/><br/>

                Xin quý phụ huynh vào phần <b><u>Văn Thư</u></b> để lấy đơn ghi danh cho con em. <br/><br/>
                <b>Đơn Ghi Danh Niên Học 2021-2022 School Year Registration Form (NEW student)</b><br/><br/>
                </h6>
                <div className="container-fluid text-center">
                <p id="viet-ngu" style={{width: '65%', margin: 'auto'}}>{t('viethong.home.announcement')}</p>
                <br/>
                <VietHongCalendar />
                </div>
            <Footer/>
        </div>
    );
};

export default VietHong;