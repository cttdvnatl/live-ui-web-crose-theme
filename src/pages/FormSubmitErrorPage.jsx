import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FormSubmitErrorPage = () => {
    return (
        <>
            <Header/>
                <div style={{height: '500px', textAlign: 'center', margin: '30px'}}> 
                    <h3 style={{fontSize: '30px', color: 'red'}}>Error: Form Not Submitted</h3>
                </div>
            <Footer/>
        </>

    )
}

export default FormSubmitErrorPage;