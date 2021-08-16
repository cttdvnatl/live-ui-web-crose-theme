import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import DisplayClasses from '../components/DisplayClasses';
import vietHongClasses from '../database/vietHongClasses.js';



const VietHongClassesPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading"><h2>CÁC LỚP</h2>
        <h3>Niên Học 2021-2022</h3></div>
        
        <DisplayClasses list={vietHongClasses}/>
    </div>
    <br/>
    <Footer/>
    </>
);

export default VietHongClassesPage;