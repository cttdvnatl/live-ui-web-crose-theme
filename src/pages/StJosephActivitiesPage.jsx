import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StJosephHeader from '../components/StJosephHeader';
import DisplayActivities from '../components/DisplayActivites';
import Data from '../database/stJosephActivities.js';

const StJosephActivitiesPage = () => (
    <>
    <Header/>
    <StJosephHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading">
            <h2>Sinh Hoạt Của Trường Thánh Giuse</h2>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={Data}/>
    </div>
    <br/>
    <Footer/>
    </>
);

export default StJosephActivitiesPage;