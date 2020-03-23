import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';
import About from './pages/About';
import Org from './pages/OrgPage';
import VietHong from './pages/VietHongPage';
import Activities from './pages/Activities';
import './css/style.css';

const App = () => {
  return (
    <Router>
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" component={DeptInfo} exact />
          <Route path="/directors" component={Directors} exact/>
          <Route path="/" component={Index} exact/>
          <Route path="/about" component={About}/>}/>
          <Route path="/org" component={Org}/>}/>
          <Route path="/vietHong" component={VietHong}/>}/>
          <Route path="/activities" component={Activities}/>
    </Router>
  ) 
};
export default App;
