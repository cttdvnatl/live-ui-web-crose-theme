import React from 'react';

const Footer = (prop) => {
    return (
        <footer className="footer-area">
        {/* <!-- Main Footer Area --> */}
        <div className="main-footer-area">
            <div className="row text-center">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-3">
                    <div className="single-footer-widget">
                        <p className="footer-logo"><img src="http://cttdvnatl.net/gallery/img/bg-img/footer_img.png" alt=""/></p>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="single-footer-widget">
                        <h5 className="widget-title">Quick Link</h5>
                        <div className="quick-link">
                            <a href="/"><i className="fa fa-angle-double-right" aria-hidden="true"/> Trang Chủ</a>
                            <a href="about.html"><i className="fa fa-angle-double-right" aria-hidden="true"/> Giới Thiệu</a>
                            <a href="massTime.html"><i style={{color: "#c92f2f"}} className="fa fa-clock-o" aria-hidden="true"/>  GIỜ LỄ / MASSTIMES</a>
                            <a href="/activities"><i style={{color: "#c92f2f"}} className="fa fa-bullhorn" aria-hidden="true"/> Thông Báo</a>
                            <a href="weeklyNews.html"><i style={{color: "#c92f2f"}} className="fa fa-newspaper-o" aria-hidden="true"/> Tờ Thông Tin</a>
                            <a href="https://www.tomathienatl.org"><i className="fa fa-angle-double-right" aria-hidden="true"/> Thiếu Nhi Thánh Thể</a>
                            <a href="departments.html?x=KGD"><i className="fa fa-angle-double-right" aria-hidden="true"/> Khối Giáo Dục</a>
                            <a href="https://fallfestivalatl.org/"><i className="fa fa-angle-double-right" aria-hidden="true"/> Hội Chợ Mùa Thu</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                </div>
                <div className="col-sm-2">
                    <div className="single-footer-widget">
                        <h5 className="widget-title">Contact Us</h5>
                        <div className="contact-information">
                            <a href="https://goo.gl/maps/3HKC8U28RLt9BcR7A"><i className="fa fa-map-marker" aria-hidden="true"/> 4545-A Timmers Way, Norcross, GA </a>
                            <a href="tel:770-921-0077"><i className="fa fa-phone" aria-hidden="true"/> 770-921-0077</a>
                            <a href="mailto:info@cttdvnatl.org"><i className="fa fa-envelope" aria-hidden="true"/> info@cttdvnatl.org</a>
                            <p><i className="fa fa-clock-o" aria-hidden="true"/> Mon - Sat : 9:30&nbsp;AM - 12:30&nbsp;PM, 1:30&nbsp;PM - 5:00&nbsp;PM</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1">
                </div>
            </div>
        </div>
 
        {/* <!-- Copwrite Area --> */}
        <div className="copywrite-area">
            <div className="container h-100">
                <div className="row h-100 align-items-center flex-wrap">
                    {/* <!-- Copywrite Text --> */}
                    <div className="col-12 col-md-6">
                        <div className="copywrite-text">
                            <p>
                                Copyright &copy; {new Date().getFullYear()} All rights reserved | GX CTTĐVN - ATL
                            </p>
                        </div>
                    </div>
                    {/* <!-- Footer Social Icon --> */}
                    <div className="col-12 col-md-6">
                        <div className="footer-social-icon">
                            <a href="https://www.facebook.com/cttdvn" aria-label="facebook"><i className="fa fa-facebook-square"/></a>
                            <a href="https://twitter.com/thanhtudaovn" aria-label="twitter"><i className="fa fa-twitter"/></a>
                            <a href="https://www.youtube.com/user/ThanhTuDaoVietNam" aria-label="youtube"><i className="fa fa-youtube"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};
export default Footer;