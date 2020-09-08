import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GiaoLyHeader from '../components/GiaoLyHeader';
import giaoLyDocuments from '../database/giaoLyDocuments';
import DisplayDocuments from '../components/DisplayDocuments';

const GiaoLyDocumentsPage = () => (
    <>
    <Header/>
    <GiaoLyHeader/>
    <p></p>
    <br/>
        <div class="col-12">
        <div class="section-heading">
            <h2>Văn Thư</h2>
    <br/><br/>
    <div id="documents">
        <DisplayDocuments list={giaoLyDocuments}/>
    </div>
        </div>
    </div>
   <br/>
    <Footer/>
    </>
);

export default GiaoLyDocumentsPage;