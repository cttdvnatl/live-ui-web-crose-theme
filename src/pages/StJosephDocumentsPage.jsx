import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StJosephHeader from '../components/StJosephHeader';
import stJosephDocuments from '../database/stJosephDocuments';
import DisplayDocuments from '../components/DisplayDocuments';

const StJosephDocumentsPage = () => (
    <>
    <Header/>
    <StJosephHeader/>
    <p></p>
    <br/>
        <div class="col-12">
        <div class="section-heading">
            <h2>Văn Thư</h2>
    <br/><br/>
    <div id="documents">
        <DisplayDocuments list={stJosephDocuments}/>
    </div>
        </div>
    </div>
   <br/>
    <Footer/>
    </>
);

export default StJosephDocumentsPage;