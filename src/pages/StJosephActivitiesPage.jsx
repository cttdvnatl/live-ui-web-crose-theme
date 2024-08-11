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
            <DisplayActivities list={Data}/>
        </div>
    </div>
    <br/>
    <Footer/>
    </>
);

export default StJosephActivitiesPage;