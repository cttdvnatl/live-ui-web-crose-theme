import React, {useEffect, useState, useRef, useCallback} from 'react';
import { setLanguage, getLanguage, useTranslation } from 'react-multi-lang';
//import EmergencyEvent from "./EmergencyNotice";
//import HcmtEvent from "./HcmtNotice";
import BannerMsg from '../components/BannerMsg';
import PopupModal from "./PopupModal";

const Header = (prop) => {
    const [logo, setLogo] = useState("");
    //Element references
    const navbarToggler = useRef(null);
    const navbarMenu = useRef(null);
    const navbar = useRef(null);
    // const stickyWrapper = useRef(null);
    const navbarClose = useRef(null);
    const navbarItem = useRef(null);
    const massSchedule = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const facebook = useRef(null);
    const twitter = useRef(null);
    const youtube = useRef(null);
    const mainMenu = useRef(null);

    const [show, setShow] = useState(false);
    const [content, setContent] = useState({});

    //Modify styling when the window size is changing
    const resizeCallback = useCallback(() => {
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
    }, [setLogo]);
    //Modify styling when the window is scrolled
    const scrollCallback = useCallback(() => {
        const sticky = mainMenu.current.offsetTop;
        if (window.pageYOffset > sticky) {
        //   stickyWrapper.current.classList.add("is-sticky");
          mainMenu.current.classList.add("is-sticky");
        } else {
        //   stickyWrapper.current.classList.remove("is-sticky");
          mainMenu.current.classList.remove("is-sticky");
      }
    }, []);

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
        resizeCallback();
        window.addEventListener("resize", resizeCallback);
        window.addEventListener("scroll", scrollCallback);
        //Unhook the event handlers when the element is unmounted
        return () => {
            window.removeEventListener("scroll", scrollCallback);
            window.removeEventListener("resize", resizeCallback);
        };
      }, [resizeCallback, scrollCallback]);

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
//Set Language and Cookie
    function setLangCookie() {
        document.cookie = "language = " + getLanguage();
    }
    function setLanguageVN() {
        setLanguage('vn');
        setLangCookie('vn');
        window.location = window.location.href
    }
    function setLanguageEN() {
        setLanguage('en');
        setLangCookie('en');
        window.location = window.location.href
    }

    const t = useTranslation();
    //JSX represent the header element
    return (
        <header className="header-area">
            <div className="top-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-12 col-sm-12">
                            <div className="top-header-content d-flex flex-wrap align-items-center justify-content-between">
                                <div className="top-header-meta d-flex flex-wrap">
                                    <div>
                                        <div id="translation-button">
                                            <button id="vn" onClick={() => setLanguageVN()}>VN</button>
                                            <button id="en" onClick={() => setLanguageEN()}>EN</button>                
                                        </div>
                                    </div>
                                    <div className="top-social-info">
                                        <a href="https://www.facebook.com/hvmatl" aria-label="facebook"><i className="fab fa-facebook" ref={facebook}></i></a>
                                        <a href="https://www.youtube.com/HVMATL" aria-label="youtube"><i className="fab fa-youtube" ref={youtube}></i></a>
                                        <a href="https://twitter.com/thanhtudaovn" aria-label="twitter"><i className="fab fa-twitter" ref={twitter}></i></a>
                                    </div>
                                </div>
                                <div className="top-header-meta">
                                    <a href="/massSchedule" className="email-address"><i className="fas fa-calendar-alt" aria-hidden="true" ref={massSchedule}></i><span>{t("header.top.massSchedule")}</span></a>
                                    <a href="mailto:info@hvmatl.org" className="email-address"><i className="fas fa-envelope" aria-hidden="true" ref={email}></i> <span>info@hvmatl.org</span></a>
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
                                    <a href="https://giving.parishsoft.com/App/Giving/holy4545250" className="crose-btn" onClick={(e) => displayModal(e, "Huong dan Donation", "img/core-img/donation_instruction.jpg")}><i className="fas fa-donate"/> OFFERING</a>
                                    <span className="navbarToggler" ref={navbarToggler}><span/><span/><span/></span>
                                </div>
                                <div className="classy-menu" ref={navbarMenu} onClick={closeSidebar}>
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap" ref={navbarClose}><span className="top"/><span className="bottom"/></div>
                                    </div>
                                    <div className="classynav">
                                        <ul ref={navbarItem}>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(0, e)}><a href="/#">{t("header.dropdownMenuOne.dropdownHeading")}</a>
                                                <ul className="dropdown">
                                                    <li><a href="/contact">{t("header.dropdownMenuOne.item1")}</a></li>
                                                    <li><a href="/about">{t("header.dropdownMenuOne.item2")}</a></li>
                                                    <li><a href="/history">{t("header.dropdownMenuOne.item3")}</a></li>
                                                    <li><a href="/saint">{t("header.dropdownMenuOne.item4")}</a></li>
                                                    <li><a href="/clergy-list">{t("header.dropdownMenuOne.item5")}</a></li>
                                                    <li><a href="/staff">{t("header.dropdownMenuOne.item6")}</a></li>
                                                </ul>
                                                <span className="dd-trigger"/>
                                            </li>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(1, e)}><a href="/#">{t("header.dropdownMenuTwo.dropdownHeading")}</a>
                                                <ul className="dropdown">
                                                    <li><a href="/activities">{t("header.dropdownMenuTwo.item1")}</a></li>
                                                    <li><a href="/room-reservation">{t("header.dropdownMenuTwo.item2")}</a></li>
                                                    <li><a href="/printed-calendar">{t("header.dropdownMenuTwo.item4")}</a></li>
                                                    <li><a href="/thieu-nhi">{t("header.dropdownMenuTwo.item5")}</a></li>
                                                    <li><a href="https://fallfestival.hvmatl.org/">{t("header.dropdownMenuTwo.item6")}</a></li>
                                                    <li><a href="/ChristmasFestival">{t("header.dropdownMenuTwo.item7")}</a></li>
                                                </ul>
                                                <span className="dd-trigger"/>
                                            </li>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(2, e)}>
                                                <a href="/#">{t("header.dropdownMenuThree.dropdownHeading")}</a>
                                                <ul className="dropdown">
                                                <li><a href="/Org">{t("header.dropdownMenuThree.item1")}</a></li>
                                                    <li><a href="/departments/KCS">{t("header.dropdownMenuThree.item2")}</a></li>
                                                    <li><a href="/departments/KDS">{t("header.dropdownMenuThree.item3")}</a></li>
                                                    <li className="KGD"><a href="/departments/KGD">{t("header.dropdownMenuThree.item4")}</a>
                                                        <ul>
                                                            <li>
                                                                <a href='/st-joseph'>{t("header.dropdownMenuThree.subItem1")}</a>
                                                            </li>
                                                            <li>
                                                                <a href="/VietHong">{t("header.dropdownMenuThree.subItem2")}</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/departments/KHC">{t("header.dropdownMenuThree.item5")}</a></li>
                                                    <li><a href="/departments/KPT">{t("header.dropdownMenuThree.item6")}</a></li>
                                                    <li><a href="/departments/KTG">{t("header.dropdownMenuThree.item7")}</a></li>
                                                    <li><a href="/departments/KQT">{t("header.dropdownMenuThree.item8")}</a></li>
                                                    <li><a href="/departments/KGQ">{t("header.dropdownMenuThree.item9")}</a></li>
                                                </ul>
                                                <span className="dd-trigger"></span>
                                            </li>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(3, e)}>
                                                <a href="/#">{t("header.dropdownMenuFour.dropdownHeading")}</a>
                                                <ul className="dropdown">
                                                    <li><a href="/weeklyNews">{t("header.dropdownMenuFour.item1")}</a></li>
                                                    <li><a href="/Articles">{t("header.dropdownMenuFour.item2")}</a></li>
                                                    <li><a href="/catholic_teaching">{t("header.dropdownMenuFour.item3")}</a></li>
                                                    <li><a href="/photos">{t("header.dropdownMenuFour.item4")}</a></li>
                                                    <li><a href="/forms">{t("header.dropdownMenuFour.item5")}</a></li>
                                                    <li><a href="/PrayerRequest">{t("header.dropdownMenuFour.item6")}</a></li>
                                                </ul>
                                                <span className="dd-trigger"/>
                                            </li>
                                            <li className="cn-dropdown-item has-down" onClick={(e) => toggleSubMenu(4, e)}>
                                                <a href="https://archatl.com/offices/child-and-youth-protection/reporting-abuse/reporting-child-abuse/">{t("header.dropdownMenuFive.dropdownHeading")}</a>
                                            </li>
                                        </ul>
                                        <a href="https://giving.parishsoft.com/App/Giving/holy4545250" className="crose-btn header-btn" onClick={(e) => displayModal(e, "Huong dan Donation", "img/core-img/donation_instruction.jpg")}><i className="fas fa-donate"/>  {t("header.donation")}</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        {/* <EmergencyEvent emergency={'emergency' in prop ? prop.emergency : false} message={prop.emergencyMsg} url={prop.url}/> */}
                        {/* <HcmtEvent hcmt={'hcmt' in prop ? prop.hcmt : true} message={prop.hcmtMsg} url={prop.url}/> */}
                        <BannerMsg banner={'banner' in prop ? prop.banner : false} message={prop.bannerMsg} url={prop.url}/>
                    </div>
                </div>
            </div>
            {show ? <PopupModal show={show} content={content} onHide={hideModal}/> : null}
        </header>
    );
};

export default Header;
