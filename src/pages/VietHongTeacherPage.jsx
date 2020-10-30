import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VietHongHeader from '../components/VietHongHeader';
import teacherContent from '../database/vietHongTeachers';
import DisplayVolunteer from '../components/DisplayVolunteer';

const mainTeachers = teacherContent.filter(mainTeachers => mainTeachers.classification === 'main-teacher');
const mainProctors = teacherContent.filter(mainProctors => mainProctors.classification === 'main-proctor');
const assistantTeachers = teacherContent.filter(assistantTeachers => assistantTeachers.classification === 'assistant-teacher');

const VietHongTeacherPage = () => (
    <>
    <Header/>
    <VietHongHeader/>
    <p></p>
    <div class="col-12">
        <div class="section-heading">
            <br/>
            <h2>Thầy Cô Việt Hồng</h2>
            <h3>Niên Học 2020-2021</h3>
        </div>
        <DisplayVolunteer list={mainTeachers} />
    </div>
    <div class="col-12">
        <div class="section-heading">
            <br/>
            <h2>Thầy Cô Giám Thị Việt Hồng</h2>
            <h3>Niên Học 2020-2021</h3>
        </div>
        <DisplayVolunteer list={mainProctors} />
    </div>
    <div class="col-12">
        <div class="section-heading">
            <br/>
            <h2>Phụ Giáo Việt Hồng</h2>
            <h3>Niên Học 2020-2021</h3>
        </div>
        <DisplayVolunteer list={assistantTeachers} />
    </div>
    <Footer/>
    </>
)

export default VietHongTeacherPage;