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
            <Info/>
            <Event/>
            <Calendar/>
            <Footer/>
        </div>
    )
};
export default Index;
