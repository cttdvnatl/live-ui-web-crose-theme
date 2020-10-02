import React, {useEffect} from "react";
import {connect} from 'react-redux';
import * as actionType from '../store/actionType';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import '../css/carousel.css';

const CustomCarousel = (props) => {
    useEffect(() => {
        if(props.data === undefined || props.data.length === 0) {
            (async () => {
                await props.getSlides();
            })();
        }
    }, [props]);

    return (
        <Carousel interval="10000">
            {props.data.map((item, index) => {
                return(
                    <Carousel.Item key={index}>
                        {item.image !== undefined ? 
                            <img src={item.image} alt={item.image.slice(item.image.lastIndexOf('/') + 1)}/> : null}
                        <Carousel.Caption>
                            <div>
                                {item.title.map((title, idx) => <h1 className="animated fadeInUpShort" key={idx}>{title}</h1>)}
                                <div className="animated fadeInUpShort">
                                    {item.content !== undefined ? item.content.map((content, i) => <p key={i} dangerouslySetInnerHTML={{__html: content}}/>) : null}
                                </div>
                                {item.button !== undefined ? 
                                    <a href={item.button.action} className="crose-btn animated fadeInUpShort">{item.button.title}</a> : null}
                            </div>
                        </Carousel.Caption>
                </Carousel.Item>
                );
            })}
        </Carousel>
    )
};

const mapStateToProps = (state) => ({
    data: state.carousel.data
});

const mapDispatchToProps = (dispatch) => ({
    getSlides: () => axios.get('https://hvmatl-backend.herokuapp.com/carousel', {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            params:{
                date:'04-05-2020'
            }
        }).then(res => dispatch({type:actionType.GET_SLIDES, data: res.data}))
})
export default connect(mapStateToProps, mapDispatchToProps)(CustomCarousel);