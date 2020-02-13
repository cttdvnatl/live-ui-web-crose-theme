import React from 'react';
import clergyContent from '../database/clergies-content';
import ClergyList from '../components/ClergyList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const currentClergies = clergyContent.filter(currentClergies => currentClergies.date === '');
const formerClergies = clergyContent.filter(formerClergies => formerClergies.date !== '');
const ClergyListPage = () => (
    <>
    <Header/>
    <p></p>
    <div class="col-12">
        <div class="section-heading">
            <h2><b>Linh Mục / Tu Sĩ - Đương Nhiệm</b></h2>
        </div>
        <ClergyList list={currentClergies} />
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h2><b>Cựu Linh Mục / Tu Sĩ</b></h2>
        </div>
        <ClergyList list={formerClergies} />
    </div>    
    <Footer/>
    </>
);

export default ClergyListPage;