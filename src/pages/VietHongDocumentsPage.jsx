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
    <p></p>
    <br/>
        <div class="col-12">
        <div class="section-heading">
            <h2>Văn Thư</h2>
    <br/><br/>
            <div id="documents">
        <DisplayDocuments list={vietHongDocuments}/>
    </div>
        </div>
    </div>
   <br/>
    <Footer/>
    </>
);

export default VietHongDocumentsPage;