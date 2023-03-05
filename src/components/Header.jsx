import React, {useEffect, useState, useRef, useCallback} from 'react';
import { setLanguage, getLanguage, useTranslation } from 'react-multi-lang';
import { Link } from 'react-router-dom';
//import EmergencyEvent from "./EmergencyNotice";
//import HcmtEvent from "./HcmtNotice";
import BannerMsg from "./BannerMsg";
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
    }
    function setLanguageEN() {
        setLanguage('en');
        setLangCookie('en');
    }

    const t = useTranslation();

    const navItems = [    
        {
            main: 'header.dropdownMenuOne.dropdownHeading',
            subs: [
                { path: '/', text: "header.dropdownMenuOne.item1" },
                { path: '/about', text: "header.dropdownMenuOne.item2" },
                { path: '/history', text: "header.dropdownMenuOne.item3" },
                { path: '/saint', text: "header.dropdownMenuOne.item4" },
                { path: '/clergy-list', text: "header.dropdownMenuOne.item5" },
                { path: '/staff', text: "header.dropdownMenuOne.item6" }
            ]
        },
        {
            main: 'header.dropdownMenuTwo.dropdownHeading',
            subs: [
                { path: '/activities', text: "header.dropdownMenuTwo.item1" },
                { path: '/printed-calendar', text: "header.dropdownMenuTwo.item2" },
                { path: '/covid19', text: "header.dropdownMenuTwo.item3" },
                { path: '/thieu-nhi', text: "header.dropdownMenuTwo.item4" },
                { path: 'https://fallfestival.hvmatl.org', text: "header.dropdownMenuTwo.item5" },
                { path: '/christmas-festival', text: "header.dropdownMenuTwo.item6" }
            ]
        },
        {
            main: 'header.dropdownMenuThree.dropdownHeading',
            subs: [
                { path: '/org', text: "header.dropdownMenuThree.item1"},
                { path: '/departments/KCS', text: "header.dropdownMenuThree.item2" },
                { path: '/departments/KDS', text: "header.dropdownMenuThree.item3" },
                { path: '/departments/KGD', text: "header.dropdownMenuThree.item4", subs: [
                    { path: '/st-joseph', text: "header.dropdownMenuThree.subItem1" },
                    { path: '/viet-hong', text: "header.dropdownMenuThree.subItem2" }
                ]},
                { path: '/departments/KHC', text: "header.dropdownMenuThree.item5" },
                { path: '/departments/KPT', text: "header.dropdownMenuThree.item6" },
                { path: '/departments/KTG', text: "header.dropdownMenuThree.item7" },
                { path: '/departments/KQT', text: "header.dropdownMenuThree.item8" },
                { path: '/departments/KGQ', text: "header.dropdownMenuThree.item9" },
            ]
        },
        {
            main: "header.dropdownMenuFour.dropdownHeading",
            subs: [
                { path: '/weekly-news', text: "header.dropdownMenuFour.item1" },
                { path: '/articles', text: "header.dropdownMenuFour.item2" }, 
                { path: '/catholic-teaching', text: "header.dropdownMenuFour.item3" },
                { path: '/photos', text: "header.dropdownMenuFour.item4" },
                { path: '/forms', text: "header.dropdownMenuFour.item5" },
                { path: '/prayer-request', text: "header.dropdownMenuFour.item6" }
            ]
        },
        {
            main: "header.dropdownMenuFive.dropdownHeading",
            link: '/contact'
        }
    ]

    const navItemList = (list) => {
        return list.map(item => {
            if (item.subs) {
                return  <li key={item.path}><Link 
                            target={item.path.startsWith("http") ? "_blank" : "_self"} 
                            to={item.path}>{t(item.text)}</Link>
                            <ul>{navItemList(item.subs)}</ul>
                        </li>
            }
            else {  
                return  <li key={item.path}><Link 
                            target={item.path.startsWith("http") ? "_blank" : "_self"} 
                            to={item.path}>{t(item.text)}</Link>
                        </li>
            }
        })
    }

    const navItem = (itemList) => {
        return itemList.map((item, index) => {
            if (item.link) {
                return  <li key={item.main}>
                            <Link 
                                target={item.link.startsWith("http") ? "_blank" : "_self"}  
                                to={item.link}>{t(item.main)}
                            </Link>
                        </li>
            }
            else {
                return <li key={item.main} 
                    className="cn-dropdown-item has-down"
                    onClick={(e) => toggleSubMenu(index, e)}>
                        <a>{t(item.main)}</a>
                        <ul className="dropdown">
                            {navItemList(item.subs)}
                        </ul>
                </li>
            }
        })
    }



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
                                    <a href="/mass-schedule" className="email-address"><i className="fas fa-calendar-alt" aria-hidden="true" ref={massSchedule}></i><span>{t("header.top.massSchedule")}</span></a>
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
                                            {navItem(navItems)}
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
