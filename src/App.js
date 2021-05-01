import React, { useEffect } from 'react';
import { authenticate, restoreToken } from './store/dispatch/dispatch';
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import StaffPage from './pages/StaffPage';
import DeptInfo from './pages/DeptOwnerPage';
import About from './pages/About';
import OrganizationChart from './pages/OrganizationChart';
import VietHong from './pages/VietHongPage';
import Activities from './pages/ActivitiesPage';
import Covid19 from "./pages/covid19";
import Giaoly from "./pages/giaoly";
import Glgh from "./pages/Glgh";
import photos from "./pages/photos";
import Catholic_teaching from "./pages/catholic_teaching";
import Forms from "./pages/forms";
import WeeklyNews from "./pages/WeeklyNews";
import Contact from "./pages/ContactPage";
import PrayerRequest from "./pages/PrayerRequest";
import PrayerRequestList from "./pages/PrayerRequestList";
import History from './pages/HistoryPage';
import PrintedCalendarPage from './pages/PrintedCalendarPage';
import FallFestPage from './pages/FallFestPage';
import ThieuNhiPage from './pages/ThieuNhiPage';
import VietHongTeacherPage from './pages/VietHongTeacherPage';
import VietHongActivitiesPage from './pages/VietHongActivitiesPage';
import VietHongDocumentsPage from './pages/VietHongDocumentsPage';
import VietHongClassesPage from './pages/VietHongClassesPage';
import VietHongClassworkPage from './pages/VietHongClassworkPage';
import MassSchedule from "./pages/MassSchedule";
import LearnBible from "./pages/LearnBible";
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import ReactGA from 'react-ga';
import { setLanguage, getLanguage, setTranslations, setDefaultLanguage } from 'react-multi-lang';
import en from './database/hvmatlDataEN.json';
import vn from './database/hvmatlDataVN.json';
import CookiePage from './pages/CookiePage';
import StJoseph from './pages/StJosephPage';
import StJosephTeacherPage from './pages/StJosephTeacherPage';
import StJosephActivitiesPage from './pages/StJosephActivitiesPage';
import StJosephDocumentsPage from './pages/StJosephDocumentsPage';
import StJosephClassesPage from './pages/StJosephClassesPage';
import StJosephClassworkPage from './pages/StJosephClassworkPage';
import VNSaints from './pages/VNSaints';
import Upload from './pages/Upload';
import WriteArticle from './pages/WriteArticle';

//Google Analytics
ReactGA.initialize('UA-166941054-1', {
    debug: true,
    titleCase: false,
    gaOptions: {}
});
ReactGA.pageview(window.location.pathname + window.location.search);

//Website Cookie for Language
setTranslations({ vn, en })
setDefaultLanguage('vn')

function checkLangCookie() {
    const language = getCookie("language");
    if (language === 'en') {
        setLanguage('en');
    } else if (language === 'vn') {
        setLanguage('vn');
    } else {
        setLangCookie();
    }
}

function setLangCookie() {
    document.cookie = "language = " + getLanguage();
}

function getCookie(cookieParam) {
    const cookieName = cookieParam + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
}

checkLangCookie()

const App = (props) => {
    useEffect(() => {
        if (!props.token && !sessionStorage.getItem('token')) {
            (async () => {
                const auth = await props.auth({
                    username: 'anonymous',
                    password: 'anonymous'
                });
                sessionStorage.setItem('token', auth.token);
            })();
        } else if (sessionStorage.getItem('token')) {
            props.restoreToken(sessionStorage.getItem('token'));
        } else {
            sessionStorage.setItem('token', props.token);
        }
    }, [props]);
    return (
        <Router>
            <Route path="/clergy-list" component={ClergyListPage} exact />
            <Route path="/departments/:id" component={DeptInfo} exact />
            <Route path="/staff" component={StaffPage} exact />
            <Route path="/" component={Index} exact />
            <Route path="/about" component={About} />
            <Route path="/org" component={OrganizationChart} />
            <Route path="/activities" component={Activities} />
            <Route path="/covid19" component={Covid19} />
            <Route path="/giaoly" component={Giaoly} />
            <Route path="/glgh" component={Glgh} />
            <Route path="/photos" component={photos} />
            <Route path="/forms" component={Forms} />
            <Route path="/catholic_teaching" component={Catholic_teaching} />
            <Route path="/weeklyNews" component={WeeklyNews} />
            <Route path="/contact" component={Contact} />
            <Route path="/PrayerRequest" component={PrayerRequest} />
            <Route path="/PrayerRequestList" component={PrayerRequestList} />
            <Route path="/history" component={History} />
            <Route path="/printed-calendar" component={PrintedCalendarPage} />
            <Route path="/fall-fest" component={FallFestPage} />
            <Route path="/thieu-nhi" component={ThieuNhiPage} />
            <Route path="/massSchedule" component={MassSchedule} />
            <Route path="/learnBible" component={LearnBible} />
            <Route path="/viethong" component={VietHong} />
            <Route path="/viet-hong-teachers" component={VietHongTeacherPage} />
            <Route path="/viet-hong-activities" component={VietHongActivitiesPage} />
            <Route path="/viet-hong-documents" component={VietHongDocumentsPage} />
            <Route path="/viet-hong-classes" component={VietHongClassesPage} />
            <Route path="/viet-hong-classwork/:vietHongClassURL" component={VietHongClassworkPage} />
            <Route path="/st-joseph" component={StJoseph} />
            <Route path="/st-joseph-teachers" component={StJosephTeacherPage} />
            <Route path="/st-joseph-activities" component={StJosephActivitiesPage} />
            <Route path="/st-joseph-documents" component={StJosephDocumentsPage} />
            <Route path="/st-joseph-classes" component={StJosephClassesPage} />
            <Route path="/st-joseph-classwork/:stJosephClassURL" component={StJosephClassworkPage} />
            <Route path="/Articles" component={Articles} />
            <Route path="/ArticleDetail/:date" component={ArticleDetail} />
            <Route path="/cookies" component={CookiePage} />
            <Route path="/saint" component={VNSaints} />
            <Route path="/upload" component={Upload} />
            <Route path="/write-article" component={WriteArticle} />
        </Router>
    )
};

const mapStateToProps = (state) => ({
    token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    auth: (credentials) => authenticate(dispatch, credentials),
    restoreToken: (token) => restoreToken(dispatch, token)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
