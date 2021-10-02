import React from 'react';
import ClergyList from '../components/ClergyList';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import Data from '../database/Clergy.json';
import hvmatlDataVN from '../database/hvmatlDataVN';
import hvmatlDataEN from '../database/hvmatlDataEN';
import { useTranslation, getLanguage } from 'react-multi-lang';



const ClergyListPage = () => {
    
    let Data;

    if (getLanguage() === 'vn') {
        Data = hvmatlDataVN.clergyList;
    }
    if (getLanguage() === 'en') {
        Data = hvmatlDataEN.clergyList;
    }

    const t = useTranslation()
    return (
        <div>
            <Header/> 
            <ClergyList data={Data}/>
            <Footer/>
        </div>
    );
};
export default ClergyListPage; 