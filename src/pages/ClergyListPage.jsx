import React from 'react';
import clergyContent from '../database/clergies-content';
import ClergyList from '../components/ClergyList';
import Header from '../components/Header';


const ClergyListPage = () => (
    <>
    <Header/>
    <div class="col-12">
                    <div class="section-heading">
                        <h2>Linh Mục / Tu Sĩ - Đương Nhiệm</h2>
                    </div>
                    <ClergyList list={clergyContent} />
    </div>
    
    </>
);

export default ClergyListPage;