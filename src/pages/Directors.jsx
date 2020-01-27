import React from 'react';
import Preloader from '../components/Preloader';
import Header from '../components/Header';


const Directors = (prop) => {
    return(
        <div>
            <Preloader/>
            <Header/>

            {/* <!-- ##### About Us Area Start ##### --> */}
            <div class="Sơ Đồ Tổ Chức-area section-padding-25">
                <center><h2>Hội Đồng Mục Vụ 2019-2023</h2></center>
                <img src="img/core-img/HDMV2019.jpg" alt="HDMV2019" class="center-50"/>
            </div>
    <section class="about-area section-padding-25">
        <div class="container">
            <div class="row">
                {/* <!-- Section Heading --> */}
                <div class="col-12">
                    <div class="section-heading">
                        <h2>Qúy Chức</h2>
                    </div>
                </div>
            </div>

            <div class="row about-content justify-content-center">
                {/* <!-- Single About Us Content --> */}
                <div class="col-10 col-md-6 col-lg-3">
                    <div class="about-us-content mb-100">
                        <img src="img/core-img/Danh.jpg" alt=""/>
                        <div class="about-text">
                            <h4>Phêrô Nguyễn Thành Danh, Trưởng HĐMV</h4>
                        </div>
                    </div>
                </div>
                {/* <!-- Single About Us Content --> */}
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="about-us-content mb-100">
                        <img src="img/core-img/PhucNguyen.jpg" alt=""/>
                        <div class="about-text">
                            <h4>Phêrô Nguyễn Đức Phúc, Phó HĐMV</h4>
                        </div>
                    </div>
                </div>

                {/* <!-- Single About Us Content --> */}
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="about-us-content mb-100">
                        <img src="img/core-img/SonNguyen.jpg" alt=""/>
                        <div class="about-text">
                            <h4>Giuse Nguyễn Đức Sơn, Trưởng HDTC</h4>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    </section>
        </div>
    )
}
export default Directors;