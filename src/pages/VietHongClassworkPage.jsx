import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import vietHongClasses from '../database/vietHongClasses.js';
import VietHongHeader from '../components/VietHongHeader';

const VietHongClassworkPage = ({match}) => {
    const vietHongClassURL = match.params.vietHongClassURL;
    const iframe = vietHongClasses.find(iframe => iframe.name === vietHongClassURL);

    return (
        <>
        <Header/>
        <VietHongHeader/>
        <div class="center-50">
            <iframe width="80%" height="700px" style={{margin: "0", padding: "0", border: "0"}} title="vh" src={iframe.classwork}/>
        </div>
        <Footer/>
        </>
    )
}

export default VietHongClassworkPage;