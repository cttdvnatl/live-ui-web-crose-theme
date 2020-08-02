import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Event from '../components/Event';
import Calendar from "../components/Calendar";

const Index = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header emergency={true} emergencyMsg="Thông Báo Coronavirus 2019" url="/covid19"/>
            <CustomCarousel/>
            <Info/>
            <Event/>
            <Calendar/>
            <Footer/>
        </div>
    )
};
export default Index;