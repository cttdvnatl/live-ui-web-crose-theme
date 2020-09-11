import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import stJosephClasses from '../database/stJosephClasses.js';
import StJosephHeader from '../components/StJosephHeader';

const StJosephClassworkPage = ({match}) => {
    const stJosephClassURL = match.params.stJosephClassURL;
    const iframe = stJosephClasses.find(iframe => iframe.name === stJosephClassURL);

    if (!iframe) {
        return (
            <>
            <Header/>
            <StJosephHeader/>
            <h3 class="center-50" style={{textAlign: "center", height: "600px", marginTop: "30px"}}>No such class</h3>
            <Footer/>
            </>
        )
    }

    return (
        <>
        <Header/>
        <StJosephHeader/>
        <div class="center-50">
            <iframe width="80%" height="700px" style={{margin: "0", padding: "0", border: "0"}} title="vh" src={iframe.classwork}/>
        </div>
        <Footer/>
        </>
    )
}

export default StJosephClassworkPage;