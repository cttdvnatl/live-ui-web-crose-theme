import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Event from '../components/Event';
import Gallery from '../components/Gallery';
import Calendar from "../components/Calendar";

const Index = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header emergency={true} emergencyMsg="Thông Báo Về Bệnh Dịch Coronavirus 2019 (COVID-19)" url="hvm_covid19.html"/>
            <CustomCarousel/>
            <Info/>
            <Event/>
            <Calendar/>
            <Gallery/>
            <Footer/>
        </div>
    )
};
export default Index;