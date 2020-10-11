import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import staffcontent from '../database/staff-content';
import DisplayVolunteer from '../components/DisplayVolunteer';


const Staff = (prop) => {
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
export default Staff;