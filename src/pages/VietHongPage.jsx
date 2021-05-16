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
            <h5 style={{textAlign: "center"}}>Trường Việt Ngữ Việt Hồng cảm ơn sự giúp đỡ, <br/>
                thông cảm và cộng tác của quý phụ huynh với nhà trường chúng tôi <br/>
                cho việc học của con em quý vị trong niên học vừa qua. <br/>
                Chúc quý phụ huynh và gia đình mùa hè nhiều bình an và hạnh phúc. <br/>
                Rất mong sẽ gặp lại tất cả các em vào niên học sắp đến. <br/><br/>
                Để tiếp tục duy trì và phát triển hoạt động của Trường Việt Ngữ Việt Hồng, <br/>
                chúng tôi tha thiết mời quý phụ huynh hãy cùng tham gia với chúng tôi. <br/><br/>
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