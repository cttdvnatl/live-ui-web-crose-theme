import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GiaoLyHeader from '../components/GiaoLyHeader';
import DisplayClasses from '../components/DisplayClasses';
import giaoLyClasses from '../database/giaoLyClasses.js';



const GiaoLyClassesPage = () => (
    <>
    <Header/>
    <GiaoLyHeader/>
    <p></p>
    <br/>
    <div class="col-12">
        <div class="section-heading"><h2>CÁC LỚP</h2></div>
        <DisplayClasses list={giaoLyClasses}/>
    </div>
    <br/>
    <Footer/>
    </>
);

export default GiaoLyClassesPage;