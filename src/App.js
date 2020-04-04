import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';
import About from './pages/About';
import Org from './pages/Org';
import VietHong from './pages/VietHongPage';
import Activities from './pages/ActivitiesPage';
import Covid19 from "./pages/covid19";
import Giaoly from "./pages/giaoly";
import Glgh from "./pages/Glgh";
import photos from "./pages/photos";
import Catholic_teaching from "./pages/catholic_teaching";
import Forms from "./pages/forms";
import WeeklyNews from "./pages/weeklyNews";
import Contact from "./pages/ContactPage";
import History from './pages/HistoryPage';
import PrintedCalenderPage from './pages/PrintedCalenderPage';
import FallFestPage from './pages/FallFestPage';
import ThieuNhiPage from './pages/ThieuNhiPage';
import VietNguThayCoPage from './pages/VietNguThayCoPage';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';


const App = () => {
  return (
    <Router>
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" component={DeptInfo} exact />
          <Route path="/directors" component={Directors} exact/>
          <Route path="/" component={Index} exact/>
          <Route path="/about" component={About}/>
          <Route path="/org" component={Org}/>
          <Route path="/vietHong" component={VietHong}/>
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
          <Route path="/printed-calender" component={PrintedCalenderPage}/>
          <Route path="/fall-fest" component={FallFestPage}/>
          <Route path="/thieu-nhi" component={ThieuNhiPage}/>
          <Route path="/saturday-school-teachers" component={VietNguThayCoPage}/>
          <Route path="/Articles" component={Articles}/>
          <Route path="/ArticleDetail/:date" component={ArticleDetail}/>
    </Router>
  ) 
};
export default App;
