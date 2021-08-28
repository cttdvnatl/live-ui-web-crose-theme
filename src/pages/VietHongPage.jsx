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
            <h5 style={{textAlign: "center"}}> Nhà trường chúng tôi mong nhận được nhiều giúp đỡ, thông cảm và cộng tác <br/>
                từ quý phụ huynh để chúng ta cùng có được một năm học thành công  <br/>
                cho con em mình. Xin cảm ơn quý vị. <br/><br/>

                Theo quyết định của Tổng Giáo Phận Atlanta và Học Khu Gwinnett <br/>
                các em học sinh cần phải mang face mask cho đến khi có thông báo mới. <br/><br/>

                Tin tức và thay đổi trong niên học <br/>
                sẽ được cập nhật thường xuyên trong trang này. <br/><br/>

                </h5>
                
                <div className="container-fluid text-center">
                <p id="viet-ngu" style={{width: '65%', margin: 'auto'}}>{t('viethong.home.announcement')}</p>
                <br/>
                <div className="container-fluid text-center">

                <p id="vn-schedule" className="center-50"> <b>Giờ Học Mỗi Thứ Bảy</b> <br/>
                10:00 a.m. – 12:15 p.m. </p>
                </div>
                <VietHongCalendar />
                </div>
            <Footer/>
        </div>
    );
};

export default VietHong;