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
            <br/><br/>
            <h6 style={{textAlign: "center"}}>Chương Trình Ghi Danh Học Giáo Lý Vào Các Ngày Chúa Nhật: <br/><br/>
                Chúa Nhật, ngày 18 tháng 4 năm 2021, từ 8:30 AM - 1:00 PM, tại Building B <br/>
                Chúa Nhật, ngày 25 tháng 4 năm 2021, từ 8:30 AM - 1:00 PM, tại Building B <br/>
                Chúa Nhật, ngày 2 tháng 5 năm 2021, từ 8:30 AM - 1:00 PM, tại Building B <br/> <br/>
                
                Xin quý phụ huynh vào phần <b><u>Văn Thư</u></b> để lấy giấy tờ cần thiết cho con em.<br/><br/>
                * Đơn Ghi Danh Học Giáo Lý 2021-2022. <br/>
                * Chương Trình Ghi Danh Học Giáo Lý 2021-2022 <br/> 
                để biết đầy đủ điều kiện trước khi đến ghi danh. 
                <br/><br/>
                </h6>
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