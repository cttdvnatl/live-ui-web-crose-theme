import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { withRouter } from 'react-router-dom';
import PopupModal from "./PopupModal";

const Event = (prop) => {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({});
    const displayModal = (e, title, content) => {
        e.preventDefault();
        setShow(true);
        setContent({
            title: title,
            url: content
        });
    };

    const hideModal = () => {
        setShow(false);
        setContent({});
    };

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
                                                <p><a href="/" onClick={(e) => displayModal(e, "PHỤNG VỤ", "https://docs.google.com/document/d/e/2PACX-1vTeVX_F_3ZImj6feG5XpDdof9_xQ8gIfxYdFxRYbPCRgnBu5Z8aFIZPzDj-2CtK4B7z_cBKy4gY_XLC/pub?embedded=true")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  PHỤNG VỤ</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "CHẶNG ĐÀNG THÁNH GIÁ MÙA CHAY 2020", "news/UPDATE.html#target1")} style={{color:"#850000"}}><i className="fa fa-calendar"/> CHẶNG ĐÀNG THÁNH GIÁ MÙA CHAY 2020</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "NGẮM NĂM DẤU THÁNH CHÚA GIÊSU VÀ DÂNG HẠT MÙA CHAY 2020", "news/UPDATE.html#target2")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  NGẮM NĂM DẤU THÁNH CHÚA GIÊSU VÀ DÂNG HẠT MÙA CHAY 2020</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "TĨNH TÂM MÙA CHAY 2020", "news/UPDATE.html#target3")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  TĨNH TÂM MÙA CHAY 2020</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "KHỐI GIÁO DỤC", "news/UPDATE.html#target4")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  KHỐI GIÁO DỤC</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "CHÚC MỪNG BỔN MẠNG", "news/UPDATE.html#target5")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  CHÚC MỪNG BỔN MẠNG</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "CHÚC MỪNG RỬA TỘI", "news/UPDATE.html#target6")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  CHÚC MỪNG RỬA TỘI</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "HỘI CHỢ MÙA THU 2020", "news/UPDATE.html#target7")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  HỘI CHỢ MÙA THU 2020</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "BAN BÁC ÁI XÃ HỘI", "news/UPDATE.html#target8")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  BAN BÁC ÁI XÃ HỘI</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "HỘI CAO NIÊN DIÊN HỒNG", "news/UPDATE.html#target9")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  HỘI CAO NIÊN DIÊN HỒNG</a></p>
                                                <p><a href="/" onClick={(e) => displayModal(e, "KHỐI GÂY QUỸ", "news/UPDATE.html#target10")} style={{color:"#850000"}}><i className="fa fa-calendar"/>  KHỐI GÂY QUỸ</a></p>
                                            </div>
                                            {show ? <PopupModal show={show} content={content} onHide={hideModal}/> : null}
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