import React, {useEffect, useState, useRef, useCallback} from 'react';
import axios from 'axios';
import EmergencyEvent from "./EmergencyNotice";
import PopupModal from "./PopupModal";

const Header = (prop) => {
    const [getTemp, setTemp] = useState(0);
    const [getTime, setTime] = useState("00:00 AM");
    const [logo, setLogo] = useState("");
    //Element references
    const navbarToggler = useRef(null);
    const navbarMenu = useRef(null);
    const navbar = useRef(null);
    // const stickyWrapper = useRef(null);
    const navbarClose = useRef(null);
    const navbarItem = useRef(null);
    const navbarTime = useRef(null);
    const navbarTemp = useRef(null);
    const temperature = useRef(null);
    const time = useRef(null);
    const massSchedule = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const facebook = useRef(null);
    const twitter = useRef(null);
    const youtube = useRef(null);
    const mainMenu = useRef(null);

    const [show, setShow] = useState(false);
    const [content, setContent] = useState({});

    //Init the current temperature
    useEffect(() => {
        if(sessionStorage.getItem('temp'))
            setTemp(sessionStorage.getItem('temp'));
        else {    
            navigator.geolocation.watchPosition((pos) => {
                axios({
                    url:"https://api.openweathermap.org/data/2.5/weather",
                    method: 'get',
                    params: {
                        lat: pos.coords.latitude,
                        lon: pos.coords.longitude,
                        appid: 'a1f8ea13ceb084b2fc8527fa54ffa3c3',
                        units:'imperial'
                    },
                }).then(result => {
                    const temp = Math.round(result.data.main.temp);
                    sessionStorage.setItem('temp', temp);
                    setTemp(temp);
                });
            })
        }
    }, []);

    //Get current time
    const setTimeCallback = useCallback(() => {
        if(window.innerWidth < 1450) {
            setTime(new Date().toLocaleTimeString('en-US', {hc:'h12', hour:'numeric', minute:'numeric'}));
            time.current.classList.remove('fa-lg');
            temperature.current.classList.remove('fa-lg');
        }
        else {
            setTime(new Date().toLocaleDateString('en-US', {hc:'h12', hour:'numeric', minute:'numeric', weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'}));
            time.current.classList.add('fa-lg');
            temperature.current.classList.add('fa-lg');
        }
    }, []);

    //Modify styling when the window size is changing
    const resizeCallback = useCallback(() => {
        setTimeCallback();
        if(window.innerWidth < 1450) {
            massSchedule.current.classList.remove('fa-lg');
            email.current.classList.remove('fa-lg');
            phone.current.classList.remove('fa-lg');
            navbar.current.classList.remove("breakpoint-off");
            navbar.current.classList.add("breakpoint-on");
            facebook.current.classList.remove('fa-lg');
            twitter.current.classList.remove('fa-lg');
            youtube.current.classList.remove('fa-lg');
        } else {
            massSchedule.current.classList.add('fa-lg');
            email.current.classList.add('fa-lg');
            phone.current.classList.add('fa-lg');
            navbar.current.classList.remove("breakpoint-on");
            navbar.current.classList.add("breakpoint-off");
            facebook.current.classList.add('fa-lg');
            twitter.current.classList.add('fa-lg');
            youtube.current.classList.add('fa-lg');
        }
        setLogo(window.innerWidth < 400 ? "../img/core-img/Logo1.png" : "../img/core-img/gxlogo.png");
    }, [setTimeCallback, setLogo]);
    //Modify styling when the window is scrolled
    const scrollCallback = useCallback(() => {
        const sticky = mainMenu.current.offsetTop;
        if (window.pageYOffset > sticky) {
        //   stickyWrapper.current.classList.add("is-sticky");
          mainMenu.current.classList.add("is-sticky");
        } else {
        //   stickyWrapper.current.classList.remove("is-sticky");
          mainMenu.current.classList.remove("is-sticky");
          setTimeCallback();
      }
    }, [setTimeCallback]);

    const activateSidebar = () => {
        if(window.innerWidth < 1450) {
            navbarToggler.current.classList.add("active");
            navbarMenu.current.classList.add("menu-on");
        } else {
            navbarToggler.current.classList.remove("active");
            navbarMenu.current.classList.remove("menu-on");
        }
    };

    const closeSidebar = () => {
        if(window.innerWidth < 1450)
            navbarToggler.current.classList.remove("active");
            navbarMenu.current.classList.remove("menu-on");
    };

    const toggleSubMenu = (index, e) => {
        e.stopPropagation();
        if(window.innerWidth < 1450) {
            for(let i = 0; i < navbarItem.current.children.length; i++) {
                if(i === index && !navbarItem.current.children[i].classList.contains("active")) {
                    navbarItem.current.children[i].classList.add("active");
                    navbarItem.current.children[i].children[1].setAttribute("style", "display:block; font-size:10px");
                }
                else {
                    navbarItem.current.children[i].classList.remove("active");    
                    if(navbarItem.current.children[i].children[1] !== undefined)
                        navbarItem.current.children[i].children[1].removeAttribute("style");
                }
            }
        }
    };

    //Add event handler after the element is rendered
    useEffect(() => {
        //Call all the callbacks to setup initial value after the element is mounted
        setTimeCallback();
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        window.addEventListener("scroll", scrollCallback);
        //Unhook the event handlers when the element is unmounted
        return () => {
            window.removeEventListener("scroll", scrollCallback);
            window.removeEventListener("resize", resizeCallback);
        };
      }, [setTimeCallback, resizeCallback, scrollCallback]);

    const displayModal = (e, title, content) => {
        if(!sessionStorage.hasOwnProperty('showDonationInst') || sessionStorage.getItem('showDonationInst') ==='true') {
            e.preventDefault();
            setShow(true);
            setContent({
                title: title,
                url: content,
                fileExt: content.slice(-3),
                confirm: e.target.getAttribute("href")
            });
        }
        sessionStorage.setItem('showDonationInst', 'false');
    };

    const hideModal = () => {
        setShow(false);
        setContent({});
    };

    //JSX represent the header element
    return (
        <header className="header-area">
            <div className="top-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-12 col-sm-12">
                            <div className="top-header-content d-flex flex-wrap align-items-center justify-content-between">
                                <div className="top-header-meta d-flex flex-wrap">
                                    <div><i className="fas fa-clock time" aria-hidden="true" ref={time}/><span ref={navbarTime}>{getTime}</span><i className="fas fa-thermometer-half temperature" ref={temperature} aria-hidden="true"></i><span ref={navbarTemp}>{getTemp} &#176;F</span></div>
                                    <div className="top-social-info">
                                        <a href="https://www.facebook.com/cttdvn" aria-label="facebook"><i className="fab fa-facebook" ref={facebook}></i></a>
                                        <a href="https://www.youtube.com/thanhtudaovietnam" aria-label="youtube"><i className="fab fa-youtube" ref={youtube}></i></a>
                                        <a href="https://twitter.com/thanhtudaovn" aria-label="twitter"><i className="fab fa-twitter" ref={twitter}></i></a>
                                    </div>
                                </div>
                                <div className="top-header-meta">
                                    <a href="/massSchedule" className="email-address"><i className="fas fa-calendar-alt" aria-hidden="true" ref={massSchedule}></i><span>Giờ Lễ / MassTimes</span></a>
                                    <a href="mailto:info@cttdvnatl.org" className="email-address"><i className="fas fa-envelope" aria-hidden="true" ref={email}></i> <span>info@cttdvnatl.org</span></a>
                                    <a href="tel:770-921-0077" className="phone"><i className="fas fa-phone" aria-hidden="true" ref= {phone}></i> <span>770-921-0077</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{"minHeight":"90px"}}>
                <div className="crose-main-menu" ref={mainMenu}>
                    <div className="classy-nav-container breakpoint-off" ref={navbar}>
                        <div className="container">
                            <nav className="classy-navbar justify-content-between" id="croseNav">
                                <a href="/" className="nav-brand"><img src={logo} alt=""/></a>
                                <div className="classy-navbar-toggler" onClick={activateSidebar}>
                                    <a href="https://giving.parishsoft.com/App/Giving/holy4545250" className="crose-btn" onClick={(e) => displayModal(e, "Huong dan Donation", "img/core-img/donation_instruction.jpg")}><i className="fas fa-donate"/>  DONATION</a>
                                    <span className="navbarToggler" ref={navbarToggler}><span/><span/><span/></span>
                                </div>
                                <div className="classy-menu" ref={navbarMenu} onClick={closeSidebar}>
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap" ref={navbarClose}><span className="top"/><span className="bottom"/></div>
                                    </div>
                                    <div className="classynav">
                                        <ul ref={navbarItem}>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(0, e)}><a href="/#">GIÁO XỨ</a>
                                                <ul className="dropdown">
                                                    <li><a href="/">Trang Chủ</a></li>
                                                    <li><a href="/about">Sứ Mệnh Giáo Xứ</a></li>
                                                    <li><a href="/history">Lịch Sử Giáo Xứ</a></li>
                                                    <li><a href="/clergy-list">Linh Mục/Tu Sĩ</a></li>
                                                    <li><a href="/directors">Qúy Chức</a></li>
                                                </ul>
                                                <span className="dd-trigger"/>
                                            </li>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(1, e)}><a href="/#">TIN TỨC/SỰ KIỆN</a>
                                                <ul className="dropdown">
                                                    <li><a href="/activities">Sinh Hoạt Giáo Xứ</a></li>
                                                    <li><a href="/printed-calender">Lịch 2020</a></li>
                                                    <li><a href="/fall-fest">Hội Chợ Mùa Thu</a></li>
                                                    <li><a href="/thieu-nhi">TNTT Tôma Thiện</a></li>
                                                </ul>
                                                <span className="dd-trigger"/>
                                            </li>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(2, e)}>
                                                <a href="/#">BAN NGÀNH</a>
                                                <ul className="dropdown">
                                                <li><a href="/Org">Sơ Đồ Tổ Chức</a></li>
                                                    <li><a href="/departments/KCS">Khối Cơ Sở</a></li>
                                                    <li><a href="/departments/KDS">Khối Đời Sống</a></li>
                                                    <li><a href="http://giaoly.hvmatl.org">Khối Giáo Dục</a></li>
                                                    <li><a href="/departments/KHC">Khối Hành Chánh</a></li>
                                                    <li><a href="/departments/KPT">Khối Phụng Tự</a></li>
                                                    <li><a href="/departments/KTG">Khối Truyền Giáo</a></li>
                                                    <li><a href="/departments/KQT">Khối Quản Trị</a></li>
                                                    <li><a href="/departments/KGQ">Khối Gây Quỹ</a></li>
                                                </ul>
                                                <span className="dd-trigger"></span>
                                            </li>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(3, e)}>
                                                <a href="/#">Thư Viện</a>
                                                <ul className="dropdown">
                                                    <li><a href="/weeklyNews">Thông Tin Mục Vụ</a></li>
                                                    <li><a href="/articles.html">Các Bài Viết</a></li>
                                                    <li><a href="/catholic_teaching">Giáo Lý</a></li>
                                                    <li><a href="/photos">Thư Viện Hình Ảnh</a></li>
                                                    <li><a href="/forms">Đơn Từ</a></li>
                                                    <li><a href="/prayerRequest.html">Prayer Request</a></li>
                                                </ul>
                                                <span className="dd-trigger"/>
                                            </li>
                                            <li><a href="/contact">LIÊN HỆ</a></li>
                                        </ul>
                                        <a href="https://giving.parishsoft.com/App/Giving/holy4545250" className="crose-btn header-btn" onClick={(e) => displayModal(e, "Huong dan Donation", "img/core-img/donation_instruction.jpg")}><i className="fas fa-donate"/>  DONATION</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <EmergencyEvent emergency={'emergency' in prop ? prop.emergency : false} message={prop.emergencyMsg} url={prop.url}/>
                    </div>
                </div>
            </div>
            {show ? <PopupModal show={show} content={content} onHide={hideModal}/> : null}
        </header>
    );
};

export default Header;