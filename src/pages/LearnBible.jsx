import React from 'react';
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LearnBible = () => {
    return (
        <div>
            <Preloader/>
            <Header/>
            <section className="about-us-area about-page section-padding-25">
                <h2 className="section-heading"> Giáo Lý của Giáo Hội Công Giáo.</h2>
                <div className="container">
                    <div className="row align-items-center justify-content-between text-center">
                        <div className="col-12 col-lg-6 col-sm-6 section-padding-25">
                            <div className="about-content">
                                <img src="http://hvmatl.net/gallery/img/bg-img/catholic2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 col-sm-5 section-padding-25">
                            <div className="about-content">
                                <p><h5><a href="https://www.conggiao.org/7-phep-bi-tich/" style={{color: "#850000", fontSize: "100%"}}> 7 Bí tích</a></h5></p>
                                <p><h5><a href="https://www.conggiao.org/" style={{color: "#850000", fontSize: "100%"}}>Tài liệu tham khảo chung</a></h5></p>
                                <p><h5><a href="religion/lent.html" style={{color: "#850000", fontSize: "100%"}}>Học hỏi mùa chay và mùa phục sinh</a></h5></p>
                                <p><h5><a href="religion/About_Easter.html" style={{color: "#850000", fontSize: "100%"}}>Tìm hiểu về ngày lễ phục sinh</a></h5></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};
export default LearnBible;