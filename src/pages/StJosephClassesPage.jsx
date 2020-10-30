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
        <div class="section-heading"><h2>CÁC LỚP</h2></div>
        <DisplayClasses list={stJosephClasses}/>
    </div>
    <br/>
    <Footer/>
    </>
);

export default StJosephClassesPage;