import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';
import axios from 'axios';

const Popup = (props) => {
    if (
        props.data.src.charAt(props.data.src.length) === "." || 
        props.data.src.charAt(props.data.src.length-1) === "." || 
        props.data.src.charAt(props.data.src.length-2) === "." || 
        props.data.src.charAt(props.data.src.length-3) === "." || 
        props.data.src.charAt(props.data.src.length-4) === "."
    ) {
        return (
            <>
            <a 
            style={{
                color: 'blue',
                textDecoration: 'underline',
                fontSize: '23px',
                fontWeight: '600',
                position: 'absolute'
            }}
            href={props.data.src}>Link to view</a>
            <iframe className="file" src={`https://docs.google.com/gview?url=${props.data.src}&embedded=true`} title={props.data.title}></iframe>
            </>
        )
    }
    else {
        return (
            <>
            <a href={props.data.src}>Link to view</a>
            <iframe className="file" src={props.data.src} title={props.data.title}></iframe>
            </>
        )
    }
}

const WeeklyNews = (props) => {

    const [data, setData] = useState([]) 
    const [popupData, setPopupData] = useState(
        {
            title: "",
            src: "",
        }
    ) 
    const [displayPopup, setDisplayPopup] = useState({
        opacity: 0,
    })

    const toggleModal = (e, title, content) => {
        e.preventDefault();
        setPopupData(
            {
                title: title,
                src: content,
            }
        )
        setDisplayPopup({
            opacity: 100
        })
    };
    
    const unToggleModal = () => {
        setPopupData(
            {
                title: "",
                src: "",
            }
        )
        setDisplayPopup({
            opacity: 0
        })
    }

    useEffect(() => {
        if(!data.length) {
            let mtplr;
            const from =  new Date(new Date().setUTCHours(0,0,0,0));
            from.setUTCMonth(from.getUTCMonth()-1);
            if([2, 3].includes(new Date().getMonth() + 1)) {
                mtplr = from.getUTCFullYear() % 4 === 0 ? 31+29 : 31+28;
            } else {
                mtplr = from.getUTCMonth() + 1 === 8 ? 62 : 61;
            }
            const to = new Date(from.getTime() + mtplr * 86400000);
            

            (async () => (await 
                axios.post("https://backend.hvmatl.org/hvmatl-backend-spring/weekly-news", 
                {
                    from: from,
                    to: to 
                },
                {
                    auth: {
                        username: "user",
                        password: "9ewqt-y823-4twh8-42hu89"
                    }
                }
                )
                .then((res) => {
                    console.log(from)
                    console.log(to)

                    console.log(res.data)
                    setData(res.data);
                })
            ))();
        }
    }, [data.length, data]);

    if (data) {
        return (
            <div>
                <Preloader/>
                <Header/>
                <div style={displayPopup} className="weekly-news-popup-container">
                    <div className="weekly-news-popup">
                        <Popup data={popupData}/>
                        <h1 onClick={() => unToggleModal()} className='close-btn'>x</h1>
                    </div>
                </div>
                <section className="about-area section-padding-100-0">
                    {[new Date().getMonth() + 1, new Date().getMonth()].map(month => {
                        month = month === 0 ? 12 : month;
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
                                        (weeklyNews,idx) =>  {
                                            let targetMonth = new Date(weeklyNews.date).getMonth();
                                            targetMonth = targetMonth === 0 ? 1 : targetMonth + 1;
                                            if(targetMonth === month) {
                                                return (
                                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                                                    <div className="about-us-content text-center mb-100">
                                                        <a href="/" onClick={(e) => toggleModal(e, weeklyNews.title, weeklyNews.src)}><img src={weeklyNews.image} alt=""/></a>
                                                        <div className="about-text text-center">
                                                            <a href="/" onClick={(e) => toggleModal(e, weeklyNews.title, weeklyNews.src)}><h4>{weeklyNews.title}</h4></a>
                                                        </div>
                                                    </div>
                                                </div>);
                                            }
                                            return null;
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })}
                </section>
                <Footer/>
            </div>
        );
    }
};

export default WeeklyNews;
