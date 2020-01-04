import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import CustomCarousel from '../components/Carousel';

const Index = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header/>
            <CustomCarousel/>
        </div>
    )
}
export default Index;