import React from 'react';
import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Footer from "../components/Footer";
import content from "../database/photos.json";

const photos = (prop) => {
    return (
        <div>
            <Preloader/>
            <Header/>
            <section>
                <h2 className="section-heading">Thư Viện Hình Ảnh</h2>
                <div className="container">
                    { content.map((item, idx) => {
                        return (
                            <div className="row single-upcoming-events-area d-flex flex-wrap align-items-center" key={idx}>
                                <div className="upcoming-events-thumbnail">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                    <div className="events-text">
                                        <h4>{item.title}</h4>
                                        <div className="events-meta">
                                            <a href="/"><i className="fa fa-calendar" aria-hidden="true"/>{item.date}</a>
                                        </div>
                                        <p>{item.body}</p>
                                    </div>
                                    <div className="find-out-more-btn">
                                        <a href={item.pdf} className="crose-btn btn-2">Xem thêm</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <p>&nbsp;</p>
            </section>
            <Footer/>
        </div>
    );
};
export default photos;