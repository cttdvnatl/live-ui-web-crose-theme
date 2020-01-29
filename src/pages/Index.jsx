import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Event from '../components/Event';
import Gallery from '../components/Gallery';
const Index = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header/>
            <CustomCarousel/>
            <Info/>
            <Event/>
            <Gallery/>
            <Footer/>
        </div>
    )
}
export default Index;