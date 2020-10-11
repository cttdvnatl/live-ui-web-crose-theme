import React, {useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import {connect} from 'react-redux';
import * as actionType from '../store/actionType';
import {getWeeklyNews} from '../store/dispatch/dispatch';
import PopupModal from "../components/PopupModal";
const WeeklyNews = (props) => {
    const toggleModal = (e, title, content) => {
        e.preventDefault();
        props.toggleModal({
            title: title,
            url: content
        });
    };

    useEffect(() => {
        if(sessionStorage.getItem('token') && !props.data.length) {
            let mtplr;
            const from =  new Date(new Date().setUTCHours(0,0,0,0));
            from.setMonth(from.getUTCMonth()-1, 0);
            if([2, 3].includes(new Date().getUTCMonth() + 1)) {
                mtplr = from.getUTCFullYear() % 4 === 0 ? 31+29 : 31+28;
            } else {
                mtplr = from.getUTCMonth() + 1 === 8 ? 62 : 61;
            }
            const to = new Date(from.getTime() + mtplr * 86400000);
            (async () => (await props.getWeeklyNews(from, to, sessionStorage.getItem('token'))))();
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
                                {props.data.map(
                                    (weeklyNews,idx) => new Date(weeklyNews.date).getMonth() + 1 === month ?
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                                            <div className="about-us-content mb-100">
                                                <a href="/" onClick={(e) => toggleModal(e, weeklyNews.title, weeklyNews.src)}><img src={weeklyNews.image} alt=""/></a>
                                                <div className="about-text text-center">
                                                    <a href="/" onClick={(e) => toggleModal(e, weeklyNews.title, weeklyNews.src)}><h4>{weeklyNews.title}</h4></a>
                                                </div>
                                            </div>
                                        </div> : null)
                                }
                            </div>
                        </div>
                    );
                })}
                {props.showPopup.show ? <PopupModal show={props.showPopup.show} content={props.showPopup.content} onHide={() => props.toggleModal({})}/> : null}
            </section>
            <Footer/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.weeklyNews.data,
    showPopup: state.weeklyNews.showPopup
});

const mapDispatchToProps = (dispatch) => ({
    getWeeklyNews: (fromDate, toDate, token = null) => getWeeklyNews(dispatch, fromDate, toDate, token),
    toggleModal: (content) => dispatch({type: actionType.TOGGLE_WEEKLY_NEWS_POPUP, content:content})
})
export default connect(mapStateToProps, mapDispatchToProps)(WeeklyNews);