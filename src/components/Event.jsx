import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Event = (prop) => {
    return (
        <section className="upcoming-events-area section-padding-0-100">
            {/* <!-- Upcoming Events Heading Area --> */}
            <div className="upcoming-events-heading bg-img bg-overlay bg-fixed" style={{backgroundImage: "url(http://cttdvnatl.net/gallery/img/bg-img/1.jpg)"}}>
                <div className="container">
                    <div className="row">
                        {/* <!-- Section Heading --> */}
                        <div className="col-12">
                            <div className="section-heading text-left white">
                                <h2>Thông Báo - Sự Kiện</h2>
                                <p>Hãy ghé thăm trang Sự kiện sắp tới của Giáo Xứ thường xuyên để nhận thông tin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Upcoming Events Slide --> */}
            <Carousel controls="false">
                <Carousel.Item>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="single-slide">
                                    {/* <!-- Single Upcoming Events Area --> */}
                                    <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                        {/* <!-- Thumbnail --> */}
                                        <div className="upcoming-events-thumbnail">
                                            <img src="http://cttdvnatl.net/gallery/img/bg-img/upcoming_events.jpg" alt=""/>
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                            <div className="events-text">
                                                <p><a href="activites.html#target21" style={{color:"#850000"}}>PHỤNG VỤ TẾT NGUYÊN ĐÁN CANH TÝ 2020.</a></p>
                                                <p><a href="activites.html#target20" style={{color:"#850000"}}>KHỐI GIÁO DỤC - Thông báo nghỉ học.  Tĩnh Tâm lớp 4.  Giáo Lý Rửa Tội</a></p>
                                                <p><a href="activites.html#target19" style={{color:"#850000"}}>THÁNH LỄ CẦU CHO CÁC BỆNH NHÂN - Đây là cơ hội để các bệnh nhân, các người chăm sóc bệnh nhân, và các thân quyến của bệnh nhân đến nhà thờ cử hành Thánh lễ chữa lành kính Đức Mẹ Lộ Đức.</a></p>
                                                <p><a href="activites.html#target18" style={{color:"#850000"}}>KHỐI ĐỜI SỐNG - BUỔI CHÀO ĐÓN THÀNH VIÊN MỚI</a></p>
                                                <p><a href="activites.html#target17" style={{color:"#850000"}}>MỤC VỤ EMBRACE - Để giúp đỡ và đồng hành với các cha mẹ bị sẩy thai hay có con trẻ qua đời sớm, Mục Vụ Embrace sẽ có NGHI LỄ cho các linh hồn thai nhi trong và ngoài giáo xứ. </a></p>
                                                <p><a href="activites.html#target16" style={{color:"#850000"}}>LỚP DIỀU HÒA SINH SẢN - Lớp điều hòa sinh sản theo phương pháp tự nhiên</a></p>
                                                <p><a href="activites.html#target15" style={{color:"#850000"}}>CHÚC MỪNG THÀNH VIÊN MỚI: Joseph Ly Tri, Têrêsa Nguyen Nu Thuc Hanh, Francis Le Hong Minh, Joseph  Pham Quoc Toản, Vincent Nguyen Van Tuan</a></p>
                                                <p><a href="activites.html#target14" style={{color:"#850000"}}>MARRIAGE ANNOUNCEMENT - Francis Khanh Ngoc Bao Le & Tho Thi Trinh</a></p>
                                                <p><a href="activites.html#target13" style={{color:"#850000"}}>MARRIAGE ANNOUNCEMENT - Gioan Baotixita Khanh Kim Nguyen & Mary Uyen Hoang Xuan Chu</a></p>
                                                <p><a href="activites.html#target12" style={{color:"#850000"}}>MARRIAGE ANNOUNCEMENT - Paul Tuan An Dao Vu & Ine Nhi Ai Nguyen</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Event;