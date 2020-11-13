import React from 'react';
import { useTranslation } from 'react-multi-lang';

const Footer = (prop) => {
    const t = useTranslation()
    return (
        <footer className="footer-area text-center">
        {/* <!-- Main Footer Area --> */}
        <div className="main-footer-area">
            <div className="row">
                <div className="col-sm-1 col-sm-1"/>
                <div className="col-sm-3 col-md-3">
                    <div className="single-footer-widget">
                        <p className="footer-logo"><img src="https://hvmatl.net/gallery/img/bg-img/footer_img3.png" alt=""/></p>
                    </div>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div className="single-footer-widget">
                        <h5 className="widget-title">{t("footer.widget1.heading")}</h5>
                        <div className="quick-link">
                            <a href="/"><i style={{color: "#c92f2f"}} className="fas fa-church" aria-hidden="true"/>{t("footer.widget1.item1")}</a>
                            <a href="/about"><i style={{color: "#c92f2f"}} className="fas fa-dove" aria-hidden="true"/>{t("footer.widget1.item2")}</a>
                            <a href="/massSchedule"><i style={{color: "#c92f2f"}} className="fas fa-clock" aria-hidden="true"/>{t("footer.widget1.item3")}</a>
                            <a href="/activities"><i style={{color: "#c92f2f"}} className="fa fa-bullhorn" aria-hidden="true"/>{t("footer.widget1.item4")}</a>
                            <a href="/weeklyNews"><i style={{color: "#c92f2f"}} className="fas fa-newspaper" aria-hidden="true"/>{t("footer.widget1.item5")}</a>
                            <a href="https://www.tomathienatl.org"><i style={{color: "#c92f2f"}} className="fas fa-users" aria-hidden="true"/>{t("footer.widget1.item6")}</a>
                            <a href="departments.html?x=KGD"><i style={{color: "#c92f2f"}} className="fas fa-graduation-cap" aria-hidden="true"/>{t("footer.widget1.item7")}</a>
                            <a href="https://fallfestivalatl.org/"><i style={{color: "#c92f2f"}} className="fas fa-holly-berry" aria-hidden="true"/>{t("footer.widget1.item8")}</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1 col-md-1"/>
                <div className="col-sm-3 col-md-3">
                    <div className="single-footer-widget">
                        <h5 className="widget-title">{t("footer.widget2.heading")}</h5>
                        <div className="contact-information">
                            <a href="https://goo.gl/maps/3HKC8U28RLt9BcR7A"><i className="fas fa-map" aria-hidden="true"/> 4545-A Timmers Way, Norcross, GA </a>
                            <a href="tel:770-921-0077"><i className="fas fa-phone" aria-hidden="true"/> 770-921-0077</a>
                            <a href="mailto:info@hvmatl.org"><i className="fas fa-envelope" aria-hidden="true"/> info@hvmatl.org</a>
                            <p><a href="/massSchedule"><i className="fas fa-calendar-alt" aria-hidden="true"/>Mon - Sat : 9:30&nbsp;AM - 12:30&nbsp;PM, 1:30&nbsp;PM - 5:00&nbsp;PM</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-1 col-md-1"/>
            </div>
            <div className="row copywrite-area">
                <div className="container h-100">
                    <div className="row h-100 align-items-center flex-wrap">
                        {/* <!-- Copywrite Text --> */}
                        <div className="col-12 col-md-6 col-sm-6">
                            <div className="copywrite-text">
                                <p>
                                    Copyright &copy; {new Date().getFullYear()} All rights reserved | GX CTTĐVN - ATL <a href="/cookies" id="cookies">Cookies</a>
                                </p>
                            </div>
                        </div>
                        {/* <!-- Footer Social Icon --> */}
                        <div className="col-12 col-md-6 col-sm-6">
                            <div className="footer-social-icon">
                                <a href="https://www.facebook.com/cttdvn" aria-label="facebook"><i className="fab fa-facebook"/></a>
                                <a href="https://twitter.com/thanhtudaovn" aria-label="twitter"><i className="fab fa-twitter"/></a>
                                <a href="https://www.youtube.com/user/ThanhTuDaoVietNam" aria-label="youtube"><i className="fab fa-youtube"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Copwrite Area --> */}

    </footer>
    );
};
export default Footer;