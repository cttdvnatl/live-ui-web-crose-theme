import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import audio from '../audio/LangHienDuong.aac';

const VietHongActivitiesPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <p></p>
    <div class="col-12">
        <div class="section-heading">
            <h2>Sinh Hoạt Trường Việt Hồng</h2>
        </div>
    </div>
    <h3 class="center-50" style={{color : 'black'}}>Người mù vệ đường - Dương Hiền</h3>
    <iframe title="yt-video" style={{marginBottom : '50px'}} class="center-50" height="500px" src="https://www.youtube.com/embed/9KC50dzZisM"></iframe>
    <h3 class="center-50" style={{color : 'black'}}>Lang - Hiền Dương</h3>
    <audio style={{marginBottom : '30px'}} class="center-50" controls>
        <source src={audio} type='audio/aac'/>
    </audio>
    <Footer/>
    </>
);

export default VietHongActivitiesPage;