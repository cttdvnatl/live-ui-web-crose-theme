import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './css/carousel.css';
import Data from '../database/Carousel.json';

const CustomCarousel = (prop) => {
    return (
        <Carousel>
            {Data.map((item, index) => {
                return(
                    <Carousel.Item key={index}>
                        {item.image !== undefined ? 
                            <img src={item.image} alt={item.image.slice(item.image.lastIndexOf('/') + 1)}/> : null}
                        <Carousel.Caption>
                            <div>
                                {item.title.map((title, indx) => <h1 className="animated fadeInUpShort" key={indx}>{title}</h1>)}
                                <div className="animated fadeInUpShort">
                                    {
                                        item.content !== undefined ? 
                                        item.content.map((content, i) => {
                                            content = content.split(/\s*\|\s*/);
                                            return(
                                                <p key={i}><b>{content[0]}</b> {content[1] != null ? content[1] : ''}</p>
                                            )
                                        }) : null
                                    }
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
}
export default CustomCarousel;