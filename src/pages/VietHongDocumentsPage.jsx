import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import vietHongDocuments from '../database/vietHongDocuments';
import DisplayDocuments from '../components/DisplayDocuments';

const VietHongDocumentsPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <div class="section-heading">
        <h2><b>VĂN THƯ</b></h2>
        <h2>*** PAGE UNDER CONSTRUCTION ***</h2>
    </div>
    <DisplayDocuments list={vietHongDocuments}/>
    <Footer/>
    </>
);

export default VietHongDocumentsPage;