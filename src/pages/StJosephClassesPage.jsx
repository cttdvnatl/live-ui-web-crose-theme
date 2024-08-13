import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StJosephHeader from '../components/StJosephHeader';
import DisplayClasses from '../components/DisplayClasses';
import stJosephClasses from '../database/stJosephClasses.js';

const StJosephClassesPage = () => (
    <>
    <Header/>
    <StJosephHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading"><h2>Danh Bạ Các Lớp</h2>        
        <h3>Niên Học 2024-2025</h3></div>
        <DisplayClasses list={stJosephClasses}/>
    </div>
    <br/>
    <Footer/>
    </>
);

export default StJosephClassesPage;