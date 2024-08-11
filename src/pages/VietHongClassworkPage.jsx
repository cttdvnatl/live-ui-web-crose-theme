import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import vietHongClasses from '../database/vietHongClasses.js';
import VietHongHeader from '../components/VietHongHeader';
import { useParams } from 'react-router-dom';

const VietHongClassworkPage = () => {
    const { className } = useParams();
    const iframe = vietHongClasses.find(iframe => iframe.class.toLowerCase() === className.toLowerCase());

    if (!iframe) {
        return (
            <>
            <Header/>
            <VietHongHeader/>
            <h3 class="center-50" style={{textAlign: "center", height: "600px", marginTop: "30px"}}>No such class</h3>
            <Footer/>
            </>
        )
    }

    return (
        <>
        <Header/>
        <VietHongHeader/>
        <div style={{textAlign: 'center'}}>
            <iframe width="90%" height="700px" style={{margin: "0", padding: "0", border: "0"}} title="vh" src={iframe.classwork}/>
        </div>
        <Footer/>
        </>
    )
}

export default VietHongClassworkPage;