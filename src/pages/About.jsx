import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const About = () => {
    return (
        <div>
            <Header/>
            <div className="about-us-area about-page section-padding-100">
                <div className="container">
                    <center><h2>Sứ Mệnh Giáo Xứ</h2></center>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-lg-6">
                                <div className="about-content">
                                    <a href="img/bg-img/meaning_symbol.jpg"><img src="img/core-img/Logo1.png" alt=""/></a>
                                    <p style={{textAlign:"center"}}><i>
                                        <a href="img/bg-img/vietsym.jpg" style={{color:"#850000"}}>Ý nghĩa dấu hiệu</a> / <a href="img/bg-img/engsym.jpg" style={{color:"#850000"}}>Symbol significant</a></i>
                                    </p>
                                </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="about-content">
                                <h2>Giáo Xứ Các Thánh Tử Đạo Việt Nam</h2>
                                <p>Giáo Xứ Các Thánh Tử Đạo Việt Nam thuộc Tổng Giáo Phận Atlanta 
                                    là cộng đoàn người Công Giáo gốc Việt cùng sống cử hành, 
                                    loan truyền đức tin Công Giáo, đồng thời duy trì 
                                    và phát triển truyền thống văn hoá Việt Nam.</p>
                                <div className="opening-hours-location mt-30 d-flex align-items-center">
                                    {/* <!-- Opening Hours --> */}

                                    {/* <!-- Location --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default About;