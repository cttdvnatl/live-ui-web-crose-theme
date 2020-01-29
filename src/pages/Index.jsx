import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';

const Index = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header/>
            <CustomCarousel/>
            <Footer/>
        </div>
    )
}
export default Index;