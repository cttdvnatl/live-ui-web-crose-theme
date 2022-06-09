import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import DisplayActivities from '../components/DisplayActivites';
import Data from '../database/vietHongActivities.js';

const VietHongActivitiesPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading">
            <h2>Sinh Hoạt Của Trường Việt Hồng</h2>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={Data}/>
    </div>
    <br/>
    <Footer/>
    </>
);

export default VietHongActivitiesPage;