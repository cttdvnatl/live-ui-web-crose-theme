import React, { useState, useEffect } from 'react';
//import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import staffcontent from '../database/staff-content';
import hvmatlDataVN from '../database/hvmatlDataVN';
import hvmatlDataEN from '../database/hvmatlDataEN';
import DisplayVolunteer from '../components/DisplayVolunteer';
import { /*useTranslation,*/ getLanguage } from 'react-multi-lang';

const Staff = () => {

    const [Data, setData] = useState(hvmatlDataVN.staff)
    useEffect(() => {
        if (getLanguage === 'vn') {
            setData(hvmatlDataVN.staff);
        }
        else if (getLanguage === 'en') {
            setData(hvmatlDataEN.staff);
        }
    }, [])

    //const t = useTranslation()
    return (
        <div>
            <Header />
            <DisplayVolunteer data={Data} />
            <Footer />
        </div>
    );
};

/*const Staff = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header/>
            <div className="col-12">
                <div class="section-heading">
                    <h2><b>Hội Đồng Mục Vụ / Hội Đồng Tài Chánh 2019-2023</b></h2>
                </div>
                <DisplayVolunteer list={staffcontent} />
            </div>
            <Footer/>
        </div>
    )
};
*/
export default Staff;