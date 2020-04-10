import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import teacherContent from '../database/vietHongTeachers';
import DisplayVolunteer from '../components/DisplayVolunteer';

const mainTeachers = teacherContent.filter(mainTeachers => mainTeachers.classification === 'main-teacher');
const assistantTeachers = teacherContent.filter(assistantTeachers => assistantTeachers.classification === 'assistant-teacher');

const VietHongTeacherPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <p></p>
    <div class="col-12">
        <div class="section-heading">
            <h2><b>Các Thầy Cô Và Ban Giám Thị</b></h2>
            <h2>*** PAGE UNDER CONSTRUCTION ***</h2>
        </div>
        <DisplayVolunteer list={mainTeachers} />
    </div>
    <div className="col-12">
        <div class="section-heading">
            <h2><b>Các Em Phụ Giáo</b></h2>
        </div>
        <DisplayVolunteer list={assistantTeachers} />
    </div>
    <Footer/>
    </>
)

export default VietHongTeacherPage;