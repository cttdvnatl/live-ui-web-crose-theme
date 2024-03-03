import React, {useEffect, useState} from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import '../css/carousel.css';
import Content from '../database/carousel.json';

const CustomCarousel = (props) => {
    
    const [data, setData] = useState(Content) 
    
    // useEffect(() => {
    //     axios.get("https://backend.hvmatl.org/hvmatl-backend-spring/carousel",
    //         {
    //             auth: {
    //                 username: "user",
    //                 password: "9ewqt-y823-4twh8-42hu89"
    //             }
    //         }
    //     )
    //     .then((res) => {
    //         console.log(res)
    //         setData(res.data.event);
    //     })
    // }, [])
    
    if (data) {
        return (
            <Carousel interval="10000">
                {data.map((item, index) => {
                    return(
                        <Carousel.Item key={index}>
                            {item.image !== undefined ? 
                                <img src={item.image} alt={item.image.slice(item.image.lastIndexOf('/') + 1)}/> : null}
                            <Carousel.Caption>
                                <div>
                                    {/* {item.title.map((title, idx) => <h1 className="animated fadeInUpShort" key={idx}>{title}</h1>)} */}
                                    {item.title.map((title, idx) => <h1 className=" " key={idx}>{title}</h1>)}
                                    <div className=" ">
                                        {item.content !== undefined ? item.content.map((content, i) => <p key={i} dangerouslySetInnerHTML={{__html: content}}/>) : null}
                                    </div>
                                    {item.button !== undefined ? 
                                        // <a href={item.button.action} className="crose-btn animated fadeInUpShort">{item.button.title}</a> : null}
                                        <a href={item.button.action} className="crose-btn ">{item.button.title}</a> : null}
                                </div>
                            </Carousel.Caption>
                    </Carousel.Item>
                    );
                })}
            </Carousel>
        )
    }

};

export default CustomCarousel;