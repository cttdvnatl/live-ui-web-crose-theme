import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StJosephHeader from '../components/StJosephHeader';
import teacherContent from '../database/stJosephTeachers';
import DisplayVolunteer from '../components/DisplayVietHong';

const mainTeachers = teacherContent.filter(mainTeachers => mainTeachers.classification === 'main-teacher');
const mainProctors = teacherContent.filter(mainProctors => mainProctors.classification === 'main-proctor');
const childrenEucharist = teacherContent.filter(childrenEucharist => childrenEucharist.classification === 'children-eucharist');

function StJosephTeacherPage() {
    return (
        <>
            <Header />
            <StJosephHeader />
            <p></p>
            <div class="col-12">
                <div class="section-heading">
                    <br/>
                    <h2>Thầy Cô Ban Giáo Lý Trẻ Em</h2>
                    <h3>Niên Học 2022-2023</h3>
                </div>
                <DisplayVolunteer list={mainTeachers} />
            </div>
            <div class="col-12">
                <div class="section-heading">
                    <br />
                    <h2>Anh Chị Ban Thiếu Nhi Thánh Thể</h2>
                    <h3>Niên Học 2022-2023</h3>
                </div>
                <DisplayVolunteer list={childrenEucharist} />
            </div>
            <div class="col-12">
                <div class="section-heading">
                    <br />
                    <h2>Thầy Cô Ban Giám Thị </h2>
                    <h3>Niên Học 2022-2023</h3>
                </div>
                <DisplayVolunteer list={mainProctors} />
            </div>
            <Footer />
        </>
    );
}

export default StJosephTeacherPage;