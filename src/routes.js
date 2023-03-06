import About from "./pages/About";
import ActivitiesPage from "./pages/ActivitiesPage";
import ArticleDetail from "./pages/ArticleDetail";
import Articles from "./pages/Articles";
import CatholicTeaching from "./pages/CatholicTeaching";
import ClergyListPage from "./pages/ClergyListPage";
import ContactPage from "./pages/ContactPage";
import CookiePage from "./pages/CookiePage";
import Covid19 from "./pages/covid19";
import DeptOwnerPage from "./pages/DeptOwnerPage";
import FeedbackTextForm from "./pages/FeedbackTextForm";
import Forms from "./pages/forms";
import FormSubmitErrorPage from "./pages/FormSubmitErrorPage";
import FormSubmitSuccessPage from "./pages/FormSubmitSuccessPage";
import GiaoLy from "./pages/giaoly";
import Glgh from "./pages/Glgh";
import Index from "./pages/Index";
import LearnBible from "./pages/LearnBible";
import MassSchedule from "./pages/MassSchedule";
import PhotoPage from "./pages/PhotoPage";
import PrayerRequest from "./pages/PrayerRequest";
import PrayerRequestList from "./pages/PrayerRequestList";
import Staff from "./pages/StaffPage";
import StJosephActivitiesPage from "./pages/StJosephActivitiesPage";
import StJosephClassesPage from "./pages/StJosephClassesPage";
import StJosephClassworkPage from "./pages/StJosephClassworkPage";
import StJosephDocumentsPage from "./pages/StJosephDocumentsPage";
import StJoseph from "./pages/StJosephPage";
import StJosephTeacherPage from "./pages/StJosephTeacherPage";
import Upload from "./pages/Upload";
import VietHongActivitiesPage from "./pages/VietHongActivitiesPage";
import VietHongClassesPage from "./pages/VietHongClassesPage";
import VietHongClassworkPage from "./pages/VietHongClassworkPage";
import VietHongDocumentsPage from "./pages/VietHongDocumentsPage";
import VietHong from "./pages/VietHongPage";
import VietHongTeacherPage from "./pages/VietHongTeacherPage";
import VNSaints from "./pages/VNSaints";
import WeeklyNews from "./pages/WeeklyNews";
import HistoryPage from "./pages/HistoryPage";
import PrintedCalenderPage from './pages/PrintedCalendarPage'
import ThieuNhiPage from './pages/ThieuNhiPage'
import Org from "./pages/OrganizationChart";
import ChristmasFestivalDisplaysPage from './pages/ChristmasFestivalDisplaysPage'
import ChristmasFestivalMusicPage from "./pages/ChristmasFestivalMusicPage";
import ChristmasFestivalProgramPage from "./pages/ChristmasFestivalProgramPage";
import ChristmasFestivalPage from './pages/ChristmasFestivalPage'
import React from "react";
import Preloader from "./components/Preloader";
import GalleryPage from "./pages/GalleryPage";

const vietHongRoutes = {
    path: '/viet-hong',
    subroutes: [
        { path: '', component: <VietHong />},
        { path: 'teachers', component: <VietHongTeacherPage /> },
        { path: 'activities', component: <VietHongActivitiesPage /> },
        { path: 'documents', component: <VietHongDocumentsPage /> },
        { path: 'classes', component: <VietHongClassesPage /> },
        { path: 'classwork/:vietHongClassURL', component: <VietHongClassworkPage />},
    ]
}

const stJosephRoutes = {
    path: 'st-joseph',
    subroutes: [
        { path: '', component: <StJoseph />},
        { path: 'teachers', component: <StJosephTeacherPage /> },
        { path: 'activities', component: <StJosephActivitiesPage /> },
        { path: 'documents', component: <StJosephDocumentsPage /> },
        { path: 'classes', component: <StJosephClassesPage /> },
        { path: 'classwork/:stJosephClassURL', component: <StJosephClassworkPage />},
    ]
}

const christmasRoutes = {
    path: 'christmas-festival',
    subroutes: [
        { path: '', component: <ChristmasFestivalPage />},
        { path: 'program', component: <ChristmasFestivalProgramPage />},
        { path: 'displays', component: <ChristmasFestivalDisplaysPage />},
        { path: 'music', component: <ChristmasFestivalMusicPage />}
    ]
}

const routes = [
    { path: '/clergy-list', component: <ClergyListPage /> },
    { path: '/departments/:id', component: <DeptOwnerPage /> },
    { path: '/staff', component: <Staff />, index: true},
    { path: '/history', component: <HistoryPage />},
    // { path: '/', component: <React.Suspense fallback={<Preloader />}><Index /></React.Suspense>},
    { path: '/', component: <Index />},
    { path: '/gallery/:galleryId', component: <GalleryPage /> },
    { path: '/about', component: <About /> },
    { path: '/org',  component: <Org /> },
    { path: '/activities', component: <ActivitiesPage /> },
    { path: '/covid19', component: <Covid19 /> },
    { path: '/giaoly', component: <GiaoLy /> },
    { path: '/glgh', component: <Glgh /> },
    { path: '/photos', component: <PhotoPage /> },
    { path: '/forms', component: <Forms /> },
    { path: '/catholic-teaching', component: <CatholicTeaching /> },
    { path: '/weekly-news', component: <React.Suspense fallback={<Preloader />}><WeeklyNews /></React.Suspense> },
    { path: '/contact', component: <ContactPage /> },
    { path: '/prayer-request', component: <PrayerRequest /> },
    { path: '/prayer-request-list', component: <PrayerRequestList /> },
    { path: '/printed-calendar', component: <PrintedCalenderPage />},
    // { path: '/fall-fest', component: FallFestPage },
    { path: '/thieu-nhi', component: <ThieuNhiPage /> },
    { path: '/mass-schedule', component: <MassSchedule /> },
    { path: '/learn-bible', component: <React.Suspense fallback={<Preloader />}><LearnBible /></React.Suspense> },
    vietHongRoutes,
    stJosephRoutes,
    christmasRoutes,
    { path: '/articles', component: <Articles /> },
    { path: '/article-detail/:date', component: <ArticleDetail /> },
    { path: '/cookies', component: <CookiePage /> },
    { path: '/saint', component: <VNSaints /> },
    { path: '/upload', component: <Upload /> },
    { path: '/feedback-signup', component: <FeedbackTextForm /> },
    { path: '/form-success', component: <FormSubmitSuccessPage /> },
    { path: '/form-error', component: <FormSubmitErrorPage /> },
]

export default routes;