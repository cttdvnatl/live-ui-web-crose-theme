import React from 'react';

const Info = (prop) => {
    return(
        <section class="about-area section-padding-100-0">
            <div class="container">
                <div class="row">
                    {/* <!-- Section Heading --> */}
                    <div class="col-12">
                        <div class="section-heading">
                            <h2>GIÁO XỨ CÁC THÁNH TỬ ĐẠO VIỆT NAM - ATLANTA</h2>
                        </div>
                    </div>
                </div>

                <div class="row about-content justify-content-center">
                    {/* <!-- Single About Us Content --> */}
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="about-us-content mb-100">
                            <a href="catholic_teaching.html"><img src="http://cttdvnatl.net/gallery/img/bg-img/catholic2.jpg" alt=""/></a>
                            <div class="about-text">
                                <a href="catholic_teaching.html"><h4>Giáo Lý</h4></a>
                                <p> Giáo Lý của Giáo Hội Công Giáo.
                                    Catechism of the Catholic Church. </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single About Us Content --> */}
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="about-us-content mb-100">
                            <a href="weeklyNews.html"><img src="http://cttdvnatl.net/gallery/img/church/thongtinmucvu.jpg" alt=""/></a>
                            <div class="about-text">
                                <a href="weeklyNews.html"><h4>Tờ Thông Tin Mục Vụ</h4></a>
                                <p>Thông tin mục vụ hàng tuần của Giáo Xứ Các Thánh Tử Đạo Việt Nam</p>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Single About Us Content --> */}
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="about-us-content mb-100">
                            <a href="forms.html"><img src="http://cttdvnatl.net/gallery/img/bg-img/Form.jpg" alt=""/></a>
                            <div class="about-text">
                                <a href="./pdf/silent_auction.pdf"><h4>Đơn Từ - Dùng Trong Giáo Xứ</h4></a>
                                <p>Các đơn từ dùng trong Giáo Xứ Các Thánh Tử Đạo Việt Nam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Info;