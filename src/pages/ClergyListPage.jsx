import React from 'react';
import clergyContent from '../database/clergies-content';
import ClergyListCurrent from '../components/ClergyListCurrent';
import ClergyListPast from '../components/ClergyListPast';
import Header from '../components/Header';

const currentClergies = clergyContent.filter(currentClergies => currentClergies.endDate === 'TBD');
const formerClergies = clergyContent.filter(formerClergies => formerClergies.endDate !== 'TBD');
const ClergyListPage = () => (
    <>
    <Header/>
    <p></p>
    <div class="col-12">
        <div class="section-heading">
            <h2><b>Linh Mục / Tu Sĩ - Đương Nhiệm</b></h2>
        </div>
        <ClergyListCurrent list={currentClergies} />
    </div>
    <div class="col-12">
        <div class="section-heading">
            <h2><b>Cựu Linh Mục / Tu Sĩ</b></h2>
        </div>
        <ClergyListPast list={formerClergies} />
    </div>    
    </>
);

export default ClergyListPage;