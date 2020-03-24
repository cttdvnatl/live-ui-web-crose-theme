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
                            <a target="_blank" href="https://www.facebook.com/pg/cttdvn/videos/?ref=page_internal"><img src="http://cttdvnatl.net/gallery/img/index/about3.png" alt=""/></a>
                            <div className="about-text">
                                <a target="_blank" href="https://www.facebook.com/pg/cttdvn/videos/?ref=page_internal"><h4>Xem Lễ Trực Tuyến Tại Đây</h4></a>
                                <p>Vào trang Facebook của Giáo Xứ Để Tham Dự Thánh Lễ Trực Tuyến</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <a target="_blank" href="https://www.youtube.com/results?search_query=%23HolyVietnameseMartyrs"><img src="http://cttdvnatl.net/gallery/img/index/YouTube.jpg" alt=""/></a>
                            <div className="about-text">
                                <a target="_blank" href="https://www.youtube.com/results?search_query=%23HolyVietnameseMartyrs"><h4>Thánh Lễ Thâu Lại Trên YouTube</h4></a>
                                <p>Truy vấn các Thánh Lễ tại Giáo Xứ Các Thánh Tử Đạo VietNam Atlanta, GA trên YouTube</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Info;