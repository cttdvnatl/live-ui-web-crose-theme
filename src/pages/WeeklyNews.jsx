import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from "../components/Preloader";
import axios from "axios";
import PopupModal from "../components/PopupModal";
const WeeklyNews = () => {
    const [getData, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({});

    const displayModal = (e, title, content) => {
        e.preventDefault();
        setContent({
            title: title,
            url: content
        });
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
        setContent({});
    };

    useEffect(() => {
        const now = new Date();
        let mtplr;
        const from = new Date(`${now.getMonth()}-01-${now.getFullYear()}`);

        if([2, 3].includes(now.getMonth() + 1)) {
            mtplr = now.getFullYear() % 4 === 0 ? 31+29 : 31+28;
        } else {
            mtplr = now.getMonth() + 1 === 8 ? 62 : 61;
        }
        const to = new Date(from.getTime() + mtplr * 86400000);

        axios.post('https://hvmatl-backend.herokuapp.com/authentication', {
            username: 'anonymous',
            password: 'anonymous'
        }).then(auth => {
            axios({
                method: 'GET',
                url:'https://hvmatl-backend.herokuapp.com/weeklyNews',
                headers: {
                    'Authorization': `Bearer ${auth.data.token}`
                },
                params:{
                    from: from,
                    to: to
                }
            }).then(res => setData(Array.isArray(res.data) ? res.data: []));
        })}, []);


    return (
        <div>
            <Preloader/>
            <Header/>
            <section className="about-area section-padding-100-0">
                {[new Date().getMonth() + 1, new Date().getMonth()].map(month => {
                    return (
                        <div className="container" key={month}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading">
                                        <h2><b>Thông tin mục vụ tháng {month}</b></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row about-content justify-content-center">
                                {getData.map(
                                    (weeklyNews,idx) => new Date(weeklyNews.date).getMonth() + 1 === month ?
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                                            <div className="about-us-content mb-100">
                                                <a href="/" onClick={(e) => displayModal(e, weeklyNews.title, weeklyNews.src)}><img src={weeklyNews.image} alt=""/></a>
                                                <div className="about-text text-center">
                                                    <a href="/" onClick={(e) => displayModal(e, weeklyNews.title, weeklyNews.src)}><h4>{weeklyNews.title}</h4></a>
                                                </div>
                                            </div>
                                        </div> : null)
                                }
                                {show ? <PopupModal show={show} content={content} onHide={hideModal}/> : null}
                            </div>
                        </div>
                    );
                })}
            </section>
            <Footer/>
        </div>
    );
};

export default WeeklyNews;