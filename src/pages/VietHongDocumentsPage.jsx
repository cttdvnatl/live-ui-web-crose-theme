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
    <DisplayDocuments list={vietHongDocuments}/>
    <Footer/>
    </>
);

export default VietHongDocumentsPage;