import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StJosephHeader from '../components/StJosephHeader';
import StJosephCalendar from '../components/StJosephCalendar';

const StJoseph = () => {
    return (
        <div>
            <Header/>
            <StJosephHeader/>
            <br/><br/>
                <div className="container-fluid text-center">
                    <h2>Trường Thánh Giuse</h2>
                    <h3>Vì sự lây lan của coronavirus, tất cả các sinh hoạt của Trường Giáo Lý sẽ được đình chỉ.</h3>
                    <StJosephCalendar/>
                </div>
            <Footer/>
        </div>
    );
};

export default StJoseph;