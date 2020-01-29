import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Info from '../components/Info';

const Index = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header/>
            <CustomCarousel/>
            <Info/>
            <Footer/>
        </div>
    )
}
export default Index;