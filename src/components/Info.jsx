import React from 'react';

const Info = (prop) => {
    return(
        <section className="about-area section-padding-100-0">
            <div className="container">
                <div className="row">
                    {/* <!-- Section Heading --> */}
                    <div className="col-12">
                        <div className="section-heading">
                            <h2>GIÁO XỨ CÁC THÁNH TỬ ĐẠO VIỆT NAM - ATLANTA</h2>
                        </div>
                    </div>
                </div>
                <div className="row about-content justify-content-center">
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <a href="catholic_teaching.html"><img src="http://cttdvnatl.net/gallery/img/bg-img/catholic2.jpg" alt=""/></a>
                            <div className="about-text">
                                <a href="catholic_teaching.html"><h4>Giáo Lý</h4></a>
                                <p> Giáo Lý của Giáo Hội Công Giáo.
                                    Catechism of the Catholic Church. </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <a href="weeklyNews.html"><img src="http://cttdvnatl.net/gallery/img/index/about-thongtinmucvu.jpg" alt=""/></a>
                            <div className="about-text">
                                <a href="weeklyNews.html"><h4>Tờ Thông Tin Mục Vụ</h4></a>
                                <p>Thông tin mục vụ hàng tuần của Giáo Xứ Các Thánh Tử Đạo Việt Nam</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <img src="http://cttdvnatl.net/gallery/img/index/about3.png" alt=""/>
                            <div className="about-text">
                                <h4>2 Cách Xem Lễ Trực Tuyến:</h4>
                                <div className="find-out-more-btn">
                                    <p style={{display : 'flex'}}><a href="https://www.facebook.com/pg/cttdvn/videos/?ref=page_internal" style={{backgroundColor: '#809fff'}} className="crose-btn">FaceBook</a>
                                    <a style={{backgroundColor: '#ff6666', color : '#b30000'}} href="https://www.youtube.com/results?search_query=%23HolyVietnameseMartyrs"  className="crose-btn">YouTube</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Info;