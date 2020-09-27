import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import {connect} from 'react-redux';
import * as actionType from '../store/actionType';

import axios from "axios";
import PopupModal from "../components/PopupModal";
const WeeklyNews = () => {
    const [data, setData] = useState([]);
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
        if((props.token!== undefined && props.token !== '') &&
        (props.data === undefined || props.data.length === 0)) {
            let mtplr;
            const from =  new Date(new Date().setUTCHours(0,0,0,0));
            from.setMonth(from.getUTCMonth()-1, 0);
            if([2, 3].includes(new Date().getUTCMonth() + 1)) {
                mtplr = from.getUTCFullYear() % 4 === 0 ? 31+29 : 31+28;
            } else {
                mtplr = from.getUTCMonth() + 1 === 8 ? 62 : 61;
            }
            const to = new Date(from.getTime() + mtplr * 86400000);
            (async () => (await props.getWeeklyNews(props.token, from, to)))();
        }
    }, [props]);

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
                                {data.map(
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

const mapStateToProps = (state) => ({
    token: state.auth.token,
    data: state.weeklyNews.data,
    showPopup: state.weeklyNews.showPopup
});

const mapDispatchToProps = (dispatch) => ({
    getWeeklyNews: (token, fromDate, toDate) =>
        axios.get('https://hvmatl-backend.herokuapp.com/weeklyNews', {
            headers: {
                'Authorization': `Bearer ${token}`
            },
            params:{
                from: fromDate,
                to: toDate
            }
        }).then(res => dispatch({type: actionType.GET_WEEKLY_NEWS, data: res.data})),
    toggleModal: () => dispatch({type: actionType.TOGGLE_WEEKLY_NEWS_POPUP})
})
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyNews);