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
        <div class="section-heading">
        <h2>Sinh Hoạt</h2>
        <h3>Niên Học 2024-2025</h3>
        </div>
            <DisplayActivities list={Data}/>
        </div>
    </div>
    <br/>
    <Footer/>
    </>
);

export default StJosephActivitiesPage;