import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import vietHongClasses from '../database/vietHongClasses.js';

const VietHongClassworkPage = ({match}) => {
    const vietHongClassURL = match.params.vietHongClassURL;
    const iframe = vietHongClasses.find(iframe => iframe.name === vietHongClassURL);

    return (
        <>
        <Header/>
        <div class="classwork">
            <iframe width="80%" height="700px" style={{marginTop: "10px"}} title="vh" src={iframe.classwork}/>
        </div>
        <Footer/>
        </>
    )
}

export default VietHongClassworkPage;