import React from 'react';
import ClergyList from '../components/ClergyList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Data from '../database/Clergy.json';


const ClergyListPage = () => {
   return (
        <div>
            <Header/> 
            <ClergyList data={Data}/>
            <Footer/>
        </div>
    );
};
export default ClergyListPage; 