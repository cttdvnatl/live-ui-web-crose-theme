import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StJosephHeader from '../components/StJosephHeader';
import teacherContent from '../database/stJosephTeachers';
import DisplayVolunteer from '../components/DisplayVolunteer';

//const mainTeachers = teacherContent.filter(mainTeachers => mainTeachers.classification === 'main-teacher');
//const assistantTeachers = teacherContent.filter(assistantTeachers => assistantTeachers.classification === 'assistant-teacher');

function StJosephTeacherPage() {
    return (
        <>
            <Header />
            <StJosephHeader />
            <p></p>
            <div class="col-12">
                <div class="section-heading">
                    <br />
                    <h2>Thầy Cô Ban Giáo Lý Trẻ Em</h2>
                    <h3>Niên Học 2020-2021</h3>
                </div>
                <DisplayVolunteer list={teacherContent} />
            </div>
            <Footer />
        </>
    );
}

export default StJosephTeacherPage;