import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChristmasFestivalHeader from '../components/ChristmasFestivalHeader';
import ChristmasFestivalProgramContent from '../database/ChristmasFestivalProgramContent';
import ChristmasFestivalProgramDisplay from '../components/ChristmasFestivalProgramDisplay';

const mainProgram = ChristmasFestivalProgramContent.filter(mainProgram => mainProgram.classification === 'main-program');

const ChristmasFestivalProgramPage = () => (
        <>
            <Header/>
            <ChristmasFestivalHeader/>
            <p></p>
            <br/>
            <div class="row about-content justify-content-center">
            <div class="col-12">
                <div class="section-heading">
                    <h3></h3>
            <div class="program-image-container">
                <ChristmasFestivalProgramDisplay list={mainProgram}/> 
            </div>
            </div>
            </div>
            </div>

            <Footer />
        </>
    );

export default ChristmasFestivalProgramPage;