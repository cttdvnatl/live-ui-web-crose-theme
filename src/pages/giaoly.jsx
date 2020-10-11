import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const GiaoLy = () => {
    return (
        <div>
            <Header/>
                <div className="container-fluid text-center">
                <h2>Trường Giáo Lý</h2>
                <h3>Vì sự lây lan của coronavirus, tất cả các sinh hoạt của Trường Giáo Lý sẽ được đình chỉ.</h3>
                <iframe title="VietHong" src="https://infinite-coast-35894.herokuapp.com/" style={{borderWidth:0}} width="100%" height="2300" frameborder="0" scrolling="yes"/>
                
                </div>
            <Footer/>
        </div>
    );
};

export default GiaoLy;