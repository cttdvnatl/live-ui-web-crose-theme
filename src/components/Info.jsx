import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-multi-lang';
import {connect} from 'react-redux';
import {getWeeklyNews} from '../store/dispatch/dispatch';
import AllSoulsReqPopupModal from "./AllSoulsReqPopupModal";
import ConfirmModal from "./ConfirmModal";

const Info = (props) => {
    const t = useTranslation()

    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState({
        show: false,
        content: {
            header: "",
            message: ""
        }
    });
    const showPopup = (e) => {
        e.preventDefault();
        setShow(true);
    }

    const onSubmit = (content) => {
        setShow(false);
        setShowConfirm({
            show:true,
            content: {...content}
        });
    }
    const onHide = () => {
        setShow(false);
        setShowConfirm({
            show:false,
            content: {
                header: "",
                message: ""
            }
        });
    }

    useEffect(() => {
        if((sessionStorage.getItem('token') || props.token) && !props.image) {
            (async () =>
                await props.getImage(
                    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                    new Date().toISOString(),
                    props.token || sessionStorage.getItem('token')))();
        }
    }, [props]);

    return(
        <section className="about-area section-padding-100-0">
            <div className="container">
                <div className="row about-content justify-content-center">
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="about-us-content mb-100">
                            <a href="/learnBible"><img src="http://hvmatl.net/gallery/img/bg-img/catholic2.jpg" alt=""/></a>
                            <div className="about-text">
                                <a href="/learnBible"><h4>{t("info.item1.heading")}</h4></a>
                                <p>{t("info.item1.description")}</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-12 col-md-6 col-lg-3" style={{'display': 'none'}}>
                        <div className="about-us-content mb-100">
                            <img src="http://hvmatl.net/gallery/img/index/about3.png" alt=""/>
                            <div className="about-text">
                                <h4 className="text-center">Cầu Cho Linh Hồn</h4>
                                <div className="find-out-more-btn">
                                    <p className="text-center"><a style={{fontSize:"36px", color:"#ffffff"}} href="/#" onClick={(e) => showPopup(e)} className="crose-btn"><i className="fas fa-praying-hands"/></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="about-us-content mb-100">
                            <a href="/weeklyNews"><img id="weeklyNews" src={props.image} alt=""/></a>
                            <div className="about-text">
                                <a href="/weeklyNews"><h4>{t("info.item2.heading")}</h4></a>
                                <p>{t("info.item2.description")}</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Single About Us Content --> */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="about-us-content mb-100">
                            <img src="http://hvmatl.net/gallery/img/index/about3.png" alt=""/>
                            <div className="about-text">
                                <h4>{t("info.item3.heading")}</h4>
                                <div className="find-out-more-btn">
                                    <p className="text-center" style={{display : 'flex'}}>
                                        <a href="https://www.facebook.com/pg/cttdvn/videos/?ref=page_internal" style={{fontSize:"30px", color:"#ffffff", backgroundColor: '#6666ff'}} className="crose-btn"><i className="fab fa-facebook-f"/></a>
                                        <a style={{fontSize:"30px", color:"#ffffff"}} href="https://www.youtube.com/c/HVMATL"  className="crose-btn"><i className="fab fa-youtube"/></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {show ? <AllSoulsReqPopupModal show={show} onSubmit={onSubmit} onHide={onHide}/> : null}
            {showConfirm.show ? <ConfirmModal show={showConfirm.show} content={showConfirm.content} onHide={onHide}/> : null}
        </section>
    );
};

const mapStateToProps = (state) => ({
    token: state.auth.token,
    image: state.weeklyNews.data.length === 0 ? null : state.weeklyNews.data[0].image
});

const mapDispatchToProps = (dispatch) => ({
    getImage: (from, to, token) => getWeeklyNews(dispatch, from, to, token)
})
export default connect(mapStateToProps, mapDispatchToProps)(Info);