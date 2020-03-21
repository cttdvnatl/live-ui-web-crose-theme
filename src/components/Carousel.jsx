import React, {useEffect, useState} from "react";
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import '../css/carousel.css';

const CustomCarousel = (prop) => {
    const [getData, setData] = useState([]);

    useEffect(() => {  
        axios.post('https://hvmatl-backend.herokuapp.com/authentication', {
            username: 'anonymous',
            password: 'anonymous'
        }).then(auth => { 
            axios({
            method: 'GET',    
            url:'https://hvmatl-backend.herokuapp.com/upcoming-event',
            headers: {
                'Authorization': `Bearer ${auth.data.token}`
            },
            params:{
                date:'03-22-2020'
            }
        }).then(res => setData(Array.isArray(res.data) ? res.data: []));
    })}, [prop]);

    return (
        <Carousel>
            {getData.map((item, index) => {
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