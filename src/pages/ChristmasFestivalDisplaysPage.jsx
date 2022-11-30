import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChristmasFestivalHeader from '../components/ChristmasFestivalHeader';
import ChristmasFestivalDisplaysContent from '../database/ChristmasFestivalDisplaysContent';
import ChristmasFestivalNativityDisplay from '../components/ChristmasFestivalNativityDisplay';

const mainDisplay = ChristmasFestivalDisplaysContent.filter(mainDisplay => mainDisplay.classification === 'main-display');

const ChristmasFestivalDisplaysPage = () => (
        <>
            <Header/>
            <ChristmasFestivalHeader/>
            <p></p>
            <br/>
            <div class="row about-content justify-content-center">
            <div class="col-12">
                <div class="section-heading">
                    <h3></h3>
            <div class="christmas-image-container">
                <ChristmasFestivalNativityDisplay list={mainDisplay}/> 
            </div>
            </div>
            </div>
            </div>

            <Footer />
        </>
    );

export default ChristmasFestivalDisplaysPage;