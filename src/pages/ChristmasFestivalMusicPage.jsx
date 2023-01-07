import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChristmasFestivalHeader from '../components/ChristmasFestivalHeader';
import ChristmasFestivalMusicContent from '../database/ChristmasFestivalMusicContent';
import ChristmasFestivalMusicDisplay from '../components/ChristmasFestivalMusicDisplay';

const mainMusic = ChristmasFestivalMusicContent.filter(mainMusic => mainMusic.classification === 'main-music');

const ChristmasFestivalMusicPage = () => (
        <>
            <Header/>
            <ChristmasFestivalHeader/>
            <p></p>
            <br/>
            <div class="row about-content justify-content-center">
            <div class="col-12">
                <div class="section-heading">
                    <h3></h3>
            <div class="music-image-container">
                <ChristmasFestivalMusicDisplay list={mainMusic}/> 
            </div>
            </div>
            </div>
            </div>

            <Footer />
        </>
    );

export default ChristmasFestivalMusicPage;