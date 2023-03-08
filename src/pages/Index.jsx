import React, { lazy, useState } from 'react';
import Preloader from '../components/Preloader';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Event from '../components/Event';
import Calendar from "../components/Calendar";
import { useTranslation } from 'react-multi-lang';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

// const Header = lazy(async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return await import('../components/Header');
//     });


const Index = () => {
    const t = useTranslation()

    // const RoutesPowers = () => {
    // const [powers, setPowers] = React.useState(savedPowers);
    // if (!powers) {
    //     throw fetchPowers();
    // }

    // return powers.map(value => <div key={value}>{value}</div>);
    // }

    return(
        <div>
            <Header 
                banner={true} 
                bannerMsg={t("banner.headline")} 
                button1Text={t("banner.button1")}
                button2Text={t("banner.button2")}
                url=""/>
            <CustomCarousel/>
            <Info/>
            <Event/>
            <Calendar/>
            <Footer/>
        </div>
    )
};
export default Index;
