import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Event from '../components/Event';
import Calendar from "../components/Calendar";
import { useTranslation } from 'react-multi-lang';

const Index = () => {
    const t = useTranslation()
    return(
        <div>
            <Preloader/>
            <Header banner={false} bannerMsg={t("index.bannerMsg")} url="/"/>
            <CustomCarousel/>
            <div style={{textAlign: "center", width: "100%", marginTop: 50, marginBottom: 50, display: "flex", flexDirection: "column"}}>
                <a style={{color: "blue", textDecoration: "underline", fontSize: 25}}
                    href="https://hvmatl.s3.us-east-2.amazonaws.com/gallery/2024-HDMV-Voting/Phie%CC%82%CC%81u+Ghi+Danh%2C+The%CC%82%CC%89+Le%CC%A3%CC%82+va%CC%80+Ca%CC%81ch+Ba%CC%82%CC%80u+Cu%CC%9B%CC%89+H%C4%90MV+Nie%CC%82n+Kho%CC%81a+2024-2028.JPG"
                >
                    Hội Đồng Mục Vụ Bầu Cử Form
                </a>
                <a style={{color: "blue", textDecoration: "underline", fontSize: 20}}
                    href="https://hvmatl.s3.us-east-2.amazonaws.com/gallery/2024-HDMV-Voting/Danh++Sa%CC%81ch+U%CC%9B%CC%81ng+Cu%CC%9B%CC%89+Vie%CC%82n+H%C4%90MV.JPG"
                >
                    <img width="600px" src="https://hvmatl.s3.us-east-2.amazonaws.com/gallery/2024-HDMV-Voting/Danh++Sa%CC%81ch+U%CC%9B%CC%81ng+Cu%CC%9B%CC%89+Vie%CC%82n+H%C4%90MV.JPG"></img>
                </a>
            </div>
            <Info/>
            <Event/>
            <Calendar/>
            <Footer/>
        </div>
    )
};
export default Index;
