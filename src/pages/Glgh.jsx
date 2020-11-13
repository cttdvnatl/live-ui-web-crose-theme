import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Glgh = () => {
    return (
        <div>
            <Header />
            <div class="about-us-area about-page section-padding-100">
                <div class="container">
                    <center><h2> Giáo Lý của Giáo Hội Công Giáo. </h2></center>
                    <div class="row align-items-center justify-content-between">
                        <div class="col-12 col-lg-6">
                            <div class="about-content">
                                <img src="http://hvmatl.net/gallery/img/bg-img/catholic2.jpg" alt=""></img>
                            </div>
                        </div>
                        <div class="col-12 col-lg-5">
                            <div class="about-content">
                                <p><a href="https://www.conggiao.org/7-phep-bi-tich/"><h4>- 7 Bí tích </h4></a></p>
                                <p><a href="https://www.conggiao.org/"><h4>- Tài liệu tham khảo chung </h4></a></p>
                                <p><a href="http://www.hvmatl.org/religion/lent.html"><h4>- Học hỏi mùa chay và mùa phục sinh </h4></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Glgh;