import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GiaoLyHeader from '../components/GiaoLyHeader';
import GiaoLyCalendar from '../components/GiaoLyCalendar';

const GiaoLy = () => {
    return (
        <div>
            <Header/>
            <GiaoLyHeader/>
            <br/><br/>
                <div className="container-fluid text-center">
                    <h2>Trường Giáo Lý</h2>
                    <h3>Vì sự lây lan của coronavirus, tất cả các sinh hoạt của Trường Giáo Lý sẽ được đình chỉ.</h3>
                    <GiaoLyCalendar/>
                </div>
            <Footer/>
        </div>
    );
};

export default GiaoLy;