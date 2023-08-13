import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import activitiesContent from '../database/vietHongActivitiesContent';
import DisplayActivities from '../components/DisplayActivites';

const Begin2024 = activitiesContent.filter(Begin2024 => Begin2024.classification === 'begin-2024');
const End2023 = activitiesContent.filter(End2023 => End2023.classification === 'end-2023');
const EVEH2023 = activitiesContent.filter(EVEH2023 => EVEH2023.classification === 'eveh-2023');
const End2022 = activitiesContent.filter(End2022 => End2022.classification === 'end-2022');
const EVEH2022 = activitiesContent.filter(EVEH2022 => EVEH2022.classification === 'eveh-2022');
const Begin2022 = activitiesContent.filter(Begin2022 => Begin2022.classification === 'begin-2022');
const Previous = activitiesContent.filter(Previous => Previous.classification === 'previous');

const VietHongActivitiesPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading">
            <h3>Lễ Khai Giảng Niên Học 2023-2024</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={Begin2024}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Lễ Bế Giảng Niên Học 2022-2023</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={End2023}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Chương Trình Em Vui Em Học 2022-2023</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={EVEH2023}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Lễ Bế Giảng Niên Học 2021-2022</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={End2022}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Chương Trình Em Vui Em Học 2021-2022</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={EVEH2022}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Lễ Khai Giảng Niên Học 2021-2022</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={Begin2022}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h2>Sinh Hoạt Những Niên Học Trước</h2>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={Previous}/>
    </div>
    <Footer/>
    </>
);

export default VietHongActivitiesPage;