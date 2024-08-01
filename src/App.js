import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import StaffPage from './pages/StaffPage';
import DeptInfo from './pages/DeptOwnerPage';
import About from './pages/About';
import RoomReservation from './pages/RoomReservation';
import ChristmasFestival from './pages/ChristmasFestivalPage';
import ChristmasFestivalProgramPage from './pages/ChristmasFestivalProgramPage';
import ChristmasFestivalDisplaysPage from './pages/ChristmasFestivalDisplaysPage';
import ChristmasFestivalMusicPage from './pages/ChristmasFestivalMusicPage';
import OrganizationChart from './pages/OrganizationChart';
import VietHong from './pages/VietHongPage';
import Activities from './pages/ActivitiesPage';
import Covid19 from "./pages/covid19";
import Giaoly from "./pages/giaoly";
import Glgh from "./pages/Glgh";
import CatholicTeaching from "./pages/catholic_teaching";
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
import {setLanguage, getLanguage, setTranslations, setDefaultLanguage} from 'react-multi-lang';
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
//import FeedBackSignUpForm from './pages/FeedbackSignUpForm';
import FeedbackTextForm from './pages/FeedbackTextForm';

//Error/Success Pages
import FormSubmitSuccessPage from './pages/FormSubmitSuccessPage';
import FormSubmitErrorPage from './pages/FormSubmitErrorPage';
import Photos from './pages/photos';

//Google Analytics
ReactGA.initialize('UA-168016188-1', {
    debug: true,
    titleCase: false,
    gaOptions: {}
});
ReactGA.pageview(window.location.pathname + window.location.search);

//Website Cookie for Language
setTranslations({vn, en})
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
    const  routes = [
        { path: '/clergy-list', element: <ClergyListPage /> },
        { path: '/departments/:id', element: <DeptInfo /> },
        { path: '/staff', element: <StaffPage /> },
        { path: '/', element: <Index /> },
        { path: '/about', element: <About /> },
        { path: '/room-reservation', element: <RoomReservation /> },
        { path: '/ChristmasFestival', element: <ChristmasFestival /> },
        { path: '/Christmas-Festival-Program', element: <ChristmasFestivalProgramPage /> },
        { path: '/Christmas-Festival-Displays', element: <ChristmasFestivalDisplaysPage /> },
        { path: '/Christmas-Festival-Music', element: <ChristmasFestivalMusicPage /> },
        { path: '/org', element: <OrganizationChart /> },
        { path: '/activities', element: <Activities /> },
        { path: '/covid19', element: <Covid19 /> },
        { path: '/giaoly', element: <Giaoly /> },
        { path: '/glgh', element: <Glgh /> },
        { path: '/photos', element: <Photos /> },
        { path: '/forms', element: <Forms /> },
        { path: '/catholic_teaching', element: <CatholicTeaching /> },
        { path: '/weeklyNews', element: <WeeklyNews /> },
        { path: '/contact', element: <Contact /> },
        { path: '/PrayerRequest', element: <PrayerRequest /> },
        { path: '/PrayerRequestList', element: <PrayerRequestList /> },
        { path: '/history', element: <History /> },
        { path: '/printed-calendar', element: <PrintedCalendarPage /> },
        { path: '/fall-fest', element: <FallFestPage /> },
        { path: '/thieu-nhi', element: <ThieuNhiPage /> },
        { path: '/massSchedule', element: <MassSchedule /> },
        { path: '/learnBible', element: <LearnBible /> },
        { path: '/viethong', element: <VietHong /> },
        { path: '/viet-hong-teachers', element: <VietHongTeacherPage /> },
        { path: '/viet-hong-activities', element: <VietHongActivitiesPage /> },
        { path: '/viet-hong-documents', element: <VietHongDocumentsPage /> },
        { path: '/viet-hong-classes', element: <VietHongClassesPage /> },
        { path: '/viet-hong-classwork/:vietHongClassURL', element: <VietHongClassworkPage /> },
        { path: '/st-joseph', element: <StJoseph /> },
        { path: '/st-joseph-teachers', element: <StJosephTeacherPage /> },
        { path: '/st-joseph-activities', element: <StJosephActivitiesPage /> },
        { path: '/st-joseph-documents', element: <StJosephDocumentsPage /> },
        { path: '/st-joseph-classes', element: <StJosephClassesPage /> },
        { path: '/st-joseph-classwork/:stJosephClassURL', element: <StJosephClassworkPage /> },
        { path: '/Articles', element: <Articles /> },
        { path: '/ArticleDetail/:date', element: <ArticleDetail /> },
        { path: '/cookies', element: <CookiePage /> },
        { path: '/saint', element: <VNSaints /> },
        { path: '/upload', element: <Upload /> },
        { path: '/feedback-signup', element: <FeedbackTextForm /> },
        { path: '/form-success', element: <FormSubmitSuccessPage /> },
        { path: '/form-error', element: <FormSubmitErrorPage /> },
    ]

    useEffect(() => {
        /*if(!props.token && !sessionStorage.getItem('token')) {
            (async () => {
                const auth = await props.auth({
                    username: 'anonymous',
                    password: 'anonymous'});
                sessionStorage.setItem('token', auth.token);
            })();
        } else if(sessionStorage.getItem('token')){
            props.restoreToken(sessionStorage.getItem('token'));
        } else {
            sessionStorage.setItem('token', props.token);
        }*/
    }, [props]);
    return (
        <Router>
            <Routes>
                {routes.map(route => <Route path={route.path} element={route.element} />)}
            </Routes>
        </Router>
    )
};

/*
const mapStateToProps = (state) => ({
    token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    auth: (credentials) => authenticate(dispatch, credentials),
    restoreToken: (token) => restoreToken(dispatch, token)
})*/
//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;