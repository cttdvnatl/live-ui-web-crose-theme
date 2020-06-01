import React from 'react';
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
import History from './pages/HistoryPage';
import PrintedCalendarPage from './pages/PrintedCalendarPage';
import FallFestPage from './pages/FallFestPage';
import ThieuNhiPage from './pages/ThieuNhiPage';
import VietHongTeacherPage from './pages/VietHongTeacherPage';
import VietHongActivitiesPage from './pages/VietHongActivitiesPage';
import VietHongDocumentsPage from './pages/VietHongDocumentsPage';
import VietHongContactPage from './pages/VietHongContactPage';
import MassSchedule from "./pages/MassSchedule";
import LearnBible from "./pages/LearnBible";
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import ReactGA from 'react-ga';

//Google Analytics
ReactGA.initialize('UA-166941054-1', {
  debug: true,
  titleCase: false,
  gaOptions: {
    
  }
});
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <Router>
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" component={DeptInfo} exact />
          <Route path="/staff" component={StaffPage} exact/>
          <Route path="/" component={Index} exact/>
          <Route path="/about" component={About}/>
          <Route path="/org" component={OrganizationChart}/>
          <Route path="/activities" component={Activities}/>
          <Route path="/covid19" component={Covid19}/>
          <Route path="/giaoly" component={Giaoly}/>
          <Route path="/glgh" component={Glgh}/>
          <Route path="/photos" component={photos}/>
          <Route path="/forms" component={Forms}/>
          <Route path="/catholic_teaching" component={Catholic_teaching}/>
          <Route path="/weeklyNews" component={WeeklyNews}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/history" component={History}/>
          <Route path="/printed-calendar" component={PrintedCalendarPage}/>
          <Route path="/fall-fest" component={FallFestPage}/>
          <Route path="/thieu-nhi" component={ThieuNhiPage}/>
          <Route path="/massSchedule" component={MassSchedule}/>
          <Route path="/learnBible" component={LearnBible}/>
          <Route path="/viethong" component={VietHong}/>
          <Route path="/viet-hong-teachers" component={VietHongTeacherPage}/>
          <Route path="/viet-hong-activities" component={VietHongActivitiesPage}/>
          <Route path="/viet-hong-documents" component={VietHongDocumentsPage}/>
          <Route path="/viet-hong-contact" component={VietHongContactPage}/>
          <Route path="/Articles" component={Articles}/>
          <Route path="/ArticleDetail/:date" component={ArticleDetail}/>
    </Router>
  ) 
};
export default App;
