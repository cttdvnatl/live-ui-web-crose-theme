import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Catholic_teaching = () => {
    return (
        <div>
            <Header/>
            <div className="about-us-area about-page section-padding-100">

                <div className="container">
                    <center><h2> Giáo Lý của Giáo Hội Công Giáo. </h2></center>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                            <div className="about-content">
                                <p className="footer-logo"><img src="http://hvmatl.net/gallery/img/bg-img/catholic2.jpg" alt=""/></p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="about-content">
                                <p style={{"font-size": "130%"}}>- 7 <a href="https://www.conggiao.org/7-phep-bi-tich/"
                                                                  style={{"color": "#850000'", "font-size":"100%"}}>Bí tích</a></p>
                                <p style={{"font-size": "130%"}}>- <a href="https://www.conggiao.org/"
                                                                style={{"color": "#850000'", "font-size":"100%"}}>Tài liệu tham
                                    khảo chung</a></p>
                                <p style={{"font-size": "130%"}}>- <a href="religion/lent.html"
                                                                style={{"color": "#850000'", "font-size":"100%"}}>Học hỏi mùa chay
                                    và mùa phục sinh</a></p>
                                <p style={{"font-size": "130%"}}>- <a href="religion/About_Easter.html"
                                                                style={{"color": "#850000'", "font-size":"100%"}}>Tìm hiểu về ngày
                                    lễ phục sinh</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Catholic_teaching;