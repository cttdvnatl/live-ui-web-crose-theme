import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChristmasFestivalHeader from '../components/ChristmasFestivalHeader';
import ChristmasFestivalCuisineContent from '../database/ChristmasFestivalCuisineContent';
import ChristmasFestivalCuisineDisplay from '../components/ChristmasFestivalCuisineDisplay';

const mainCuisine = ChristmasFestivalCuisineContent.filter(mainCuisine => mainCuisine.classification === 'main-cuisine');

const ChristmasFestivalCuisinePage = () => (
        <>
            <Header/>
            <ChristmasFestivalHeader/>
            <p></p>
            <br/>
            <div class="row about-content justify-content-center">
            <div class="col-12">
                <div class="section-heading">
                    <h3></h3>
            <div class="cuisine-image-container">
                <ChristmasFestivalCuisineDisplay list={mainCuisine}/> 
            </div>
            </div>
            </div>
            </div>

            <Footer />
        </>
    );

export default ChristmasFestivalCuisinePage;