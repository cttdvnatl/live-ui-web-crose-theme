import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import activitiesContent from '../database/vietHongActivitiesContent';
import DisplayActivities from '../components/DisplayActivites';

const mainCurrentBegin = activitiesContent.filter(mainCurrentBegin => mainCurrentBegin.classification === 'current-begin');
const mainCurrentMiddle = activitiesContent.filter(mainCurrentMiddle => mainCurrentMiddle.classification === 'current-middle');
const mainCurrentEnd = activitiesContent.filter(mainCurrentEnd => mainCurrentEnd.classification === 'current-end');
const mainCurrentEVEH = activitiesContent.filter(mainCurrentEVEH => mainCurrentEVEH.classification === 'current-eveh');
const mainPrevious = activitiesContent.filter(mainPrevious => mainPrevious.classification === 'previous');

const VietHongActivitiesPage = () => (
    <>
    <Header/>s
    <VietHongHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading">
            <h2>Sinh Hoạt Của Trường</h2>
            <br/>
            <h3>Lễ Khai Giảng Niên Học 2022-23</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={mainCurrentEnd}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Lễ Bế Giảng Niên Học 2021-22</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={mainCurrentMiddle}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Chương Trình Em Vui Em Học</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={mainCurrentEVEH}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h3>Lễ Khai Giảng Niên Học 2021-22</h3>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={mainCurrentBegin}/>
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h2>Sinh Hoạt Những Niên Học Trước</h2>
        </div>
    </div>
    <div class="activities-image-container">
           <DisplayActivities list={mainPrevious}/>
    </div>
    <Footer/>
    </>
);

export default VietHongActivitiesPage;