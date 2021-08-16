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
            <h5 style={{textAlign: "center"}}>Ngày 21 tháng 8 năm 2021 là ngày Khai Giảng niên học 2021-2022 <br/>
                của Trường Việt Ngữ Việt Hồng. Nhà trường chúng tôi sẽ cần nhiều giúp đỡ  <br/>
                từ quý phụ huynh để chúng ta cùng có được một năm học thành công  <br/>
                cho con em mình. Xin cảm ơn quý vị. <br/><br/>

                Theo quyết định của Tổng Giáo Phận Atlanta và Học Khu Gwinnett <br/>
                các em học sinh cần phải mang face mask cho đến khi có thông báo mới. <br/><br/>

                </h5>
                
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