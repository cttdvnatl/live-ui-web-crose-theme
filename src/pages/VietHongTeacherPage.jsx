import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import teacherContent from '../database/vietHongTeachers';
import VietHongTeachers from '../components/VietHongTeachers';

//Work in Progress

const mainTeachers = teacherContent.filter(mainTeachers => mainTeachers.classification === 'main-teacher');
const assistantTeachers = teacherContent.filter(assistantTeachers => assistantTeachers.classification === 'assistant-teacher');

const VietHongTeacherPage = () => (
    <>
    <Header/>
    <p></p>
    <div class="col-12">
        <div class="section-heading">
            <h2><b>Thầy Cô Ban Giám Thị</b></h2>
        </div>
        <VietHongTeachers list={mainTeachers} />
    </div>
    <div className="col-12">
        <div class="section-heading">
            <h2><b>Phụ Giáo</b></h2>
        </div>
        <VietHongTeachers list={assistantTeachers} />
    </div>
    <Footer/>
    </>
)

export default VietHongTeacherPage;