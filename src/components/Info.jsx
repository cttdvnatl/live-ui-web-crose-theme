import React from 'react';
import { useTranslation } from 'react-multi-lang';

const Info = (prop) => {
    const t = useTranslation()
    return(
        <section className="about-area section-padding-100-0">
            <div className="container">
                <div className="row about-content justify-content-center">
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <a href="/learnBible"><img src="http://cttdvnatl.net/gallery/img/bg-img/catholic2.jpg" alt=""/></a>
                            <div className="about-text">
                                <a href="/learnBible"><h4>{t("info.item1.heading")}</h4></a>
                                <p>{t("info.item1.description")}</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <a href="/weeklyNews"><img src="http://cttdvnatl.net/gallery/img/index/about-thongtinmucvu.jpg" alt=""/></a>
                            <div className="about-text">
                                <a href="/weeklyNews"><h4>{t("info.item2.heading")}</h4></a>
                                <p>{t("info.item2.description")}</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="about-us-content mb-100">
                            <img src="http://cttdvnatl.net/gallery/img/index/about3.png" alt=""/>
                            <div className="about-text">
                                <h4>{t("info.item3.heading")}</h4>
                                <div className="find-out-more-btn">
                                    <p style={{display : 'flex'}}><a href="https://www.facebook.com/pg/cttdvn/videos/?ref=page_internal" style={{fontSize:"36px", color:"#ffffff", backgroundColor: '#6666ff'}} className="crose-btn"><i className="fab fa-facebook-f"/></a>
                                    <a style={{fontSize:"36px", color:"#ffffff"}} href="https://www.youtube.com/c/HVMATL"  className="crose-btn"><i className="fab fa-youtube"/></a></p>
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