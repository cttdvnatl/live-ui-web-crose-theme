import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import DisplayClasses from '../components/DisplayClasses';
import vietHongClasses from '../database/vietHongClasses.json';

const VietHongClassesPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading">
            <h2>CÁC LỚP</h2>
            <h4>Grade 1</h4>
            {vietHongClasses.grade1.class1A}
        </div>
    </div>
    <br/>
    <Footer/>
    </>
);

export default VietHongClassesPage;