//WIP
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const VietHong = () => {
    return (
        <div>
            <Header/>
                <ul id="viet-ngu">
                    <li><a href="#">Trường Việt Hồng</a></li>
                    <li><a href="#">Thầy Cô</a></li>
                    <li><a href="#">Hình Ảnh</a></li>
                    <li><a href="#">Văn Thư</a></li>
                    <li><a href="#">Liên Lạc</a></li>
                </ul>
                <div className="container-fluid text-center">
                <h3>Vì sự lây lan của coronavirus, tất cả các sinh hoạt của Trường Việt Hồng sẽ được đình chỉ.</h3>
                <iframe title="VietHong" src="https://calendar.google.com/calendar/b/2/embed?height=650&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dmlldGhvbmdAY3R0ZHZuYXRsLm9yZw&amp;color=%23039BE5&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0" style={{borderWidth:0}} width="1200" height="650" frameborder="0" scrolling="no"/>
                <img src="http://cttdvnatl.net/gallery/img/bg-img/VietNguStaff.jpg" alt="" className="center-50"/>
                </div>
            <Footer/>
        </div>
    );
};

export default VietHong;