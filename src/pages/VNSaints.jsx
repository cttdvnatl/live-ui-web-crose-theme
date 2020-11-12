import React from 'react';
import VNSaintsComponents from '../components/VNSaintsComponents';
import TOC from '../database/vnSaintsTOC';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VNSaints = () => (
    <>
        <Header/>
        <div class="vn-saints">
                <VNSaintsComponents list={TOC}/>
        </div>
        <Footer/>
    </>
);

export default VNSaints;