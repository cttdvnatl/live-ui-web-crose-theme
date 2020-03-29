import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { withRouter } from 'react-router-dom';

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
                                            <img src="http://cttdvnatl.net/gallery/img/index/upcoming-upcoming_events.jpg" alt=""/>
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                            <div className="events-text">
                                                <p><a href="/" onClick={(e) => displayModal(e, "CẬP NHẬT HÓA CORONAVIRUS", "http://cttdvnatl.net/gallery/img/bg-img/news/activities_headings2.html#target0")} style={{color:"#850000"}}>CẬP NHẬT HÓA CORONAVIRUS</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "KHỐI GIÁO DỤC: COVID 19 dừng tất cả các sinh hoạt cho đến khi có thông báo lại", "http://cttdvnatl.net/gallery/img/bg-img/news/activities_headings2.html#target1")} style={{color:"#850000"}}>KHỐI GIÁO DỤC: COVID 19 dừng tất cả các sinh hoạt cho đến khi có thông báo lại</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "BAN BÁC ÁI XÃ HỘI", "http://cttdvnatl.net/gallery/img/bg-img/news/activities_headings2.html#target2")} style={{color:"#850000"}}>BAN BÁC ÁI XÃ HỘI</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "KHỐI GÂY QUỸ", "http://cttdvnatl.net/gallery/img/bg-img/news/activities_headings2.html#target3")} style={{color:"#850000"}}>KHỐI GÂY QUỸ</a></p>
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
};

export default withRouter(Event);