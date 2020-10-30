import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PopupModal from "./PopupModal";

const Event = (prop) => {
    const [getData] = useState([]);
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

    // useEffect(() => {
    //     const now = new Date();
    //     const from = new Date(now.setUTCHours(0,0,0,0) - now.getUTCDay() * 86400000);
    //     const to = new Date(now.setUTCHours(0,0,0,0) + (6 - now.getUTCDay()) * 86400000);
    //     axios.post('https://hvmatl-backend.herokuapp.com/authentication', {
    //         username: 'anonymous',
    //         password: 'anonymous'
    //     }).then(auth => {
    //         axios({
    //             method: 'GET',
    //             url:'https://hvmatl-backend.herokuapp.com/weeklyEvent',
    //             headers: {
    //                 'Authorization': `Bearer ${auth.data.token}`
    //             },
    //             params:{
    //                 from: from,
    //                 to: to
    //             }
    //         }).then(res => setData(Array.isArray(res.data) ? res.data: []));
    //     })}, []);

    return (
        <section className="upcoming-events-area section-padding-0-100">
            {/* <!-- Upcoming Events Heading Area --> */}
            <div className="upcoming-events-heading bg-img bg-overlay bg-fixed">
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
                {getData.map((event, i) =>
                <Carousel.Item key={i}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="single-slide">
                                    {/* <!-- Single Upcoming Events Area --> */}
                                    <div className="single-upcoming-events-area d-flex flex-wrap align-items-center">
                                        {/* <!-- Thumbnail --> */}
                                        <div className="upcoming-events-thumbnail">
                                            <img src={event.image} alt=""/>
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="upcoming-events-content d-flex flex-wrap align-items-center">
                                            {event.events.map((evnt, ind) => {
                                                return (
                                                    <div className="events-text" key={ind}>
                                                        <p><a href="/" onClick={(e) => displayModal(e, evnt.title, evnt.src)} style={{color:"#850000"}}><i className="fas fa-calendar"/> {evnt.title}</a></p>
                                                    </div>
                                                );
                                            })}
                                            {show ? <PopupModal show={show} content={content} onHide={hideModal}/> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>)}
            </Carousel>
        </section>
    );
};

export default Event;