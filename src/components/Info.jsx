import React, {useEffect} from 'react';
import { useTranslation } from 'react-multi-lang';
import {connect} from 'react-redux';
import axios from "axios";
import * as actionType from "../store/actionType";

const Info = (props) => {
    const t = useTranslation()

    useEffect(() => {
        if(props.image === undefined || props.image === null) {
            (async () => await props.getImage())();
        }
    }, [props]);

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
                            <a href="/weeklyNews"><img id="weeklyNews" src={props.image} alt=""/></a>
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

const mapStateToProps = (state) => {
    return ({
        image: state.weeklyNews.data.length === 0 ? null : state.weeklyNews.data[0].image
    });
};

const mapDispatchToProps = (dispatch) => ({
    getImage: () => axios.get('https://hvmatl-backend.herokuapp.com/weeklyNews', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            params:{
                from: new Date(Date.now() - 7 * 24 * 60 * 60 * 60 * 1000).toISOString(),
                to: new Date().toISOString()
            }
        }).then(res => dispatch({type: actionType.GET_WEEKLY_NEWS, data: res.data}))
})
export default connect(mapStateToProps, mapDispatchToProps)(Info);